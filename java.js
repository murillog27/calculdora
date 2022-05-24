var btn = document.querySelectorAll(".key li"),
    input = document.querySelector("imput-valor"),
    operador = document.querySelectorAll("operador");


for(var i = 0; i<btn.length; i++){
    document.onkeypress = function(event){
        var key = event.charCode;
        //mudança para o navegador
        // firefox interpretar a calculadora
        for(var e = 0; e <= 10; e++){
            if(key === (48+e)){
                input.innerHTML += e;
            }
        }
        switch (key){
                case 42:
                input.innerHTML += "*";
                break;
                case 42:
                input.innerHTML += "*";
                break;
                case 45:
                input.innerHTML += "*";
                break;
                case 46:
                input.innerHTML += "*";
                break;
                case 47:
                input.innerHTML += "/"
                break;
            case 13:
            case 61:
        var equação = imput.innerHTML;
        if(equacao){
            try{
                input.innerHTML = eval(equacao);
             } catch (e) {
                    alert ('erro na expressaão')
                }
            }
            break;
        case 67:
        case 99:
            input.innerHTML = "";
            break;
            default:
            break;
            }
        };
        btn[i].addEventListener('click', function(){
            var btnVal = this.innerHTML,
            inputVal = input.innerHTML;
            //console.log(btnVal);

        })
    }
