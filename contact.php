<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ontvangen gegevens veilig maken
    $naam = htmlspecialchars(strip_tags(trim($_POST['naam'])));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $bericht = htmlspecialchars(strip_tags(trim($_POST['bericht'])));

    // E-mailvalidatie
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p>Ongeldig e-mailadres, probeer het opnieuw.</p>";
        exit;
    }

    // 📧 Ontvanger
    $to = "jouwmail@voorbeeld.com";
    $subject = "Nieuw bericht van contactformulier";
    $message = "Naam: $naam\nE-mail: $email\n\nBericht:\n$bericht";
    $headers = "From: $email\r\nReply-To: $email";

    // Versturen
    if (mail($to, $subject, $message, $headers)) {
        echo "<p>Bedankt $naam, je bericht is succesvol verzonden!</p>";
    } else {
        echo "<p>Er is een fout opgetreden, probeer het later opnieuw.</p>";
    }
}
?>