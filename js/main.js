//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//seleziono il bottone gioca
const playButton = document.querySelector("button");

//creo evento su click
playButton.addEventListener("click",
    function (){
        //creo il div.container
        const addContainer = createElementWClass("div", "container");
        
        //lo posiziono in pagina
        document.querySelector("body").append(addContainer)
       
    }
)