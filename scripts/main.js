document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1366){
    document.querySelector('.inner-cv').innerHTML = '<h4>Due to the current Coronavirus pandemic</h4> Will Call pickup available. <br> Masks or face shields are required. <br> Orders can be placed over the phone, via email and by texting our landline (510) 215-5100 <br> Modified Hours of Operation: Monday thru Friday: 7AM-3PM. <a href="#" class="x"><h6 style="text-decoration: underline; margin: 5px;">dismiss</h6></a>'
    let card = document.querySelectorAll('.project-card')
    card.forEach((item) => {
      item.setAttribute('data-aos', '')
    });

    card.setAttribute('data-aos', '')
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
    document.querySelector('.order-inner').style.animationPlayState = "running"
    for (i = 0; i < blur.length; i++) {
      blur[i].style.filter = 'none'
    }
    setTimeout(()=> {
      order.style.display = 'none'
      document.querySelector('.order-inner').style.animationPlayState = "paused"
    }, 1000)

  }
}

function addField(){
  var container = document.querySelector('.order-add');
  var newDiv = document.createElement('div')
  var input = document.createElement('input');
  input.type = "text";
  input.name = 'Line-Item'
  input.setAttribute('class', 'order-field')
  input.placeholder = 'Item'
  input.style = 'max-width: 250px; margin:5px;'
  var num = document.createElement('input');
  num.type="number"
  num.name = 'Line Item'
  num.style = 'width: 40px;'
  num.setAttribute('class', 'order-field')
  var label = document.createElement('label')
  label.setAttribute = ('for', 'Line Item')
  label.innerHTML = '#'
  input.style.marginBottom = "25px"
  var a = document.createElement('a')
  a.setAttribute('class', 'close')
//  a.setAttribute('onclick', 'closeField()')
  a.innerHTML = "x"
  newDiv.append(a)
  newDiv.append(input);
  newDiv.append(label)
  newDiv.append(num);
  container.append(newDiv)
  container.append(document.createElement('br'));
}

document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'close') {
        element.parentNode.remove()
    }
});


function customerSelect() {
  if (document.getElementById('select_field').value == 'Customer_account') {
    console.log('customer')
    document.getElementById('customer').disabled = false;
    document.getElementById('customer').required = true;
  } else {
    document.getElementById('customer').disabled = true;
    document.getElementById('customer').required = false
  }
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("majax").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "times.txt", true);
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
