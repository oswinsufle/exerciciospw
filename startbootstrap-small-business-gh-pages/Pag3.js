function total(){
    var nome1 = parseFloat(document.getElementById('nome1').value);
    var preço1 = parseFloat(document.getElementById('preço1').value);
    var quantidade1 = parseFloat(document.getElementById('quantidade1').value);
    
    var total1= (preço1*quantidade1);
    document.getElementById('resposta1').innerHTML=total1;

    var nome2 = parseFloat(document.getElementById('nome2').value);
    var preço2 = parseFloat(document.getElementById('preço2').value);
    var quantidade2 = parseFloat(document.getElementById('quantidade2').value);
    
    var total2= (+preço2*quantidade2);
    document.getElementById('resposta2').innerHTML=total2;

    var nome3 = parseFloat(document.getElementById('nome3').value);
    var preço3 = parseFloat(document.getElementById('preço3').value);
    var quantidade3 = parseFloat(document.getElementById('quantidade3').value);
    
    var total3= (preço3*quantidade3);
    document.getElementById('resposta3').innerHTML=total3;

    var total = total1+total2+total3;
    document.getElementById('resposta4').innerHTML=total;
}