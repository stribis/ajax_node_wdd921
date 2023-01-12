<?php

if(
  empty($_POST['first-name']) ||
  empty($_POST['last-name']) ||
  empty($_POST['message']) ||
  empty($_POST['email']) ||
  !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
  echo json_encode(array('error', 'invalid inputs'));
  return false;
}


?>
