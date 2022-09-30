<!DOCTYPE html>
<html lang = "pt-br">
<head>
    <meta charset = "UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
    <title>Calculadora ENEM</title>
</head>
<body>
    <img class="imgstyle" src="logo-enem.png" alt="Logo do ENEM" title="Logo do ENEM">
    <br>
    <h1>Sua média</h1>
    <p class="subt">Sua média de pontos no ENEM está boa em relação à nota de corte do curso desejado?</p>
    <!--<div class="botao"><button onclick="media()">Clique aqui para calcular</button></div>
    <br>
    <br>
    <div id="showdados" class="etapa1">
        <div id="lin"></div><div id="ch"></div><div id="red"></div><div id="mat"></div><div id="cn"></div>
    </div>
    <br>
    <br>
    <div id="medecorte" class="etapa2"></div>
    <br>
    <div id="avaliacao" class="etapa2"></div>-->
<p>Digite sua nota em:</p>
    <form action="index.php" method="get">
        <label for="l">Linguagens:</label>
        <input type="" id="l" name="l"><br>
        <label for="h">Ciências Humanas:</label>
        <input type="" id="h" name="h"><br>
        <label for="r">Redação:</label>
        <input type="" id="r" name="r"><br>
        <label for="m">Matemática:</label>
        <input type="" id="m" name="m"><br>
        <label for="n">Natureza:</label>
        <input type="" id="n" name="n"><br><br>
        <button id="enviar" name="enviar">Enviar</button>
    </form>



    <?php
    if(isset($_GET['n']) && isset($_GET['n2']) && isset($_GET['+'])){
        $soma = $_GET['n'] + $_GET['n2'];
        echo "<p>$_GET[n] + $_GET[n2] é $soma</p>";
    }
    if(isset($_GET['n']) && isset($_GET['n2']) && isset($_GET['-'])){
        $subt = $_GET['n'] - $_GET['n2'];
        echo "<p>$_GET[n] - $_GET[n2] é $subt</p>";
    }
    if(isset($_GET['n']) && isset($_GET['n2']) && isset($_GET['x'])){
        $mult = $_GET['n'] * $_GET['n2'];
        echo "<p>$_GET[n] * $_GET[n2] é $mult</p>";
    }
    if(isset($_GET['n']) && isset($_GET['n2']) && isset($_GET['/'])){
        $div = $_GET['n'] / $_GET['n2'];
        echo "<p>$_GET[n] / $_GET[n2] é $div</p>";
    }
    ?>


</body>
</html>
