

const app = new Vue({


    el: '#root',

    data: { 
        newTask:'',
        tasks: [
            'Fare la spesa',
            'Fare la cena',
            'Fare gli esercizzi',
        ],
        error: false,
    },

    methods: { 
        removeTask(x){  /*--------------- interattività pulsante che cancella task */
            this.tasks.splice(x, 1);
        },
        addTask(){ 
            if(this.newTask !=''){  
                this.tasks.push(this.newTask);
                this.error = false;
            } else{  /*--------------- in caso l'input sia vuoto restituisco errore */
                this.error = true;
            };
    
            this.newTask = '';   /*--------------- rimuovo il contenuto nell'input dopo l'invio */
        }
    },

    
})




/* 
v-model:
stampa i value di elementi
input e output,


v-bind:
ci permette di inserire una variabile
all’interno di un attributo di un tag.
----- v-bind:class=... = :class=... -----


v-on:
----- v-on:click=... = @click=... -----
 */



