//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//seleziono il bottone gioca
const playButton = document.querySelector("button");


//creo evento su click
playButton.addEventListener("click",
    function (){

        //faccio sparire il form
        document.querySelector("form").classList.add("vanish")

        //seleziono valore difficoltà
        const difficulty = parseInt(document.getElementById("difficulty-selector").value);

        //condizione di scelta griglia secondo difficoltà
        if (difficulty === 1) {

            //creo il div.container
            var addContainer = createElementWClass("div", "container");

            //lo posiziono in pagina
            document.querySelector("main").append(addContainer);

            //creo ciclo per creare 100 box dentro div.container al click
            for (let i = 1; i <= 100; i++) {
        
                //creo il div.box
                const addBox = createElementWClass("div", "box");

                addBox.append(i)
        
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
            
        } else if (difficulty === 2) {

            //creo il div.container
            let addContainer = createElementWClass("div", "container");

            //lo posiziono in pagina
            document.querySelector("main").append(addContainer);

            //creo ciclo per creare 81 box dentro div.container al click
            for (let i = 1; i <= 81; i++) {
        
                //creo il div.box
                const addBox = createElementWClass("div", "box-difficulty2");

                addBox.append(i)
        
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

        } else if (difficulty === 3) {

            //creo il div.container
            let addContainer = createElementWClass("div", "container");

            //lo posiziono in pagina
            document.querySelector("main").append(addContainer);

            for (let i = 1; i <= 49; i++) {
        
                //creo il div.box
                const addBox = createElementWClass("div", "box-difficulty3");

                addBox.append(i)
        
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


        } else {
            document.querySelector("form").classList.remove("vanish")
        }
       
    }
);