//Recuperando id de componentes que seram utilizados nesse arquivo initial.js
var response = document.getElementById('resp');
var dados = document.getElementById('dados');
var button = document.querySelector("#button");
var sexo = document.getElementById("sexo");
var typeCabelo = document.getElementById("tipoCabelo");

/*
    Método que recebe um signo em português e retorna ele em Francês para que possa pesquisa-ló
    no json da API de mensagem do dia de horóscopo.
*/
function signs(sign){
    signs = {
        "aquario":"verseau",
        "peixes": "poissons",
        "aries": "belier",
        "touro": "taureau",
        "gemeos": "gemeaux",
        "cancer": "cancer",
        "leao": "lion",
        "virgem": "vierge",
        "libra": "balance",
        "escorpiao": "scorpion",
        "sargitario": "sagittaire",
        "capricornio":"capricorne"  
    }
    return signs[sign];
}

/*
    Evento disparado quando o usuário escolher um dos options do select de id = "sexo" para que
    se posso colocar as opçãoes disponíveis para tipos de cabelo que são diferentes de acordo
    com o sexo escolhido pelo usuário.
*/
sexo.addEventListener("change", function(){
    let selectSexo = sexo.value;

    if(selectSexo === "feminino"){
        //Adicionando as opções adicionais quando o sexo feminino é escolhido
        let curto = document.createElement("option");
        curto.value = "curto ondulado";
        curto.text = "curto ondulado";
        typeCabelo.appendChild(curto);

        let longo = document.createElement("option");
        longo.value = "longo ondulado";
        longo.text = "longo ondulado";
        typeCabelo.appendChild(longo);
    }else{
        //Remove as opções caso seja masculino
        let curto = typeCabelo.querySelector("option[value='curto ondulado']");
        if(curto){
            typeCabelo.removeChild(curto);
        }

        let longo = typeCabelo.querySelector("option[value='longo ondulado']");
        if(longo){
            typeCabelo.removeChild(longo);
        }
    }
});

/*
    Método reponsável por gerenciar e invocar os outros métodos presentes nessa e em outros
    arquivos, sendo um método do tipo async por necessitar esperar algumas respostas de outros
    métodos.
*/
button.onclick = async function(){
    //Antes de realizar as solicitações verifica se o campo nome foi preenchido certinho
    let nameUser = document.getElementById("name").value;

    // Se não ouver nada ele dispara a mesnsagem para o usuário
    if(nameUser.length === 0){
        alert('Atenção: o campo nome não foi preenchido!');
        return;
    }else{

        //Pegando os dados escolhidos e fornecidos pelo usuário
        let sexo = document.getElementById("sexo").value;//Sexo eschido pelo usuário
        let typeCabelo = document.getElementById("tipoCabelo").value;//Tipo de cabelo do avatar
        let sign = document.getElementById("sign").value;//O signo do usuário
        let hairColor = document.getElementById("hairColor").value;//cor do cabelo do avatar
        let color = document.getElementById("color").value;//Cor da pele do avatar 
        let clothingType = document.getElementById("clothingType").value;//Tipo de roupa do avatar
        let clothingColor = document.getElementById("clothingColor").value;//Cor da roupa do avatar
        
        console.log("Verificando informações\n signo = " + sign + "\ncor do cabelo = " + hairColor + "\ncor da pele =" + color +
        "\ntipo de roupa = " + clothingType + "\ncor da roupa = " + clothingColor + "\nsexo =" + sexo + "\ntipo de cabelo = " + typeCabelo +"\n Nome do participante =" + nameUser);
        try{
            
            //Chama o método que retorna o signo correspondente em francês
            let signI = signs(sign)
            console.log("Signo do json:" + signI);

            //Chama a api que retorna a mensagem do dia para o signo fornecido
            let result = await apiRequest(signI);
            console.log(result);
            
            //Chama os métodos do json para pegar o valor das características escolhidas para o avatar
            typeCabelo = getTypeCabelo(sexo,typeCabelo);
            hairColor = getHairColor(hairColor);
            color = getColor(color);
            clothingType = getClothingType(clothingType);
            clothingColor = getClothingColor(clothingColor);
            
            //Chama o método que recebe todas as características do avatar e retorna o avatar utilizando a API https://api.dicebear.com
            var image = await getAvatar(typeCabelo, hairColor, color, clothingType, clothingColor);
            
            //Passa o nome do usuário, signo, mensagem do dia e avatar para a página messageHoroscope.html para que seja exibido nela.
            localStorage.setItem('nameUser', nameUser);
            localStorage.setItem('sign', sign);
            localStorage.setItem('result', result);
            localStorage.setItem('image',image.src);
           
            //Direciona o dispositivo para a página correspondente abaixo.
            window.location.href = 'messageHoroscope.html';
    
        }catch(error){
            alert(error);
        }
    }
}


/*async function siteResponse(nameUser, sign, result, typeCabelo, hairColor, color, clothingType, clothingColor){
    console.log("Verificando informações\n signo = " + sign + "\ncor do cabelo = " + hairColor + "\ncor da pele =" + color +
        "\ntipo de roupa = " + clothingType + "\ncor da roupa = " + clothingColor + "\ntipo de cabelo = " + typeCabelo +"\n Nome do participante =" + nameUser);
   
    var name = document.getElementById('nameUser');
    var signName = document.getElementById('signn');
    var texts = document.getElementById('text');
    var image = await getAvatar(typeCabelo, hairColor, color, clothingType, clothingColor);
    
    console.log(img);
    document.body.appendChild(image);
    name.textContent = nameUser;
    signName.textContent = sign;
    texts.textContent = result;

    return true;
}*/
