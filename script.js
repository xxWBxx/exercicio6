function calcularAreaCirculo(raio) {
    
    var area = Math.PI * raio ** 2;

    return area;
}

function calcularPerimetroCirculo(raio) {
    
    var perimetro = 2 * Math.PI * raio;

    return perimetro;
}

function exibirResultado() {
   
    var raio = parseFloat(prompt("Digite o valor do raio do círculo: "));

    var area = calcularAreaCirculo(raio);

    var perimetro = calcularPerimetroCirculo(raio);
    
    alert("A área do círculo é: " + area.toFixed(2) + "\nO perímetro do círculo é: " + perimetro.toFixed(2));
}