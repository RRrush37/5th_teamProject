<?php

  session_start();
  session_unset();
  session_destroy();
  // header("Location: backstage_login.html");
  echo true;

?>