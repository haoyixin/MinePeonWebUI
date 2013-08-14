<?php

require_once('Mail.php');

/**********************************

Generic functions theat may be called from many differant places

*/

function sendEmail($settings, $subject, $body) {

	if ($settings['alertEnable'] == true){
		$mailSettings = array(
				'host' => $settings['alertSmtp'],
			
				
				'auth' => true,
				'username' => $settings['alertUser'],
				'password' => $settings['alertPass'],
				'port' => '25'
				
			);
	
		//$settings['alertDevice']

		$mail = Mail::factory("smtp", $mailSettings );

		$headers = array("From"=>$settings['alertUser'], "Subject"=>$subject);
		$mail->send($settings['alertEmail'], $headers, $body);		
	}
}
