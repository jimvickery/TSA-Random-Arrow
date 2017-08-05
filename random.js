console.log('inside of random.js');

//get reference to image
var imageEl = document.getElementById("changeArrow");

//add onclick eventlistener to image 
imageEl.addEventListener("click", (changeImage));

// create random number generatorf
randNumb = Math.random();


function changeImage() {
    randNumb = Math.random();

    if (randNumb > .499) {
       (imageEl.src = "images/letfarrow.png");
       console.log('first condition executed');
       
    } else {
       (imageEl.src = "images/rightarrow.png");
       console.log('second condition executed');
       
    }
}

