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
