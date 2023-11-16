# MensagensZodiacais - Webservices
### Trabalho individual onde se deve consumir e combinar os dados de duas ou mais APIs HTTP em um web app

## Sobre o site
<p><b>MensagensZodiacas</b> é um site onde você fornece seu nome, escolhe o seu signo e fornece características específicas para montar um avata.</p>
<p> A idéia por trás da coleta desses dados é te fornecer uma mensagem correspondente ao dia do acesso sobre o seu signo e um avatar com algumas caracteríscas suas para tornar sua experiência mais divertida e lhe fornecer mensagens sobre o seu signo.</p>
<p>E ai bora vê como funciona? :sunglasses: </p> 

## Instruções para utilização

<p>Pra utiliza-ló é muito fácil, basta você seguir os passos igual ao vídeo trocando as informações colocas de exemplos pelas suas opções. :grinning:</p>

https://github.com/LeticiaKOSilva/MenssagensZodiacais-Webservices/assets/129966396/e6d8739c-b4aa-4511-ac16-47e647045b93

Agora é só clicar no link e pesquisar sua mensagem do dia :slightly_smiling_face:: 
[MensagensZodiacais](https://leticiakosilva.github.io/MenssagensZodiacais-Webservices/)



## Um pouco sobre o desenvolvimento do site

<p>Esse site foi desenvolvido após uma proposta de trabalho prático onde seria necessário consuumir 2 ou mais APIS criando uma ligação entre elas.</p>
<p>O site também deveria ser responsivo</p>

<p>Com isso escolhi 3 APIS para fazer o meu site, sendo elas:</p>

| | NOME | LINK | USABILIDADE | |
| --- | --- | --- | --- | --- |
| | Astroo-API | [Link API](https://kayoo123.github.io/astroo-api/hebdomadaire.json) | Utilizar a mensagem do dia retornada no json da API | |
| | Cloud Translation API | [Link da documentação API](https://cloud.google.com/translate/docs/reference/rest) | Trazuzir a mensagem retornada da Astroo-API para o idioma português do Brasil | |
| | Dicebear | [Link da documentação da API](https://www.dicebear.com/styles/avataaars) | Criação do avatar com as características escolhidas pelo usuário | |

<p> Com isso foram criados 11 arquivos, para manipular e combinar essas APIS entre si. Logo na tabela abaixo está o nome dos arquivos e o que eles fazem no geral.
<br><br>
<b>OBS: Caso queira saber mais sobre um código basta clicar no arquivo correspondente, presente neste repositório do gtihub :+1:</b>
</p>

| | NOME DO ARQUIVO | DESCRIÇÃO GERAL DE SUA FUNCIONALIDADE | |
| --- | --- | --- | --- |
| | index.html | Site inicial que é usado para o usuário fornecer os dados necessários (nome, signo, características de seu avatar) | |
| | messageHoroscope.html | Site que tem por função printar o resultado do processamento dos dados junto as APIS. Ela que vai printar o nome do usuário, seu signo, a mensagem do dia para o seu signo e seu avatar | |
| | apresentation.html | Site usado para apresentar e mostrar a utilização do MensagensZodiacais | |
| | index.css | Arquivo resposnável por criar o estilo da página index.html e gerenciar sua responsividade | |
| | messageHoroscope.css | Arquivo resposnável por criar o estilo da página messageHoroscope.html e gerenciar sua responsividade | |
| | apresentation.css | Arquivo resposnável por criar o estilo da página apresentation.html e gerenciar sua responsividade | |
| | initial.js | Realiza validações para a página index.html, recupera e processa os dados, chamando os métodos que chamam as APIS e manda o resultado (mensagem do dia do signo em português, avatar no formato de imagem, nome do usuário e seu signo) e nos direciona para a página messageHorroscope.html | |
| | HoroscopeAPIRequest.js | Arquivo que faz uma requisição a  API <b>astroo-API</b>, recupera seu json, procura a mensagem correspondente ao signo e com a ajuda da API <b>cloud translation API</b> traduz a mensagem do idioma Francês para o Português do Brasil | |
| | json_style_avatar.js | Arquivo com um json feito para representar as características disponíveis para os avatares, além de métodos para acessá-los de forma mais rápida | |
| | avatar.js | Arquivo que faz uma requisição a API <b>dicebear</b> passando as características escolhidas pelo usuário e as características padrões escolhidas pelo criador e cria um avatar no formato de imagem | |
| | messageHoroscope.js | Arquivo que realiza validações da página messageHoroscope.html, recupera os dados passados pelo arquivo initial.js e coloca eles nas tags correspondentes da página messageHoroscope.html | |

## Imagem dos 3 sites
<p><b>OBS:</b> As imagens fornecidas abaixo estão na versão para notebooks e monitores menores, se você estiver em outros dispositivos (smartphone, tablet ou monitores grandes) encontra algumas diferenças no layout.</p>

### -> Imagem do site apresentation.html

<img src="https://github.com/LeticiaKOSilva/MenssagensZodiacais-Webservices/blob/main/Imagens_Site/site_apresentacao.png" width="950px">

### -> Imagem do site index.html

<img src="https://github.com/LeticiaKOSilva/MenssagensZodiacais-Webservices/blob/main/Imagens_Site/imagem_index.png" width="950px">

### -> Imagem do site messageHoscope.html

<img src="https://github.com/LeticiaKOSilva/MenssagensZodiacais-Webservices/blob/main/Imagens_Site/imagem_messageHoroscope.png" width="950px">
 

