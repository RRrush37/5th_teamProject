<?php

  session_start();
  return isset($_SESSION["ID"]) ? true : false;

?>