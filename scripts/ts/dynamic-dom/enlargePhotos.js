export function enlarge(img, i){

    let images = document.getElementsByTagName("img");
    console.log(images);

    for(let i = 0; i < images.length; ++i){
        images[i].addEventListener("click", enlargeImg);
    }
}

function enlargeImg(){
    console.log(this);
}