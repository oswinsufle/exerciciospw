function m(){
    var alt= parseInt(document.getElementById('altura').value);
    document.getElementById('res').innerHTML=("Seu peso ideal "+((72.7*alt)-58)+" KG");
    }
    function f(){
        var alt= parseInt(document.getElementById('altura').value);
        document.getElementById('resp').innerHTML=("Seu peso ideal é "+((62.1*alt)-44.7)+ " KG");
        }