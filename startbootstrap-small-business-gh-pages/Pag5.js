function calcular(){
    var largura = parseFloat(document.getElementById('largura').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var total = (altura*largura)*36;
    document.getElementById('res').innerHTML=total;
}