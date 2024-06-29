function exercicio1() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = "";
    if (num1 > num2) {
        resultado = "O maior número é: " + num1;
    } else if (num2 > num1) {
        resultado = "O maior número é: " + num2;
    } else {
        resultado = "Os números são iguais.";
    }
    document.getElementById('resultado1').innerText = resultado;
}

function exercicio2() {
    let valor = parseFloat(document.getElementById('valor').value);
    let resultado = "";
    if (valor > 0) {
        resultado = "O valor é positivo.";
    } else if (valor < 0) {
        resultado = "O valor é negativo.";
    } else {
        resultado = "O valor é zero.";
    }
    document.getElementById('resultado2').innerText = resultado;
}

function exercicio3() {
    let letra = document.getElementById('letraFM').value.toUpperCase();
    let resultado = "";
    if (letra === 'F') {
        resultado = "F - Feminino";
    } else if (letra === 'M') {
        resultado = "M - Masculino";
    } else {
        resultado = "Sexo Inválido";
    }
    document.getElementById('resultado3').innerText = resultado;
}

function exercicio4() {
    let letra = document.getElementById('letraVC').value.toLowerCase();
    let resultado = "";
    if ('aeiou'.includes(letra)) {
        resultado = "Vogal";
    } else {
        resultado = "Consoante";
    }
    document.getElementById('resultado4').innerText = resultado;
}

function exercicio5() {
    let numero = parseInt(document.getElementById('numero5').value);
    let resultado = "";
    if (numero % 5 === 0) {
        resultado = "O número é divisível por 5.";
    } else {
        resultado = "O número não é divisível por 5.";
    }
    document.getElementById('resultado5').innerText = resultado;
}

function exercicio6() {
    let numero = parseInt(document.getElementById('numero6').value);
    let resultado = "";
    if (numero >= 20 && numero <= 90) {
        resultado = "O número está entre 20 e 90.";
    } else {
        resultado = "O número não está entre 20 e 90.";
    }
    document.getElementById('resultado6').innerText = resultado;
}

function exercicio7() {
    let anoAtual = parseInt(document.getElementById('anoAtual').value);
    let anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    let idade = anoAtual - anoNascimento;
    let resultado = "";
    if (idade >= 16) {
        resultado = "Você poderá votar este ano.";
    } else {
        resultado = "Você não poderá votar este ano.";
    }
    document.getElementById('resultado7').innerText = resultado;
}

function exercicio8() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let media = (nota1 + nota2) / 2;
    let resultado = "";
    if (media >= 6) {
        resultado = "Aluno aprovado. Média: " + media;
    } else {
        resultado = "Aluno reprovado. Média: " + media;
    }
    document.getElementById('resultado8').innerText = resultado;
}

function exercicio9() {
    let horasProfessor1 = parseFloat(document.getElementById('horasProfessor1').value);
    let valorHoraProfessor1 = parseFloat(document.getElementById('valorHoraProfessor1').value);
    let salarioProfessor1 = horasProfessor1 * valorHoraProfessor1;

    let horasProfessor2 = parseFloat(document.getElementById('horasProfessor2').value);
    let valorHoraProfessor2 = parseFloat(document.getElementById('valorHoraProfessor2').value);
    let salarioProfessor2 = horasProfessor2 * valorHoraProfessor2;

    let resultado = "";
    if (salarioProfessor1 > salarioProfessor2) {
        resultado = "O primeiro professor tem um salário maior: " + salarioProfessor1;
    } else if (salarioProfessor2 > salarioProfessor1) {
        resultado = "O segundo professor tem um salário maior: " + salarioProfessor2;
    } else {
        resultado = "Os dois professores têm o mesmo salário.";
    }
    document.getElementById('resultado9').innerText = resultado;
}

function exercicio10() {
    let numero = parseInt(document.getElementById('numero10').value);
    let resultado = "";
    if (numero % 2 === 0) {
        resultado = "O número é par.";
    } else {
        resultado = "O número é ímpar.";
    }
    document.getElementById('resultado10').innerText = resultado;
}

function exercicio11() {
    let nota1 = parseFloat(document.getElementById('nota11a').value);
    let nota2 = parseFloat(document.getElementById('nota11b').value);
    let media = (nota1 + nota2) / 2;
    let resultado = "";

    if (media === 10) {
        resultado = "Aprovado com Distinção";
    } else if (media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    resultado += ". Média alcançada: " + media;
    document.getElementById('resultado11').innerText = resultado;
}