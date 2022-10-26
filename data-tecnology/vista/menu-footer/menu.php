
<header>
    <nav class="navbar">
        <h2 class="title">Data <br>Tecnology <br></h2>
        <div class="logo">
            <img src="./vista/recursos/media/logo.png" alt="Tecnologia-Bolivia" class="logo-img">
        </div>
        <ul class="menu" id="menu">
            <li class="inicio"><a href="index.php?view=inicio" class="<?php echo (($valor_active=="inicio")? 'active':'') ?>" > Inicio</a></li>
            <li class="servicio"><a href="index.php?view=servicios" class="<?php echo (($valor_active=="servicios")? 'active':'') ?>" >Servicios</a></li>
            <li class="informacion"><a href="index.php?view=informacion" class="<?php echo (($valor_active=="informacion")? 'active':'') ?>" >Informacion</a></li>
            <li class="contactos"><a href="index.php?view=contactanos" class="<?php echo (($valor_active=="contactanos")? 'active':'') ?>" >Contactos</a></li>
        </ul>
        <div class="menu-bar" id="menu-bar"><i class="fa-solid fa-bars-staggered"></i></div>
        <div class="user"><a href="index.php?view=info"><i class="fa-solid fa-user"></i></a></div>
    </nav>
</header>
<?php
// session_start();
// $valor=$_SESSION['var'];

?>