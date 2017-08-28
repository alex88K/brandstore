<?php include_once "head.php" ?>

<body class="inner inner-simple contact-page">
<div class="layout clearfix">

	<?php include_once "header.php" ?>	

	<div class="breadcrumb-wrap container">
		<ol class="breadcrumb">
	 		<li><a href="index.php">Главная</a></li>
	 		<li>Контакты</li>
	 	</ol>
	</div>
	<div class="contact-wrap">
		<div class="container">		
			<div class="row">
				<div class="col-md-8 col-sm-6 contact-b">
					<div class="h3">Контактная информация</div>
					<div class="contact-data-item">
						<span class="contact-head"><i class="set-i phone-i"></i>Телефон:</span>
						<span class="contact-text"><a href="tel:+74952013565">+7 (495) 201-35-65</a><sup>бесплатная&nbsp;консультация<sup></span>
					</div>
					<div class="contact-data-item">
						<span class="contact-head"><i class="set-i envelope-i"></i>Электропочта:</span>
						<span class="contact-text"><a href="mailto:mail@brandstore.ru">mail@brandstore.ru</a></span>
					</div>
					<div class="contact-data-item">
						<span class="contact-head"><i class="set-i clock-i"></i>Время работы:</span>
						<span class="contact-text">10:00 — 19:00 (пн-пт)</span>
					</div>
					<div class="contact-data-item">
						<span class="contact-head"><i class="set-i place-i"></i>Адрес:</span>
						<span class="contact-text">г. Москва, МКАД, 8-й километр, 3к1</span>
					</div>
				</div>
				<div class="col-md-4 col-sm-6 contact-b">
					<div class="h3">Мы в соцсетях</div>
					<div class="social social-b">
	               <a href="#"><i class="set-i instagram-b-i"></i></a>
	               <a href="#"><i class="set-i vk-b-i"></i></a>
	               <a href="#"><i class="set-i twitter-b-i"></i></a>
	            </div>
				</div>
			</div>
			<div class="btn-group text-center">
				<a href="zakaz.php" class="btn btn-red btn-contact">Узнать стоимость разработки или<br/>продвижения вашего проекта</a>
			</div>
		</div>
		<div class="ymap">
			<div class="h3">Офис в Москве</div>
			<img src="img/map-sample.jpg" width="100%" height="360px" class="ymap" alt="yandec map">
		</div>
		
		<div class="container">
			<h2 class="coffee-cookie">Будем рады встречи с Вами,<br/>угощаем кофе и печеньками :)</h2>
			<div class="promo-form" id="contact-block">
				<div class="container">
		         <div class="mark-title block-title">
		            <span class="glyphicon glyphicon-bookmark bookmark-left animation-elem"></span>
		            <h2>Задайте вопрос</h2>
		            <span class="glyphicon glyphicon-bookmark bookmark-right animation-elem"></span>
		         </div>
		         <div class="row promo-form-wrap">
		         	<div class="col-md-10 col-md-offset-1">
		         		<form class="form-signin" action="mail.php">
								<div class="form-group">
									<input type="text" id="m-name" name="m-name" class="form-control" required>
									<label for="m-name">Ваше имя</label>
								</div>
								<div class="form-group">
									<input type="text" id="m-phone" name="m-phone" class="form-control" required>
									<label for="m-phone">Номер телефона</label>
								</div>
								<div class="form-group">
									<input type="email" id="m-email" name="m-email" class="form-control" required>
									<label for="m-email">E-mail</label>
								</div>
								<div class="form-group">
									<input type="text" id="m-site" class="form-control" required>
									<label for="m-site">Сайт</label>
								</div>
								<div class="form-group">
									<textarea name="m-comment" id="m-comment" cols="10" rows="5"></textarea>
									<label for="m-comment">Ваши комментарии и вопросы</label>
								</div>
								<div class="form-group">
									<input type="submit" name="submit" id="sendmail-submit" class="btn btn-red btn-big" value="Оставить заявку">
								</div>
							</form>
		         	</div>
		         </div>
		      </div>
		   </div>
	   </div>
	</div>

	<?php include_once "footer.php" ?>

</div>
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,500,700&subset=cyrillic" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/common.js"></script>
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</body>
</html>