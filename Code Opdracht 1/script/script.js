var heart = document.querySelector('.heart');

var hiddenheart = document.querySelector('.heart-center');

var listcount = document.getElementById("number");





heart.addEventListener("click",function(){
    hiddenheart.classList.toggle('heart-animation');
    document.getElementById("number").textContent="3";
    heart.classList.toggle('heart-full');

  }
);
