// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Didite a altura do retângulo:'))
  const largura = Number(prompt('Didite a largura do retângulo:'))

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual é o ano atual?'))
  const anoDeNascimento = Number(prompt('Em que ano você nasceu?'))
  
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const pesoUsuario = peso
  const alturaUsuario = altura
  const imc = pesoUsuario / (alturaUsuario * alturaUsuario)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const seuNome = prompt('Qual é o seu nome?')
  const suaIdade = Number(prompt('Qual é a sua idade?'))
  const seuEmail = prompt('Qual é o seu e-mail?')
  
  console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Qual é a sua cor favorita?')
  const corFavorita2 = prompt('Qual é a sua segunda cor favorita?')
  const corFavorita3 = prompt('Qual é a sua terceira cor favorita?')
  const coresFavoritas = [corFavorita1, corFavorita2, corFavorita3]
  
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string3 = string
  const string4 = string3.toUpperCase()
  return string4
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoTeatro = custo
  const valorDoIngresso = valorIngresso
  const quantIngressos = custoTeatro / valorDoIngresso

  return quantIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const minhaString = string1
  const suaString = string2
  const tamanhoDaMinha = minhaString.length
  const tamanhoDaSua = suaString.length

  return tamanhoDaMinha === tamanhoDaSua
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const array1 = array
  const primeiroItem = array1[0]

  return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const array2 = array
  const ultimoItem = array2[array.length -1]

  return ultimoItem
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const array3 = array
  const primeiraPosicao = array3[0]
  const ultimaPosicao = array3[array3.length -1]
  
  array3[array3.length -1] = primeiraPosicao
  array3 [0] = ultimaPosicao

  return array3
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const string5 = string1
const string6 = string2

return string5.toUpperCase() === string6.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual o ano atual?'))
  const anoNasc = Number(prompt('Em qual ano fulano nasceu?'))
  const anoRG = Number(prompt('Em qual ano o RG de fulano foi emitido?'))

  const renovacao20 = anoAtual - anoNasc <= 20 && anoAtual - anoRG >= 5
  const renovacao21a50 = anoAtual - anoNasc > 20 <= 50 && anoAtual - anoRG >= 10
  const renovacao51Mais = anoAtual - anoNasc > 50 && anoAtual - anoRG >= 15

  console.log(renovacao20 || renovacao21a50 || renovacao51Mais)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = ano

  return anoBissexto % 400 && anoBissexto % 4 && anoBissexto % 100 !== 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maioridade = Boolean(prompt('Tem mais de 18 anos?'))
  const EM = Boolean(prompt('Tem Ensino Médio completo?'))
  const disponibilidade = Boolean(prompt('Tem disponibilidade exclusiva?'))

  console.log(maioridade && EM && disponibilidade)
}