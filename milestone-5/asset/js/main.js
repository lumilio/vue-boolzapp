/* 

  ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
    permette di cancellare il messaggio selezionato
  ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
    
*/





const app = new Vue({


    el: '#root',

    data: { 

        active: 0,
        newMessage:'',
        error: false, /* ------eventuale messaggio di errore */
        searchContact:'',

        contacts: [

            {
                name: 'Michele',
                foto: './avatar-pics/avatar_1.jpg',
                avatar: '_1',
                visible: true,
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
                visible: true,
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
                visible: true,
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
                visible: true,
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
            this.active = x;
        },


        searchName(){    
            for (let i = 0; i < this.contacts.length; i++) {

                if(this.contacts[i].name.toUpperCase().includes(this.searchContact.toUpperCase()))
                    {this.contacts[i].visible = true}
                else
                    {this.contacts[i].visible = false}
            }
        },  




        addMessage(){ 
            if(this.newMessage !=''){  
                this.contacts[this.active].messages.push(
                    {
                        date: '20/03/2020 16:30:00',
                        text:this.newMessage,
                        status: 'recived',
                    });
                    setTimeout(function () { app.contacts[app.active].messages.push(
                        {
                            date: '20/03/2020 16:30:00',
                            text:'ciao sono un robot non ti posso rispondere',
                            status: 'sent',
                        }
                    ) }, 1000)

            /* ------eventuale messaggio di errore */
                this.error = false; 
            } else{  
                this.error = true;
            };
            this.newMessage = '';   
        } 
    },

    
})






/* primo tentativo milestone-2*/

/* for (let i = 0; i < app.contacts.length; i++) {
    if(app.contacts[i] != app.contacts[x]){
        app.contacts[i].visible = false;
    } else{
        app.contacts[i].visible = true;
    } 
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



