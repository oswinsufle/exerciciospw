function F(){
var temp= parseInt(document.getElementById('Temperatura').value);
document.getElementById('res').innerHTML=(temp+"°C corresponde a "+(temp*1.8+32)+"°F");
}
function C(){
    var temp= parseInt(document.getElementById('Temperatura').value);
    document.getElementById('resp').innerHTML=(temp+"°F corresponde a "+((temp-32)/1.8)+ "°C");
    }