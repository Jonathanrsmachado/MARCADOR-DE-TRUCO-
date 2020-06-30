<?php

session_start();


if(isset($_POST['jogador-1'])){
  $jogador_1 = strtoupper($_POST['jogador-1']);
  $jogador_2 = strtoupper($_POST['jogador-2']);
  $_SESSION['start'] = md5(rand(0,100));
}


if($_SESSION['start'] == "" || empty($_SESSION['start'])){
  header("location: index.php");
}
?>


<!doctype html>
<html lang="pt-br">

  <head>
    <title><?php echo $jogador_1." X ".$jogador_2 ?></title>
    <meta chaset="utf-8">
    <link rel="stylesheet" type="text/css" href="jquery.toast.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="main.css" media="screen" />
  </head>

  <body class="fundo">

    <form id="placar">
      <input type="number" id="P1" value="0" max="12" min="0" readonly>
      <input type="number" id="P2" value="0" max="12" min="0" readonly>
      <input type="submit" id="j1" value="+1 PONTO PARA O <?PHP echo $jogador_1; ?>">
      <input type="submit" id="j1-" value="-1 PONTO PARA O <?PHP echo $jogador_1; ?>">
      <input type="submit" id="j2" value="+1 PONTO PARA O <?PHP echo $jogador_2; ?>">
      <input type="submit" id="j2-" value="-1 PONTO PARA O <?PHP echo $jogador_2; ?>">
      <input type="submit" value="REINICIAR" id="reiniciar">
    </form>


    <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/jquery.toast.js"></script>
  </body>

</html>