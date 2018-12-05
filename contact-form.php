<?php


    
    $fromEmail      =  strip_tags($_POST['contact-email']);
    $fromName       =  strip_tags($_POST['contact-name']);
    $themessage     =  strip_tags($_POST['contact-message']);
    $themessage     =  $themessage."The Sender Is ( ".$fromName." )" ; 



    $toEmail = 'moniquereis@live.com';
    $toName = 'DoceFatia';

    // Mail::send('emails.contactus', $data , function($message) use ($toEmail, $toName, $fromEmail, $fromName, $subject)
    // {
    //     $message->to($toEmail, $toName);

    //     $message->from($fromEmail, $fromName);

    //     $message->subject($subject);
    // });

$headers = 'From:' .$fromName . "\r\n" .
    'Reply-To:' .$fromEmail. "\r\n" .
    'X-Mailer: PHP/' . phpversion();



if(mail($toEmail, $subject, $themessage, $headers))
{

      // Send 
echo "success";
       
}
else{ echo "An error has be occured"; }

?>