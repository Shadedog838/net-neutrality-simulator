window.alert('Save Net Neutrality');
document.querySelector('#begin').addEventListener('click', function() {
  document.querySelector("#women").src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif";
  document.querySelector("#football").src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif";
  document.querySelector("#pi").style.opacity=0.1;
  document.querySelector("#bi").style.opacity=0.1;
  document.querySelector("#begin").style.background="grey";

  window.alert('Life is not fun without net-neutrality. Click the button below and mak a differnce');
var links= document.querySelectorAll('a');
  var numberLinks= links.length;
for (var count=0; count< links.length; count ++){
  links[count].href='';

}






});

  var numberSupport=0;

document.querySelector('#submit').addEventListener('click', function() {
var showNumber=document.querySelector('.Supporters');
  var name= document.querySelector('#name').value;
  var email= document.querySelector('#email').value;
  var phonenumber= document.querySelector('#phonenumber').value;
  var comment= document.querySelector('#comment').value;

  if(name==''){
window.alert('Please fill out name');
}else if(email==''){
  window.alert('Please fill out email');
}else if(phonenumber==''){
window.alert('please fill out phonenumber');
}else{
  window.alert('Thank you for your support');
  numberSupport=numberSupport+1
    showNumber.textContent=numberSupport;
}
});
