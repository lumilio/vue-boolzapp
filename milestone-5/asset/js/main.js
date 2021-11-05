/* 

  ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
    permette di cancellare il messaggio selezionato
  ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
    
*/





const app = new Vue({


    el: '#root',

    data: { 

        
        newMessage:'',
        searchContact:'',
        active: 0,
        error: false, /* ------eventuale messaggio di errore */

        contacts: [

            {
                name: 'Michele',
                foto: './avatar-pics/avatar_1.jpg',
                avatar: '_1',
                visible: true,
                sendIndex:[], /* ---aggiunta */
                lastIndex:0,  /* ---aggiunta */
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'received'
                    }
                ],
            },
           
            {
                name: 'Fabio',
                foto: './avatar-pics/avatar_2.jpg',
                avatar: '_2',
                visible: true,
                sendIndex:[],  /* ---aggiunta */
                lastIndex:0,   /* ---aggiunta */
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                foto: './avatar-pics/avatar_3.jpg',
                avatar: '_3',
                visible: true,
                sendIndex:[], /* ---aggiunta */
                lastIndex:0,  /* ---aggiunta */
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                foto: './avatar-pics/avatar_6.jpg',
                avatar: '_4',
                visible: true,
                sendIndex:[], /* ---aggiunta */
                lastIndex:0,  /* ---aggiunta */
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        optionMenu: false, /* ---aggiunta */
                        hide: false, /* ---aggiunta */
                        status: 'received'
                    }
                ],
            },
        ]
    },




    methods: { 


        /* ------ funzione per selezionare la chat da mostrare */
        selectChat(x){
            this.active = x
        }, 
        



        /* ------ funzione per cercare nome contatto nel input text cerca contatto */
        searchName(){    
            for (let i = 0; i < this.contacts.length; i++) {

                if(this.contacts[i].name.toUpperCase().includes(this.searchContact.toUpperCase()))
                    {this.contacts[i].visible = true}
                else
                    {this.contacts[i].visible = false}
            }
        },  



        /* ------ funzione per scroll automatico all'aggiunta messaggio */
        keepChatLow: function(){
            const container = this.$el.querySelector("#Blocco-Chat");
            container.scrollTop = container.scrollHeight;
        },




        /* ------ funzione per aggiungere il messaggio */
        addMessage(){ 
            if(this.newMessage !=''){ 
                

                this.contacts[this.active].messages.push(
                    {
                        date: new Date().toLocaleString(),
                        text:this.newMessage,
                        status: 'recived',
                        optionMenu: false, 
                        hide: false,
                    }
                );
                setTimeout(this.keepChatLow, 10)
                

                setTimeout(function () { 
                    app.contacts[app.active].messages.push(
                        {
                            date: new Date().toLocaleString(),
                            text:'ciao sono un robot non ti posso rispondere', 
                            status: 'sent',
                            optionMenu: false, 
                            hide: false,
                        }
                    ) }
                , 1000)
                setTimeout(this.keepChatLow, 1000)





                this.error = false; /* ------eventuale messaggio di errore */
            } else{  
                this.error = true;
            };


            this.newMessage = ''

        },




        /* ------ aggiungo l'indice del messaggio inviato dal bot in arrey specifico */

        getLastMessage(c){
            for (let i = 0; i < this.contacts[c].messages.length; i++) {
                if(this.contacts[c].messages[i].status == 'sent' && !(this.contacts[c].sendIndex.includes(i))){
                    this.contacts[c].sendIndex.push(i)
                    this.contacts[c].lastIndex = Math.max.apply(Math, this.contacts[c].sendIndex)
                };
            }
        },

        loadingMessage : function(){
            for (let index = 0; index < this.contacts.length; index++) { this.getLastMessage(index) }
        },  
        

        


         /* ------ funzioni pulsante opzioni messaggio */

        showOption(x){
            if(x.optionMenu == true){
                x.optionMenu = false; 
            } else{x.optionMenu = true;}
        },
                                                            

        hideMessage(x){
            x.hide = true; 
        },



    },



    mounted(){
        setInterval(this.loadingMessage, 100)
    } 



    
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



