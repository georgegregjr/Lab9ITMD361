function init(){
//add your javascrip between these two lines of code
  var alertbut = document.getElementById('entrybutton');
  
  function showText(){
    var intext = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = intext.value;
    alert("George West: "+ intext.value);
  }
  
  alertbut.addEventListener('click', showText);
  }

window.addEventListener('load', init);
