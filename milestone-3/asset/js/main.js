/* 

  ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
    “enter” il testo viene aggiunto al thread sopra, come messaggio verde
  ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
    un “ok” come risposta, che apparirà dopo 1 secondo. 
    
*/





const app = new Vue({


    el: '#root',

    data: { 

        active: 0,

        contacts: [

            {
                name: 'Michele',
                foto: './avatar-pics/avatar_1.jpg',
                avatar: '_1',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
           
            {
                name: 'Fabio',
                foto: './avatar-pics/avatar_2.jpg',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                foto: './avatar-pics/avatar_3.jpg',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                foto: './avatar-pics/avatar_6.jpg',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },


    methods: { 
        selectChat(x){
            app.active = x;
        }  
    },

    
})






/* primo tentativo */

/* for (let i = 0; i < app.contacts.length; i++) {
    if(app.contacts[i] != app.contacts[x]){
        app.contacts[i].visible = false;
    } else{
        app.contacts[i].visible = true;
    } 
    app.active = x;
} */















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



