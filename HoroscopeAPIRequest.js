var req = new XMLHttpRequest();

/*
    Método que chama a API de horóscopo, pega a mensagem dos signos, extrai a mensagem do
    signo passado por parâmetro, chama o método  translateHoroscope e retorna a mensagem.
*/
function apiRequest(sign) {
    return new Promise((resolve, reject) =>{
        req.onload = function () {
            if (req.status === 200) {
                let resp = req.responseText;
                let horoscope = JSON.parse(resp);
                console.log(horoscope);

                translateHoroscope(horoscope).then((translatedHoroscope) => {
                    //console.log("Horóscopo traduzido:", translatedHoroscope.taureau);
                    if(translatedHoroscope.hasOwnProperty(sign)){
                        console.log("Entrou");
                        resolve(translatedHoroscope[sign]);
                    }
                }).catch((error) => {
                    console.error("Erro na tradução do horóscopo:", error);
                    reject(error);
                });
            } else {
                reject("Erro ao procurar site: Site não encontrado!");
            }
        };
        req.open('GET', 'https://kayoo123.github.io/astroo-api/hebdomadaire.json');
        req.send(null);
    });
}

//Método responsável preparar os dados e retornar a mensagem traduzida
function translateHoroscope(horoscope) {
    const targetLanguage = 'pt'; // Idioma de destino (Português)
    const translationPromises = [];

    for (const sign in horoscope) {
        if (horoscope.hasOwnProperty(sign)) {
            const description = horoscope[sign];
            const translationPromise = translateDescription(description, targetLanguage);
            translationPromises.push(translationPromise);
        }
    }

    return Promise.all(translationPromises).then((translatedDescriptions) => {
        const translatedHoroscope = {};

        let i = 0;
        for (const sign in horoscope) {
            if (horoscope.hasOwnProperty(sign)) {
                translatedHoroscope[sign] = translatedDescriptions[i];
                i++;
            }
        }

        return translatedHoroscope;
    });
}

/*
    Método reponsável por traduzir a mensagem do signo correspondente recuperado do json da
    API de horóscopo do idioma Francês para o português do Brasil utilizando o google API
*/
function translateDescription(description, targetLanguage) {
    return new Promise((resolve, reject) => {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(description)}`;
        var req = new XMLHttpRequest();

        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    const response = JSON.parse(req.responseText);
                    if (response && response[0] && Array.isArray(response[0])) {
                        const translatedText = response[0].map((item) => item[0]).join(" ");
                        resolve(translatedText);
                    } else {
                        reject("Tradução não disponível");
                    }
                } else {
                    reject("Erro na solicitação de tradução");
                }
            }
        };

        req.open('GET', url, true);
        req.send(null);
    });
}
