document.addEventListener('DOMContentLoaded', () => {
  let covid = document.querySelector('#covid');
  covid.style.display = 'inline-block';

  document.querySelector('#xx').onclick = () => {
    covid.style.display = 'none';

  }
});

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

document.querySelector('#pop').onclick = () => {
  document.querySelector('.popup').style.display = 'inline-block'

}

document.querySelector('#x').onclick = () => {
  document.querySelector('.popup').style.display = 'none'

}
