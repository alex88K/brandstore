<?php include_once "head.php" ?>

<body class="home">

<?php include_once "img/sprite.svg" ?>

<div class="layout clearfix">

   <?php include_once "modal-form.php" ?>
   <?php include_once "header.php" ?>
   <?php include_once "blocks/home-top.php" ?>
   <?php include_once "blocks/clients.php" ?>
   <?php include_once "blocks/choice.php" ?>
   <?php include_once "blocks/proposal.php" ?>
   <?php include_once "blocks/howedo.php" ?>
   <?php include_once "blocks/feedback-block.php" ?>
   <?php include_once "blocks/stages-block.php" ?>
   <?php include_once "blocks/tariff.php" ?>
   <?php include_once "blocks/advantages2-b.php" ?>
   <?php include_once "blocks/contact-promotion.php" ?>
   
   <div class="map-section">
      <img src="pic/map/map.jpg" class="map" alt="Brandstore map">
      <div class="container">
         <div class="col-md-4 contact-block">
            <h4>Наши Контакты</h4>
            <ul>
               <li><i class="set-i place-i"></i>г. Москва, МКАД,<br/>8-й километр, 3к1</li>
               <li><i class="set-i envelope-i"></i><a href="mailto:mail@brandstore.ru">mail@brandstore.ru</a></li>
               <li><i class="set-i phone-i"></i>+7 (495) 201-35-65</li>
            </ul>
            <div class="descr">Бесплатная консультация</div>
            <button class="btn btn-primary" data-toggle="modal" data-target="#sendmail-form">Получить</button>
         </div> 
      </div>
   </div>

   <?php include_once "footer.php" ?>