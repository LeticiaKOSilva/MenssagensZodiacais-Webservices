
var req = new XMLHttpRequest();

/*
    Método responsável por chamar a API dicebear que cria avatares, passando as caracteríscas do
    avatar escolhidas pelo usuário como (cor e tipo de cabelo, cor e tipo de roupa, cor da pela)
    e características padrões escolhidas por mim(olhos, sobrancelha, boca, tamanho). Retorna o 
    avatar.
*/
function getAvatar(typeCabelo,hairColor,color,clothingType,clothingColor) {
    return new Promise((resolve,reject) => {
        req.onload = function () {
            if (req.status === 200) {
                // avatar de um arquivo SVG podem ser inseridos em tags <img> ou <object>
                // a tag <img> foi a escolhida
                var avatarImage = document.createElement('img');
                avatarImage.src = 'data:image/svg+xml,' + encodeURIComponent(req.responseText);
                resolve(avatarImage);
                //document.body.appendChild(avatarImage);
            } else {
                reject("Erro ao procurar o avatar: Avatar não encontrado!");
            }
        };

        req.open('GET', 'https://api.dicebear.com/7.x/avataaars/svg?accessories=eyepatch&clothesColor=' + clothingColor + '&clothing=' + clothingType + '&eyebrows=frownNatural&eyes=default&hairColor=' + hairColor + '&mouth=twinkle&skinColor=' + color + '&top='+typeCabelo+'&size=250');
        req.send(null);
    });
}


