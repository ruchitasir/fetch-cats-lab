const API_URL = 'https://api.thecatapi.com/v1/images/search?limit='
let Url;
let imgDiv = document.getElementById('imageDiv');
//let imgPresent = false;
let catObject, prevCatObjects;

const displayImages = (e) => {
    
    e.preventDefault();
    imgDiv.innerHTML = '';
    numOfCats = document.getElementById('imagesNum').value;
    console.log('numOfCats',numOfCats);
    console.log('type of numOfCats',typeof numOfCats);
    console.log('About to display cat images...!')
    if (numOfCats>10)
    {
        numOfCats =10;
    }
    Url =API_URL +numOfCats

    fetch(Url)
    .then((response) => {
       
        return response.json()
    })
    .then((data) => {
        console.log('SUCCESS', data)
        catObjects = data;
       /*
        if(imgPresent)
        {
            removeImages();
            imgPresent = false;
        }*/
        if(numOfCats != NaN && numOfCats !=undefined && numOfCats !='')
        { 
            extractImages();
        }
        console.log('SUCCESS', data[0].url)
    })
    .catch((err) => {
        console.log('Oh noes an error', err)
    })
}

const extractImages =()=>{
   // prevCatObjects = catObjects;
    catObjects.forEach(function(cobj) {
        let newImageItem = document.createElement('img');
        newImageItem.src = cobj.url
       /* newImageItem.setAttribute('id',cobj.id)
        newImageItem.setAttribute('src',cobj.url); */
        newImageItem.setAttribute('alt','cat image') 
        newImageItem.setAttribute('height','300');
        newImageItem.setAttribute('width','300');
        imgDiv.appendChild(newImageItem)
    })
    //imgPresent = true;
}
/*
const removeImages =()=>{
    prevCatObjects.forEach(function(cobj) {
        console.log('cobj.id',cobj.id);
       let imgItem = document.getElementById(cobj.id);
        imgDiv.removeChild(imgItem)
    })
}*/

document.getElementById('submit').addEventListener('click',displayImages);
