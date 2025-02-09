const images = ["Dubai.jpg", "Hongkong.jpg", "Istanbul.jpg", "London.jpg", "Milan.jpg", 
    "NYC.jpg", "Seoul.jpg", "Barcelona.jpg", "Shanghai.jpg", "Sydney.jpg", 
    "Taipei.jpg", "Tokyo.jpg"];

function handleBackground(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    bgImage.src = `image/${chosenImage}`;
    bgImage.id = "background-image";
    
    const existingImage = document.getElementById("background-image");
    if (existingImage){
        existingImage.remove();
    }
    document.body.appendChild(bgImage);
}

handleBackground();
setInterval(handleBackground,5000);


    
