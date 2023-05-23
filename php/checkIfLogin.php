<?php
function checkIfLogin()
{
  return isset($_SESSION["ID"]) ? true : false;
}
