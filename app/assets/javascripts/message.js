$(document).on('turbolinks:load', function(){

  function buildHTML(message){
  	var image= "";
  	if (message.image.url){
  	  var image= `<img src= "${message.image.url}"></img>`
  	}else{
      var image = ""
    }
    var html = `<div class ="message data-message-id="${message.id}">
                  <div class ="message__user-name">
                    ${ message.name }
                  </div>
                  <div class ="message__date">
                    ${ message.created_at }
                  </div>
                  <div class ="message__content">
                    ${ message.body }
                  </div>
                  <div class ="message__content">
                    ${ image }
                  </div>
                </div>`

    return html;
  }

  $('#new_message').on('submit',function(e){
  	e.preventDefault();
  	var formData = new FormData(this);
  	var url = $(this).attr('action');

  	$.ajax({
  	  url: url,
  	  type: 'POST',
  	  data: formData,
  	  contentType: false,
  	  processData: false,
  	  dataType: 'json',
    })



    .done(function(data){
      var html = buildHTML(data);
      $('.form__submit').prop('disabled',false);
      $('.message-display').append(html);
      $('.form__message').val('');
      $('.hidden').val('');
      $('.message-display').animate({scrollTop: $('.message-display')[0].scrollHeight});
    })
    .fail(function(data){
      alert('メッセージ入力か画像を選択してください');
      $('.form__submit').prop('disabled',false);
    })
  })
})