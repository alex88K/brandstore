<?php include_once "head.php" ?>

<body class="inner inner-simple">
<div class="layout clearfix">

	<?php include_once "header.php" ?>
	
	<div class="breadcrumb-wrap container">
		<ol class="breadcrumb">
	 		<li><a href="index.php">Главная</a></li>
	 		<li>Заказать коммерческое предложение</li>
	 	</ol>
	</div>
	<article class="order-b">
		<div class="container">
			<div class="mark-title block-title">
            <span class="glyphicon glyphicon-bookmark bookmark-left animation-elem in-view"></span>
            <h1>Заказать<br/>коммерческое предложение</h1>
            <span class="glyphicon glyphicon-bookmark bookmark-right animation-elem in-view"></span>
         </div>
			<p>Заполнение формы займет не более 2 минут</p>
			<form class="form-order" action="#">
				<div class="row">
					<div class="col-lg-5 col-md-5 col-sm-5">
						<div class="form-group">
							<label for="m-name">Ваше имя</label>
							<!-- <span class="error_message">[[+fi.error.phone-m-name]]</span> -->
							<input type="text" name="m-name" class="form-control" placeholder="Василий Пупкин" required>
						</div>
						<div class="form-group">
							<label for="m-email">E-mail</label>
							<input type="email" name="m-email" class="form-control" required placeholder="Куда отправим коммерческое предложение">
						</div>
						<div class="form-group">
							<label for="m-phone">Номер телефона</label>
							<!-- <span class="error_message">[[+fi.error.phone-m-phone]]</span> -->
							<input type="text" name="m-phone" class="form-control" placeholder="+7 (___) ___-____" required>
						</div>
						<div class="form-group">
							<label for="m-site">Адрес сайта</label>
							<input type="text" name="m-site" class="form-control" value="Проконсультируем и подарим бесплатный аудит сайта">
						</div>
						<div class="form-group">
							<label for="m-comment">Ваш комментарий</label>
							<textarea name="m-comment" cols="10" rows="5" placeholder="Опишите вашу задачу, отразите дополнительные нюансы"></textarea>
							
						</div>
						<div class="captcha-item" id="captcha_3"></div>
						<div class="form-group">
							<input type="submit" name="submit" id="sendmail-submit" class="btn btn-red" value="Рассчитать заказ">
						</div>
			      </div>
					<div class="col-lg-4 col-md-4 col-sm-4">
						<div class="">
							<div class="h4">Выберите услуги:</div>
							<div class="chb-group">
								<input type="checkbox" name="or-promotion" id="cb1">
								<label for="cb1">Продвижение сайта</label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-smm" id="cb2">
								<label for="cb2">Продвижение в социальных сетях (SMM)</label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-contadv" id="cb3">
								<label for="cb3">Контекстная реклама</label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-tsupport" id="cb4">
								<label for="cb4">Техническая поддержка сайтов</label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-mobadapt" id="cb5">
								<label for="cb5">Адаптация под мобильные</label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-redesign" id="cb6">
								<label for="cb6">Редизайн сайта</label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-sdevelop" id="cb7">
								<label for="cb7">Разработка сайта</label>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</article>

	<?php include_once "footer.php" ?>
	
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>