// istanzio Vue
const app = new Vue ({
    el: "#app",
    data: {
        // inizializzo la variabile 'mail' a stringa vuota che popolerò con il valore ottenuto in risposta alla richiesta di informazioni al server
        mail: "",
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
    },
});

console.log(app);

// created() {
//     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((res) => {});

// all'hook 'created':
// daAxios.prendimi('daQuestoIndirizzo')
// .quindi( (l'oggettoCheOttengoDallaRichiesta) => {} );

