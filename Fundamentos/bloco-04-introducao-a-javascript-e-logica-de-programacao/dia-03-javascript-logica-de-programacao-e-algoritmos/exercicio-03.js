// 3. Agora inverta o lado do triângulo.
let n = 5; //variável 1
let string = ""; //variável 2
for (let index = 1; index <= n; index++) { //criando um contador
  for (let segundoIndex = 0; segundoIndex < n - index; segundoIndex++) { //criando o segundo
    string += " ";
  }    //Agora para printar o *                                                                
  for (let terceiroIndex = 0; terceiroIndex < index; terceiroIndex++) {
    string += "*";
}
  string += "\n";
} 

console.log(string)