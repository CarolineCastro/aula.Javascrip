/*
//aula 1
var nome = "Caroline Castro";
var idade = 29;
var idade2 = 10; //se transformados em string o alert as concatena
var frase = "Japao e o melhor time do mundo"
//alert("Bem vindo " + nome + " tem " + idade + " anos.");
//alert(idade + idade2);

console.log(nome); //faz com que as variaveis sejam exibidas no console
console.log(idade + idade2);
console.log(frase.replace("Japao", "Brasil"));  //o replace substitui o que esta antes da virgula para o que esta depois
console.log(frase.toUpperCase);  //coloca o texto em caixa alta
console.log(frase.toLowerCase);  //coloca o texto em caixa baixa

//o console pode ser usado para debigar o codigo*/

/*
//aula 2
var lista = ["maca", "pera", "laranja"]; //array

//var fruta = {nome:"maca", cor:"vermelha"} //diciionario

var frutas = [
  { nome: "maca", cor: "vermelha" },
  { nome: "uva", cor: "roxa" },
];

//lista.push("uva"); inserir um elemento na lista
//lista.pop(); remove o ultimo elemento da lista
//console.log(lista[1]);
console.log(lista.reverse()); //reverse imprime os itens da lista ao contrario
console.log(lista.toString()); //transforma a lista em string
console.log(lista.join("-")); //separa os elementos da lista com o que estiver entre ""

console.log(fruta.nome);
alert(fruta.cor);

console.log(frutas);*/

/*
//aula 3
var idade = prompt("Qual a sua idade?"); //prompt exibe uma pergunta com uma caixa de texto para o usuario escrever
//var idade = 18;
if (idade >= 18) {
  alert("maior de idade");
} else {
  alert("menor de idade");
}

var count = 5;
while (count <= 5) {
  console.log(count);
  alert(count);
  count++;
}

var i;
for (i = 0; i <= 5; i++) {
  alert(i);
}

var d = new Date();
alert(d.getMonth() + 1);*/

/*
//aula 4

function soma(n1, n2) {
  return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japao", "Japao", "Brasil"));

//se var validar fosse aqui, a variavel fica no escopo global
function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

//aula 5

function clicou() {
  //alert("obrigado por clicar");
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigado por clicar</b>";
  //console.log(document.getElementById("agradecimento"));
}
function redirecionar() {
  window.open("https://globallabs.academy/");
  window.Location.href = "https://globallabs.academy/";
}
function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
  alert("Pagina carregada");
}
function funcaoChance(elemento) {
  console.log(elemento.value);
}
