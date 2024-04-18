const stars = document.querySelectorAll(" #stars ion-icon"); // Seleziona tutti gli elementi <ion-icon> con l'id "stars" e li assegna alla variabile stars

console.log(stars);

stars.forEach((star, index1) => {  // Per ogni stella nell'array stars, aggiunge un listener per l'evento di click

    star.addEventListener("click", () => {
         console.log(index1); 
         stars.forEach((star, index2) => {          // Per ogni stella nell'array stars, esegue le seguenti operazioni
            console.log(index2)
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")  // Verifica se l'indice della stella cliccata è maggiore o uguale all'indice della stella corrente
                                                                                               // Se vero, aggiunge la classe "active" alla stella, altrimenti rimuove la classe "active"
        })})
   })

   
