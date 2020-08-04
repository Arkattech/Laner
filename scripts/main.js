document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1366){
    document.querySelector('.inner-cv').innerHTML = '<h4>Due to the current Coronavirus pandemic</h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#" class="x"><h6 style="text-decoration: underline; margin: 5px;">dismiss</h6></a>'
  } else {

  }
  let covid = document.querySelector('.covid');
  let blur = document.querySelector('.blur')
  covid.style.display = 'inline-block';
  blur.style.filter = 'blur(2px)'

  document.querySelector('.x').onclick = () => {
    covid.style.display = 'none';
    blur.style.filter = 'none'
  }

  document.onscroll = () => {
    covid.style.display = 'none';
    blur.style.filter = 'none'
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

document.querySelector('.place').onclick = () => {
  let order = document.querySelector('.order');
  let blur = document.querySelectorAll('.blur');
  var i;
  for (i = 0; i < blur.length; i++) {
    blur[i].style.filter = 'blur(2px)'
  }
  order.style.display = 'inline-block';
  document.querySelector('#x').onclick = () => {
    order.style.display = 'none';
    for (i = 0; i < blur.length; i++) {
      blur[i].style.filter = 'none'
    }
  }
}

function addField(){
  var container = document.querySelector('.order-add');
  var input = document.createElement('input');
  input.type = "text";
  input.name = 'Line-Item'
  input.setAttribute('class', 'order-field')
  input.placeholder = 'Item'
  input.style = 'max-width: 250px; margin:5px;'
  var num = document.createElement('input');
  num.type="number"
  num.name = 'line-q'
  num.style = 'width: 40px;'
  num.setAttribute('class', 'order-field')
  var label = document.createElement('label')
  label.setAttribute = ('for', 'line-q')
  label.innerHTML = '#'
  input.style.marginBottom = "25px"
  container.append(input);
  container.append(label)
  container.append(num);
  container.append(document.createElement('br'));
}

function customerSelect() {
  if(document.getElementById('select_field').value == 'Customer_account'){
    console.log('customer')
    document.getElementById('customer').disabled = false;
    document.getElementById('customer').required = true;
  }
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dyn").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "corp.txt", true);
  xhttp.send();
}

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("majax").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "map.txt", true);
  xhttp.send();
}
