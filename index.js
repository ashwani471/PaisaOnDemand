var toggle_btn = document.getElementsByClassName('toggle_btn');
var ans = document.querySelectorAll('.ans');
for (var j = 0; j < ans.length; j++) {
    ans[j].style.display = 'none';
}
for (var i = 0; i < toggle_btn.length; i++) {
    toggle_btn[i].addEventListener('click', toggle(), false);
}

function toggle() {
    var x = toggle_btn[i].innerHTML;
    if (x === '+') {
        x[i].innerHTML = '-';
        ans[i].style.display = 'block';
    } else if (x === '-') {
        x[i].innerHTML = '+';
        ans[i].style.display = 'none';
    }
}