$(document).on('turbolinks:load',function() {

  function appendUser(user){
    var html =
      `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">
          ${user.name}
        </p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
        </a>
      </div>`
  $("#user-search-result").append(html);
    }

  function addGroup(user_id,user_name){
    var html =
      `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
        <input name='group[user_ids][]' type='hidden' value="${user_id}">
        <p class='chat-group-user__name'>
          ${user_name}
        </p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
      </div>`
    $("#chat-group-users").append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input},
      dataType:'json'
    })

    .done(function(users)  {
    if (input.length === 0) {
      $(".list").remove();
    }
    else{
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
        appendUser(user);
        });
      }
      // if (input.length === 0) {
      // $("#user-search-result").remove();
      // // フォームに値がないときに、listを全て削除する。
      // }
      else{
        appendNoUser("一致するユーザーはいません");
      }
    }
    })
    .fail(function(){
      alert('検索に失敗しました');
    });
  });

  $("#user-search-result").on("click", ".user-search-add", function(){
    var user_name = $(this).data('userName');
    var user_id = $(this).data('userId');
    addGroup(user_id,user_name);
    $(this).parent().remove();
  });

  $("#chat-group-users").on("click", ".user-search-remove", function(){
    $(this).parent().remove();
  });
});