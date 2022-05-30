// istanzio Vue
const app = new Vue ({
    el: "#app",
    data: {
        // inizializzo la variabile 'mail' a stringa vuota che popolerò con il valore ottenuto in risposta alla richiesta di informazioni al server
        mail: "",
        // inizializzo la variabile 'mails' ad array vuoto che popolerò con gli elementi ottenuti attraverso le richieste al server
        mails: [],
    },
    // attraverso l'hook di Vue ('created'), IN FASE DI CREAZIONE DELLA NOSTRA APP ...
    created() {

        // ...attraverso la libreria Axios, effettuo la mia RICHIESTA PER RICEVERE INFORMAZIONI('.get()') verso il server all'indirizzo (stringato) dell'API che voglio utilizzare...
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        // ...QUANDO RICEVO RISPOSTA ('.then()') eseguimi questa arrow-function ('(res) => {}'). Axios ci inietta un OGGETTO ('res') che rappresenta la RISPOSTA che stiamo ottenendo dal nostro server corredata di tutte le informazioni relative alla RICHIESTA...
        .then((res) => {
        // ...visualizzo il VALORE della CHIAVE 'response' all'interno di 'data' all'interno dell'OGGETTO RICEVUTO...
        console.log(res.data.response);
        // ...salvo il valore ottenuto come VALORE della CHIAVE 'mail'
        this.mail = res.data.response;
        });

        // ...PER 10 volte
        for (let i = 0; i < 10; i++) {
            // avvio la rischiesta al server...
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // ...mi restituisce l'oggetto res che contiene l'informazione che voglio...
            .then((res) => {
                // ...pusho nell'array 'mails' l'informazione ricevuta
                this.mails.push(res.data.response);
            });
        };
    },
});

console.log(app);

// created() {
//     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((res) => {});

// all'hook 'created':
// daAxios.prendimi('daQuestoIndirizzo')
// .quindi( (l'oggettoCheOttengoDallaRichiesta) => {} );

