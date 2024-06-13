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
        document.querySelector("body").append(addContainer);

        //creo ciclo per creare 100 box dentro div.container al click
        for (let i = 1; i <= 100; i++) {

            //creo il div.box
            const addBox = createElementWClass("div", "box");

            //aggioungo il div.box in div.container
            addContainer.append(addBox)

            //creo evento cambio colore al click di div.box
            addBox.addEventListener("click",
                function () {
                    //aggiungo/tolgo la classe clicked
                    addBox.classList.toggle("clicked")
                    //mostro in console il numero della casella cliccata
                    console.log(i);
                }
                
            );
        }
       
    }
);