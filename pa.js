history.pushState(null, null);
window.addEventListener('popstate', function(e) {
    var p = document.getElementById('no');
    p.innerHTML = '帰さないぜ！'
});