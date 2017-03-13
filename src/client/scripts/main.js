(function () {
  var
    socket     = io(),
    formEl     = document.getElementsByTagName('form')[0],
    inputEl    = document.getElementById('m'),
    messagesEl = document.getElementById('messages'),
    cursors    = [{ x: 0, y: 0 }],
    users      = {}
  ;


  document.addEventListener('mousemove', function (event) {
    cursors[0].x = event.pageX;
    cursors[0].y = event.pageY;
    socket.emit('mouse move', JSON.stringify(cursors[0]));
  });


  socket.on('user move', function (user) {
    user = JSON.parse(user);

    if (!users[user.id]) {
      users[user.id] = user;

      var userEl = document.createElement('div');
      userEl.classList.add('user');
      document.body.appendChild(userEl);
      users[user.id].el = userEl;
    }

    users[user.id].el.style.left = user.x + 'px';
    users[user.id].el.style.top  = user.y + 'px';
  });

  socket.on('user leave', function (user) {
    user = JSON.parse(user);
    document.body.removeChild(users[user.id].el);
    delete users[user.id];
  });



  socket.on('chat message', function(msg){
    messagesEl.innerHTML += '<li>' + msg + '</li>';
    window.scrollTo(0, document.body.scrollHeight);
  });

  formEl.onsubmit = function () {
    socket.emit('chat message', inputEl.value);
    inputEl.value = '';
    return false;
  };

  inputEl.focus();
})();
