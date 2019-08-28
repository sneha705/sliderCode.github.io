var obj = [
    { "url": "assest/image/car1.jpg" },
    { "url": "assest/image/car2.jpg" },
    { "url": "assest/image/car3.jpg" },
    { "url": "assest/image/car4.jpg" },
    { "url": "assest/image/car5.jpg" },
    { "url": "assest/image/bike1.jpg" },
    { "url": "assest/image/bike2.jpg" },
    { "url": "assest/image/bike3.jpg" },
    { "url": "assest/image/bike4.jpg" },
    { "url": "assest/image/bike5.jpg" },
    { "url": "assest/image/cycle1.jpg" },
    { "url": "assest/image/cycle2.jpg" },
    { "url": "assest/image/cycle3.jpg" },
    { "url": "assest/image/cycle4.jpg" },
    { "url": "assest/image/cycle5.jpg" }
];

//slider image create
function imgArr(arr) {
    var div = document.getElementsByTagName('div');
    for (i = 0; i < arr.length; i++) {
        img = document.createElement('img'); //creat img_array
        img.className = 'sliderImgArray';
        
        img.setAttribute("src", arr[i].url);
        div[8].append(img);
    }
}
//create image function call
imgArr(obj);


//slider of sliderImage
function sliderImag1(ImgIndex) {
    var i;
    var x = document.getElementsByClassName("sliderImgArray");
    var thumbnail = document.getElementsByClassName("x");
    if (ImgIndex > x.length) { slideIndex = x.length  }
    if (ImgIndex < 1) { slideIndex = 1}
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        x[i].classList.remove("active");
        thumbnail[i].classList.remove("thumbnailActive"); 
    }
    x[slideIndex-1].style.display = "block";
    x[slideIndex - 1].classList.add("active");
    thumbnail[slideIndex - 1].classList.add("thumbnailActive");
}



//create  thumbnail image
function menuBar(ar) {
    var ul = document.getElementsByTagName('ul');
    for (i = 0; i < ar.length; i++) {
        li = document.createElement('li');

        img = document.createElement('img'); //create a div
        img.className = 'x';
        img.id = i;
        img.setAttribute("src", ar[i].url);

        li.className = 'li';
        ul[1].append(li);
        li.append(img);


    }
}


// thumbnail image call
menuBar(obj)

//function current Div
    var thumbNail=document.getElementsByClassName("x");
    $(thumbNail).click(function () {
     var i=   $( thumbNail ).index( this );
     sliderImag1(slideIndex = i+1);
    });
    

//thumnail image  call on Prev button
function thumbnailPrevBtn(){
    if ( $('#sliderUl').css('marginLeft') <'0px' ){
        $('#sliderUl').animate({'margin-left': '+=202px'}, 100);
    }

}

//thumnail image  call on Next button
function thumbnailNextBtn(){
    if ( $('#sliderUl').css('marginLeft') === '-2222px' ){
    }
    else{
        $('#sliderUl').animate({'margin-left': '-=202px'}, 100);
    }
   }

   //show thumbnail on slider
function sliderMove(ImgIndex) {
    sliderImag1(slideIndex += ImgIndex);
}

//thumbnail scroll on next button
function thumbnailScrollNext(){
    sliderImgArr=document.getElementsByClassName(" sliderImgArray");

    if(sliderImgArr.className="active,sliderImgArray"){

        currentImg=document.getElementsByClassName("active sliderImgArray");
        //currentImg[0].style.border="thick solid orange";
        var slidertAtr=($(currentImg[0]).attr('src'));
    }
    thubnailArr=document.getElementsByClassName("x");

    for (var i = 0; i < thubnailArr.length; i++) { 

        if($(thubnailArr[i]).attr('src')==slidertAtr){
             $('#sliderUl').animate({'margin-left': '-=202px'}, 100);
            // thubnailArr[i].style.border="thick solid orange";
        }
          
    } 
         
    
}

//thumbnail scroll on Prev btn
function thumbnailScrollPrev(){
    sliderImgArr=document.getElementsByClassName(" sliderImgArray");
    if(sliderImgArr.className="active,sliderImgArray"){
        currentImg=document.getElementsByClassName("active sliderImgArray");
     
        var slidertAtr=($(currentImg[0]).attr('src'));
    }
    thubnailArr=document.getElementsByClassName("x");
    for (var i = 0; i < thubnailArr.length; i++) { 
        if($(thubnailArr[i]).attr('src')==slidertAtr){
             $('#sliderUl').animate({'margin-left': '+=202px'}, 100);
        }

    } 
         
    
}

slideIndex = 1;
sliderImag1(slideIndex);

//calling btn function for prev button
$("#arroPrev").click(function () {
    sliderMove(-1);
    if ( $('#sliderUl').css('marginLeft') <'0px' ){
        thumbnailScrollPrev();
    }
    
});

//calling btn function for next button
$("#arrowNext").click(function () {
    sliderMove(1);
  //  thumbnailScrollNext();
   
        if ( $('#sliderUl').css('marginLeft') === '-2222px' ){
        }
        else{
            thumbnailScrollNext();
        }
});


$("#thumnNext").click(function () {
    sliderMove(1);
    thumbnailNextBtn();

});

$("#thumbPrev").click(function () {
    thumbnailPrevBtn();
    sliderMove(-1);
});

