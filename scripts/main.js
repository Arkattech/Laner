document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1366){
    document.querySelector('.inner-cv').innerHTML = '<h4>Due to the current Coronavirus pandemic</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#" class="x"><h6 style="text-decoration: underline; margin: 5px;">dismiss</h6></a>'
  } else {

  }
  let covid = document.querySelector('.covid');
  covid.style.display = 'inline-block';

  document.querySelector('.x').onclick = () => {
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
