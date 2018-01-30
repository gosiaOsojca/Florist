
/*
Flowers hover
*/

let picture_c = document.querySelector('#flowers');
picture_c.addEventListener("mouseover", function(){
picture_c.style.display = "none";
let parent = document.querySelector("#option1");
let picture1 = document.createElement('img');
picture1.src = "kwiaty2.png";
picture1.onmouseleave = function(){
  picture1.style.display = "none";
  picture_c.style.display = "";
}
parent.insertBefore(picture1, parent.firstChild);
});



/*
Wedding hover
*/

let picture_b = document.querySelector('#wedding');
picture_b.addEventListener("mouseover", function(){
picture_b.style.display = "none";
let parent = document.querySelector("#option2");
let picture2 = document.createElement('img');
picture2.src = "slub2.png";
picture2.onmouseleave = function(){
  picture2.style.display = "none";
  picture_b.style.display = "";
}
parent.insertBefore(picture2, parent.firstChild);
});


/*
Decoration hover
*/

let picture_a = document.querySelector('#decoration');
picture_a.addEventListener("mouseover", function(){
picture_a.style.display = "none";
let parent = document.querySelector("#option3");
let picture3 = document.createElement('img');
picture3.src = "dekoracje2.png";
picture3.onmouseleave = function(){
  picture3.style.display = "none";
  picture_a.style.display = "";
}
parent.insertBefore(picture3, parent.firstChild);
});

/*
Send button
*/
let send = document.querySelector('.contact-button');
send.addEventListener("click", function() {
  window.alert("Twoja wiadomosc zostala pomyslnie wyslana!");
});

/*
Gallery
*/
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
