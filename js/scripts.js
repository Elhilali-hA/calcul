const ecranElt = document.querySelector("#ecran");

let precedent = 0;

let affichage = "";

let operation = null;

let dot = false;

window.onload = () => {
    let touches = document.querySelectorAll("span");
    for(let touche of touches){
        touche.addEventListener("click", gererTouches);
    }
}

function gererTouches(){
    let touche;
        touche = this.innerText;

        if (touche === "." && dot === false) {
            dot = true ;
          }else if (touche === "." && dot) {
            return ;
          }

        if(touche >= 0 || touche == "."){
            affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
            ecranElt.innerText = affichage;
        }
        else{
        switch(touche){
            case "C":
                precedent = 0;
                affichage = "";
                operation = null
                ecranElt.innerText = 0;
                break; 
            case "+":
            case "-":
            case "*":
            case "/":
                precedent = (precedent === 0) ? parseFloat(affichage) : operate(precedent,parseFloat(affichage), operation );
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;
                case "=":
                    case "Enter": 
                precedent = (precedent === 0) ? (affichage) : operate(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                precedent = 0;
                affichage = precedent;
                break;
            default:
                break;
        }
    }
    
}


function operate(nb1, nb2, operation){

    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/") return nb1 / nb2;
}