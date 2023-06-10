<?php

  session_start();
  echo isset($_SESSION["ID"]) ? true : false;

?>