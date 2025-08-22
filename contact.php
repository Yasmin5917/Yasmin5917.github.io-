<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = htmlspecialchars($_POST['naam']);
    $email = htmlspecialchars($_POST['email']);
    $bericht = htmlspecialchars($_POST['bericht']);

    // 📧 jouw eigen e-mailadres
    $to = "jouwmail@voorbeeld.com";
    $subject = "Nieuw bericht van contactformulier";
    $message = "Naam: $naam\nE-mail: $email\n\nBericht:\n$bericht";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "<p>Bedankt $naam, je bericht is succesvol verzonden!</p>";
    } else {
        echo "<p>Er is een fout opgetreden, probeer het later opnieuw.</p>";
    }
}
?>
