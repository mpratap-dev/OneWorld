(function(){
  const subscribeBtn = document.getElementsByClassName('btn-subscribe')[0];
  const subscribeTxt = document.getElementsByClassName('form-control')[0];
  subscribeBtn.addEventListener('click', (event) => {
    subscribeTxt.classList.toggle('expand');
    if(event.target.innerText == 'Subscribe'){
      event.target.innerText = 'Submit';
    } else {
      event.target.innerText = 'Subscribe';
    }
  })  
})();