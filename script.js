// Selecteer het formulier
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // voorkomt dat de pagina refresh

    // Haal waarden op uit het formulier
    const naam = form.naam.value.trim();
    const email = form.email.value.trim();
    const onderwerp = form.onderwerp.value.trim();
    const bericht = form.bericht.value.trim();

    // Eenvoudige validatie
    if (!naam || !email || !onderwerp || !bericht) {
        alert("Vul alle velden correct in!");
        return;
    }

    // Simuleer succesvolle verzending
    alert("Bedankt voor je bericht, " + naam + "! We nemen snel contact met je op.");

    // Reset het formulier
    form.reset();
});
