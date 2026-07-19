
document.querySelector('#change').addEventListener('click',function (){
if(document.querySelector('.change1')){
  document.querySelector('.background').style.background= `url('../images/signIn.png')`;
  document.querySelector('.background').style.backgroundSize='100vw 100vh';
  document.querySelector('#change').textContent='Log In?';
 let login = document.querySelector('.login');
 let signUp = document.querySelector('.signUp');
 signUp.style.display='initial';
 login.style.animationName='sliding';
 signUp.style.zIndex='1';
 login.style.zIndex='2';
document.querySelector('.signUp').style.removeProperty('animation-name')
 document.querySelector('#change').classList.add('change2');
 document.querySelector('#change').classList.remove('change1');
}
 else{
 document.querySelector('.background').style.background= `url('../images/signUp.png')`;
  document.querySelector('.background').style.backgroundSize='100vw 100vh';
  document.querySelector('#change').textContent='Sign Up?';
let login = document.querySelector('.login');
let signUp = document.querySelector('.signUp');
 login.style.display='initial';
 signUp.style.animationName='sliding';
 signUp.style.zIndex='2';
 login.style.zIndex='1';
document.querySelector('.login').style.removeProperty('animation-name')
 document.querySelector('#change').classList.add('change1');
 document.querySelector('#change').classList.remove('change2');
}
}
)

