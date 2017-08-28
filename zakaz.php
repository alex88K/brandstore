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
	<article class="order-b text-box">
		<div class="container">
         <h1>Заказать коммерческое предложение</h1>
			<form class="form-order" action="#" method="post" enctype="multipart/form-data">
				<div class="row">
					<div class="col-lg-5 col-md-6 col-sm-6 right-part">
						<div class="form-groups">
							<div class="h4">Выберите услуги:</div>
							<div class="chb-group">
								<input type="checkbox" name="or-promotion" id="cb1">
								<label for="cb1">Продвижение сайта<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Привлечение целевой аудитории из поиска, вывод сайта в ТОП">?</i></label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-smm" id="cb2">
								<label for="cb2">Продвижение в социальных сетях (SMM)<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Увеличение продаж, привлечение новых и удержание существующих клиентов">?</i></label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-contadv" id="cb3">
								<label for="cb3">Контекстная реклама<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Повышение продаж, увеличение охвата целевой аудитории">?</i></label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-tsupport" id="cb4">
								<label for="cb4">Техническая поддержка сайтов<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Поддержка, сопровождение и развитие функционала сайта">?</i></label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-mobadapt" id="cb5">
								<label for="cb5">Адаптация под мобильные<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Больше потенциальных покупателей, рост продаж, выше позиции в поиске">?</i></label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-redesign" id="cb6">
								<label for="cb6">Редизайн сайта<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Совершенствование внешнего вида сайта, увеличение конверсии">?</i></label>
							</div>
							<div class="chb-group">
								<input type="checkbox" name="or-sdevelop" id="cb7">
								<label for="cb7">Разработка сайта<i class="tooltip-i" data-toggle="tooltip" data-placement="top" title="Создание современного конверсионного сайта">?</i></label>
							</div>
						</div>
					</div>
					<div class="col-lg-7 col-md-6 col-sm-6 left-part">
						<div class="form-group">
							<label for="m-name">Ваше имя *</label>
							<!-- <span class="error_message">[[+fi.error.phone-m-name]]</span> -->
							<input type="text" name="m-name" class="form-control" placeholder="Василий Пупкин" required>
						</div>
						<div class="form-group">
							<label for="m-email">E-mail *</label>
							<input type="email" name="m-email" class="form-control" required placeholder="Куда отправим коммерческое предложение">
						</div>
						<div class="form-group">
							<label for="m-phone">Телефон *</label>
							<!-- <span class="error_message">[[+fi.error.phone-m-phone]]</span> -->
							<input type="text" name="m-phone" class="form-control" placeholder="+7 (___) ___-____" required>
						</div>
						<div class="form-group">
							<label for="m-site">Адрес сайта</label>
							<input type="text" name="m-site" class="form-control" placeholder="Проконсультируем и подарим бесплатный аудит">
						</div>
						<div class="form-group">
							<label for="m-comment">Ваш комментарий</label>
							<textarea name="m-comment" cols="10" rows="5" placeholder="Опишите вашу задачу, отразите дополнительные нюансы"></textarea>
						</div>
						<div class="form-group">
							<label for="">Приложить дополнительные файлы</label>
							<input type="file" name="fileToUpload" id="fileToUpload" value="Добавить файлы...">
						</div>
						<div class="captcha-item" id="captcha_3"></div>
						<div class="form-group personal-data">
							<input type="checkbox" name="personalInfo" id="personalInfo" checked>
							<label for="personalInfo">Я согласен на обработку <a href="brandstore/policy.php">моих персональных данных</a></label>
						</div>
						<div class="form-group">
							<input type="submit" name="submit" id="sendmail-submit" class="btn btn-red btn-big" value="Рассчитать заказ">
						</div>
			      </div>
				</div>
			</form>

			<p>Нажимая на кнопку, Вы соглашаетесь с условиями <a href="http://brandstore.ru/politika">Пользовательского соглашения</a> (Политики конфиденциальности).</p>
			<p>Поля, помеченные *, обязательны для заполнения.</p>
			<p>"Brandstore" гарантирует, что ваши персональные данные будут использованы только для предоставления коммерческого предложения, а полученная от вас информация ни при каких условиях не будет передана третьим лицам.</p>
		</div>
	</article>

	<?php include_once "footer.php" ?>
	
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>