// Descrizione
// Utilizzando il lavoro fatto insieme stamattina (che allego sotto) implementare la parte JavaScript per il reset della nostra app (bottone Annulla), la quale pulirà i valori immessi dall’ utente  nei campi input/select e andrà a nascondere il biglietto eventualmente generato in precedenza
// Durante il reset svuotiamo anche il contenuto degli altri elementi (offerta, carrozza, codice-cp, ecc…)
// Implementare il CSS della nostra app

// Vendita biglietti
// Ref
var bottoneGenera = document.getElementById("bottoneGenera");

// Events
// Genera biglietto
bottoneGenera.addEventListener("click", function() {
    // Get input values
    var nome = document.getElementById("nome").value;
    var kmDaPercorrere = document.getElementById("km").value;

    var fasciaEta = document.getElementById("fascia-eta").value;

    // Calcolo biglietto
    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * kmDaPercorrere;
    var offerta = "Biglietto standard";

    // Calcolo offerta
    if (fasciaEta == "minorenne") {
        costoBiglietto -= costoBiglietto * 0.2;
        offerta = "Sconto minorenni";
    } else if (fasciaEta == "over65") {
        costoBiglietto -= costoBiglietto * 0.4;
        offerta = "Sconto vecchietti";
    }

    // Controllo decimali
    costoBiglietto = costoBiglietto.toFixed(2);

    // Numero random carrozza
    var numCarrozza = Math.floor(Math.random() * 9) + 1;

    // Numero random per codice cp
    var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    // Inser values
    document.getElementById("nome-passeggero").innerHTML = nome;
    document.getElementById("offerta-applicata").innerHTML = offerta;
    // document.getElementById("offerta-applicata").style.color = "red";
    document.getElementById("offerta-applicata").className = "p--red";
    document.getElementById("carrozza").innerHTML = numCarrozza;
    document.getElementById("codice-cp").innerHTML = codiceCp;
    document.getElementById("costo").innerHTML = costoBiglietto;

    // Show ticket
    var showTicket = document.getElementById("biglietto");
    showTicket.className = "show";
});

// Reset
bottoneAnnulla.addEventListener("click", function() {
    // Reset input value
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fascia-eta").value = "minorenne";

    // Hide ticket
    document.getElementById("biglietto").className = "hide";
});
