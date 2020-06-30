document.addEventListener('DOMContentLoaded', () => {
  let covid = document.querySelector('.covid');
  covid.style.display = 'inline-block';

  document.querySelector('#x').onclick = () => {
    covid.style.display = 'none';

  }
});

window.onscroll = function() {navScroll()};
var navbar = document.getElementById('top');
var sticky = navbar.offsetTop;

function navScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

function addField(){
  var container = document.querySelector('.jsc');
  var input = document.createElement('input');
  input.type = "text";
  input.name = 'lineitem'
  var num = document.createElement('input');
  num.type="number"
  num.name = 'lineq'
  num.style = 'width: 40px;'
  container.append(input);
  container.append(num);
  container.append(document.createElement('br'));
}
