//Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
//https://flynn.boolean.careers/exercises/api/random/mail

const { createApp } = Vue;

createApp({

    data(){
        return {
            email: "",


        }
    },

    methods: {



    },

    mounted() {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risposta => {
                console.log(risposta.data.response);     
            })

    }

}).mount("#app")