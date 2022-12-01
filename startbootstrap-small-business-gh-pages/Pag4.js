function calcular(){
    var km = parseFloat(document.getElementById('km').value);
    var combustivel = parseFloat(document.getElementById('combustivel').value);

    var total = (km/8)*combustivel;
    document.getElementById('res').innerHTML=total;
}