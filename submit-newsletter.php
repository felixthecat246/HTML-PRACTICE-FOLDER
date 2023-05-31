<?php
// Get the submitted email address
$email = $_POST['email'];

// Process the email address (e.g., store it in a database or send it via email)

// Redirect the user back to SageLens.html
header('Location: SageLens.html');
exit();
?>
