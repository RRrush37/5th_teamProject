<?php 
  function checkIfLogin(){
    session_start();
    if(!isset($_COOKIE['ID']) || !isset($_COOKIE['sessionID']) || !isset($_SESSION["ID".$_COOKIE['ID']]))
      return false;
    if($_COOKIE['sessionID'] !== $_SESSION["ID".$_COOKIE['ID']])
      return false;
    return true;
    session_destroy();
  }
?>