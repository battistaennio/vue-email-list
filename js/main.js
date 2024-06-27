//Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
//https://flynn.boolean.careers/exercises/api/random/mail

const { createApp } = Vue;

createApp({

    data(){
        return {
            emails: [],
        }
    },

    methods: {

    },

    mounted() {

        for(i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risposta => {
                this.emails.push(risposta.data.response);
            })
        }
        console.log(this.emails);

    }

}).mount("#app")