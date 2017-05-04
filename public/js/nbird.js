(function () {
  var birthTag = document.getElementById('liveCount');
  var deathTag = document.getElementById('deathCount');

  if (birthTag && deathTag) {
    var socket = io.connect();

    socket.on('birth', function () {
      var count = parseInt(birthTag.textContent, 10);
      birthTag.innerHTML = count + 1;
    });

    socket.on('death', function () {
      var count = parseInt(deathTag.textContent, 10);
      deathTag.innerHTML = count + 1;
    });
  }
})();
