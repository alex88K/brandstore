<div class="modal fade" id="sendmail-form" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Название формы</h4>
      </div>
      <div class="modal-body">
        <form class="form-signin" action="">
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
            <input type="submit" name="submit" id="sendmail-submit" class="btn btn-red" value="Оставить заявку">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="thanks-modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p>Спасибо за ваше обращение!<br/>В ближайшее время мы свяжемся с Вами.</p>
        <button class="btn btn-primary" data-dismiss="modal">Вернуться на сайт</button>
      </div>
    </div>
  </div>
</div>



