$(document).on('turbolinks:load', function(){
console.log('aaa')
function buildHTML(message) {
  var insertImage = '';

  if (message.image.url) {
    insertImage = `<img src="${message.image.url}">`;
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
                      ${ insertImage }
                    </div>
                  </div>`
      return html;
  }

    var interval = setInterval(function() {

      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
        var lastMessageId = $('.message').last().data('message-id');
      $.ajax({
        url: window.location.href,
        data: {id: lastMessageId},
        type: 'GET',
        dataType:'json',
      })

      .done(function(json) {
        json.forEach(function(message) {
          var insertHTML = "";
          console.log(message)
          insertHTML = buildHTML(message);
          $('.message-display').append(insertHTML);
        });
      })

      .fail(function() {
        alert('自動更新に失敗しました');
      });
    } else {
      clearInterval(interval);
    }} , 3000);
});