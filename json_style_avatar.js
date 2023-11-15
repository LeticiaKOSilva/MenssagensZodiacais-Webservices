
//Json para auxiliar na montagem dos avatares que será feita pela API "https://api.dicebear.com"
style_avatar = {
    "Sexo": {
      "feminino": {
        "tipo de cabelo": {
          "curto liso": "bob",
          "curto cacheado": "fro",
          "curto ondulado": "curly",
          "longo liso": "straightAndStrand",
          "longo cacheado": "dreads",
          "longo ondulado": "bigHair",
          "sem cabelo": "sides"
        }
      },
      "masculino": {
        "tipo de cabelo": {
          "curto liso": "shortFlat",
          "curto cacheado": "dreads01",
          "longo liso": "shaggyMullet",
          "longo cacheado": "dreads02",
          "sem cabelo": "sides"
        }
      }},
      "Cor": {
        "branco": "ffdbb4",
        "amarelo": "f8d25c",
        "alaranjado": "fd9841",
        "pardo": "d08b5b",
        "negro": "614335"
      },
      "CorCabelo": {
        "preto": "2c1b18",
        "castanho medio": "4a312c",
        "castanho claro": "724133",
        "loiro escuro": "b58143",
        "loiro claro": "d6b370",
        "ruivo": "a55728",
        "vermelho": "c93305",
        "rosa": "f59797"
      },
      "Tipo Roupa": {
        "blazer": "blazerAndShirt",
        "camisa": "shirtVNeck",
        "moletom": "hoodie",
        "camiseta": "overall"
      },
      "Cor da Roupa": {
        "preto": "262e33",
        "rosa": "ff488e",
        "azul": "25557c",
        "verde": "a7ffc4",
        "cinza": "929598",
        "amarelo": "ffffb1",
        "vermelho": "ff5c5c",
        "azul-claro": "5199e4",
        "rosa-claro": "ffafb9"
    }
}

//Método que recupera no campo chave (tipo de cabelo) do json o valor do tipo do cabelo escolhido pelo usuário para o seu avatar
function getTypeCabelo(sexo,type){
  return style_avatar.Sexo[sexo]["tipo de cabelo"][type];
}

//Método que recupera no campo chave (Cor) do json o valor da cor de pele escolhida pelo usuário para o seu avatar
function getColor(color){
  return style_avatar["Cor"][color];
}

//Método que recupera no campo chave (CorCabelo) do json o valor da cor do cabelo escolhida pelo usuário para o seu avatar
function getHairColor(hairColor){
  return style_avatar["CorCabelo"][hairColor];
}

//Método que recupera no campo chave (Tipo Roupa) do json o valor do tipo de roupa escolhida pelo usuário para o seu avatar
function getClothingType(clothingType){
  return style_avatar["Tipo Roupa"][clothingType];
}

//Método que recupera no campo chave (Cor da Roupa) do json o valor da cor da roupa escolhida pelo usuário para o seu avatar
function getClothingColor(clothingColor){
  return style_avatar["Cor da Roupa"][clothingColor];
}