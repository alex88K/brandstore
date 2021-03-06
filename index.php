<?php include_once "head.php" ?>

<body class="home">
<div class="layout clearfix">

   <?php include_once "modal-form.php" ?>
   <?php include_once "header.php" ?>

   <div class="top-carousel universal-carousel carousel" id="top-carousel">
      <div class="owl-carousel owl-theme">
         <div class="item item-1">
            <div class="bg-slide cover-img" style="background-image: url(pic/top-carousel/slide-1.jpg)"></div>
            <div class="carousel-caption">
               <h1 class="spec-bord" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Мы решаем Ваши задачи!</h1>
               <p data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Продвижение сайта, которое Вы так давно искали</p>
               <div class="btn-group" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">
                  <a href="site-promotion.php" class="btn btn-lg btn-primary">Подробнее</a>
                  <a href="site-promotion.php" class="btn btn-lg btn-primary">Узнать стоимость</a>
               </div>
            </div>
         </div>
         <div class="item item-2">
            <div class="bg-slide cover-img" style="background-image: url(pic/top-carousel/slide-2.jpg)"></div>
            <div class="carousel-caption">
               <h1 data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Акция</h1>
               <p data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">Успейте получить 25% скидку на продвижение сайта!</p>
               <div class="btn-group" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutLeft">
                  <button class="btn btn-lg btn-primary" data-toggle="modal" data-target="#sendmail-form">Получить бесплатный анализ сайта</button>
                  <a href="site-promotion.php" class="btn btn-lg btn-primary">Узнать стоимость</a>
               </div>
               <p class="additional">Акция действует до 31 августа 2016г.</p>
            </div>
         </div>
      </div>
      <div class="carousel-nav">
         <div class="left carousel-control"></div>
         <div class="right carousel-control"></div>
      </div>
   </div>

   <?php include_once "blocks/seo-results.php" ?>

   <!-- <div class="universal-carousel carousel">
      <div class="owl-carousel owl-theme">
         <div class="item item-1">
            <div class="bg-slide cover-img" style="background-image: url(pic/top-carousel/slide-1.jpg)"></div>
            <div class="carousel-caption">
               <h1 class="spec-bord">Мы решаемзадачи!</h1>
               <p>Продвижен так давно искали</p>
               <a href="site-promotion.php" class="btn btn-lg btn-primary">Подре</a>
            </div>
         </div>
         <div class="item">
            <div class="bg-slide cover-img" style="background-image: url(pic/top-carousel/slide-1.jpg)"></div>
            <div class="carousel-caption">
               <h1 class="spec-bord">Мы решаемзадачи!</h1>
               <p>Продвижен так давно искали</p>
               <a href="site-promotion.php" class="btn btn-lg btn-primary">Подре</a>
            </div>
         </div>
         <div class="item">
            <div class="bg-slide cover-img" style="background-image: url(pic/top-carousel/slide-1.jpg)"></div>
            <div class="carousel-caption">
               <h1 class="spec-bord">Мы решаемзадачи!</h1>
               <p>Продвижен так давно искали</p>
               <a href="site-promotion.php" class="btn btn-lg btn-primary">Подре</a>
            </div>
         </div>
      </div>
      <div class="carousel-nav">
         <div class="left carousel-control"></div>
         <div class="right carousel-control"></div>
      </div>
   </div> -->

   <div class="tariff">
      <div class="container">
         <div class="mark-title block-title">
            <span class="glyphicon glyphicon-bookmark bookmark-left animation-elem"></span>
            <h2>Тарифы и стоимость</h2>
            <span class="glyphicon glyphicon-bookmark bookmark-right animation-elem"></span>
         </div>
         <div class="tariff-list">
            <div class="row">
               <div class="col col-md-4 col-sm-6">
                  <div class="tariff-item">
                     <h3 class="tariff-title">Раскрутка сайтов по запросам</h3>
                     <div class="tariff-info">
                        <p>Это эффективный метод для привлечение новых посетителей и клиентов на Ваш сайт. Отличается от других методов тем, что за основу берется пул запросов (список ключевых слов), на основе этого списка проводится оптимизация сайта и введется его продвижение.
                        <p>Мы можем предложить продвижение сайта по НЧ (низкочастотным) — запросам, СЧ (среднечастотным) — запросам и ВЧ (высокочастотным) — запросам. Каждая категория запросов имеет свои преимущества и особенности. Предоставляем полный комплекс для достижения максимальных целей!</p>
                     </div>
                     <ul class="promo-box-list">
                        <li><i class="set-i key-i"></i>подбор ключевых запросов — бесплатно</li>
                        <li><i class="set-i coins-i"></i>оплата за выведенный запрос в ТОП-10 Яндекса и Гугла</li>
                        <li><i class="set-i graph-i"></i>продвижение в Rambler, Mail.ru — бесплатно</li>
                        <li><i class="set-i screen-i"></i>мониторинг продвижения запросов — бесплатно 24/7</li>
                        <li><i class="set-i surp-i"></i>10 и более запросов в подарок, при продвижении более 50 запросов</li>
                     </ul>
                     <div class="promo-box-bottom">
                        <div class="promo-box-price">от<span>14990</span>&#8381;/месяц</div>
                        <a href="request-promotion.php" class="btn btn-lg btn-primary">Подробнее</a>
                     </div>
                  </div>
               </div>
               <div class="col col-md-4 col-sm-6">
                  <div class="tariff-item">
                     <h3 class="tariff-title">Тариф «Оплата за переходы»</h3>
                     <div class="tariff-info">
                        <p>Главное отличие данного тарифа в том, что вы платите только за посетителей, которые реально зашли на ваш сайт и интересовались вашими товарами или услугами. Тариф популярен среди фирм, которые ранее продвигали свои сайты в недобросовестных SEO-агентствах по позициям, но при этом не видели реального эффекта. Это могло быть связано с тем, что агентство заведомо подбирает фразы-пустышки, по которым проще добиться результата, но бизнес при этом не получает реальных заказов. В данном тарифе мы подбираем фразы, которые приведут на ваш сайт реально заинтересованных в ваших товарах и услугах посетителей. Схема оплаты схожа с «Контекстной рекламой», но стоимость клика для вас будет ниже, а эффект зачастую выше (посетители больше доверяют органической выдаче, нежели рекламе).</p>
                     </div>
                     <ul class="promo-box-list">
                        <li><i class="set-i coins-i"></i>маленькая стоимость привлечения посетителя</li>
                        <li><i class="set-i code-i"></i>оптимизация более 25 страниц</li>
                        <li><i class="set-i rise-i"></i>высокие гарантии получение и увеличение трафика</li>
                        <li><i class="set-i ball-i"></i>привлечение по высококонвертируемым запросам</li>
                        <li><i class="set-i search-i"></i>подбор запросов — бесплатно</li>
                     </ul>
                     <div class="promo-box-bottom">
                        <div class="promo-box-price">от<span>19990</span>&#8381;/месяц</div>
                        <a href="traffic-promotion.php" class="btn btn-lg btn-primary">Подробнее</a>
                     </div>
                  </div>
               </div>
               <div class="col col-md-4 col-sm-6 col-md-offset-0 col-sm-offset-3">
                  <div class="tariff-item">
                     <h3 class="tariff-title">Ваш сайт молодой? Давайте это определим!</h3>
                     <div class="tariff-info">
                        <ul>
                           <li>Возраст вашего сайта (домена) менее 2 лет?</li>
                           <li>Отсутствует трафик на сайте и почти нет актуальных запросов в выдаче?</li>
                           <li>ИЦ менее 30?</li>
                           <li>Нет ссылочной массы?</li>
                        </ul>
                        <p>Если положительные ответы есть на 3 пункта из 4, то смело можем сообщить — у вас молодой сайт. Его необходимо оптимизировать, поработать над текстами и его содержимым, а также постепенно начинать увеличивать ссылочную массу и общий траст. <i>Мы готовы Вам в этом помочь.</i></p>
                     </div>
                     <ul class="promo-box-list">
                        <li><i class="set-i calendar-i"></i>срок вывода молодых сайтов от 6 месяцев</li>
                        <li><i class="set-i wallet-i"></i>фиксированная стоимость продвижения</li>
                        <li><i class="set-i chlist-i"></i>ежемесячная работа с поведенческими и другими факторами</li>
                        <li><i class="set-i search-i"></i>мониторинг продвижения запросов — бесплатно 24/7</li>
                        <li><i class="set-i key-i"></i>подбор ключевых запросов — бесплатно</li>
                     </ul>
                     <div class="promo-box-bottom">
                        <div class="promo-box-price">от<span>25000</span>&#8381;/месяц</div>
                        <a href="traffic-promotion.php" class="btn btn-lg btn-primary">Подробнее</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   
   <?php include_once "blocks/choice.php" ?>

   <div class="services animation-elem">
      <div class="container">
         <div class="block-title">
            <h2>Наши услуги</h2>
         </div>
         <div class="row">
            <div class="col-md-6 col-sm-6">
               <div class="service-item">
                  <div class="service-item-inner">
                     <i class="promote-i"></i>
                     <h3>Продвижение сайта</h3>
                     <p>Когда нужно увеличить продажи.</p>
                  </div>
                  <div class="service-info">
                     <p>Продвижение сайта в поисковых системах Яндекс, Google и Mail.ru. Предоставляем финансовые гарантии. Большой опыт работы, продвинули уже более 65 проектов. Готовы получать больше заказов сайта?</p>
                     <a href="site-promotion.php" class="btn btn-primary">Подробнее</a>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-sm-6">
               <div class="service-item">
                  <div class="service-item-inner">
                     <i class="develop-i"></i>
                     <h3>Разработка сайта</h3>
                     <p>Для тех кто любит индивидуальные проекты</p>
                  </div>
                  <div class="service-info">
                     <p>Создание сайта включает в себя: индивидуальный дизайн, кроссбраузерную верстку и интеграцию с современной CMS (система управления сайтом). Мы учитываем все пожелания клиентов и делаем отличные сайты для бизнеса.</p>
                     <a href="#" class="btn btn-primary">Подробнее</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6 col-sm-6">
               <div class="service-item">
                  <div class="service-item-inner">
                     <i class="support-i"></i>
                     <h3>Техническая поддержка сайтов</h3>
                     <p>Когда что-то сломалось :(</p>
                  </div>
                  <div class="service-info">
                     <p>Поможем внести информацию, добавим фотографии, а также настроим неработающие функции сайта. Также дорабатываем сайты и осуществляем ежемесячную поддержку 24/7.</p>
                     <a href="#" class="btn btn-primary">Подробнее</a>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-sm-6">
               <div class="service-item">
                  <div class="service-item-inner">
                     <i class="style-i"></i>
                     <h3>Разработка фирменного стиля</h3>
                     <p>Для тех кто хочет подчеркнуть индивидуальность.</p>
                  </div>
                  <div class="service-info">
                     <p>Создание индивидуального образа компании делается за счет фирменного стиля и уникального логотипа. Готовы предложить Вам яркие и сочные решения!</p>
                     <a href="#" class="btn btn-primary">Подробнее</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <?php include_once "blocks/projects.php" ?>
   <?php include_once "blocks/proposal.php" ?>

   <div class="clients">
      <div class="container">
         <div class="block-title">
            <h2>Нам доверяют</h2>
         </div>
         <ul class="clients-list">
            <li><a href="#"><i class="clients-i mosvodostok-i"></i></a></li>
            <li><a href="#"><i class="clients-i sirena-i"></i></a></li>
            <li><a href="#"><i class="clients-i skarabey-i"></i></a></li>
            <li><a href="#"><i class="clients-i alexa-i"></i></a></li>
            <li><a href="#"><i class="clients-i clipso-i"></i></a></li>
            <li><a href="#"><i class="clients-i kaluga-i"></i></a></li>
         </ul>
         <a href="feedback.php" class="btn btn-lg btn-primary">Подробнее</a>
      </div>
   </div>
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

</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>