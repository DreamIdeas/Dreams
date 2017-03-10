(function () {
  var
    socket     = io(),
    formEl     = document.getElementsByTagName('form')[0],
    inputEl    = document.getElementById('m'),
    messagesEl = document.getElementById('messages')
  ;


  formEl.onsubmit = function () {
    socket.emit('chat message', inputEl.value);
    inputEl.value = '';
    return false;
  };

  inputEl.focus();


  socket.on('chat message', function(msg){
    messagesEl.innerHTML += '<li>' + msg + '</li>';
    window.scrollTo(0, document.body.scrollHeight);
  });
})();
