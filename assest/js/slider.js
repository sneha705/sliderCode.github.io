var obj = [
    { "url": "assest/image/car1.jpg","type": "car"},
    { "url": "assest/image/car2.jpg","type": "car" },
    { "url": "assest/image/car3.jpg","type": "car"},
    { "url": "assest/image/car4.jpg","type": "car" },
    { "url": "assest/image/car5.jpg","type": "car" },
    { "url": "assest/image/bike1.jpg","type": "bike"},
    { "url": "assest/image/bike2.jpg","type": "bike" },
    { "url": "assest/image/bike3.jpg","type": "bike" },
    { "url": "assest/image/bike4.jpg","type": "bike" },
    { "url": "assest/image/bike5.jpg","type": "bike" },
    { "url": "assest/image/cycle1.jpg","type": "cycle"},
    { "url": "assest/image/cycle2.jpg","type": "cycle" },
    { "url": "assest/image/cycle3.jpg","type": "cycle" },
    { "url": "assest/image/cycle4.jpg","type": "cycle" },
    { "url": "assest/image/cycle5.jpg","type": "cycle" }
];
//filter image obj
  function imgFilter (imgObj,value) {
    $("#sliderUl").css('margin-left','0px');

     var img=imgObj.filter(({type})=>type===value);
     return img;
    }
    
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
//menuBar(obj)

//function current Div
   function currentDiv(){
    var thumbNail=document.getElementsByClassName("x");
    $(thumbNail).click(function () {
     var i=   $( thumbNail ).index( this );
     sliderImag1(slideIndex = i+1);
    });
}
    

//thumnail image  call on Prev button
function thumbnailPrevBtn(){
    if ( $('#sliderUl').css('marginLeft') <'0px' ){
        $('#sliderUl').animate({'margin-left': '+=202px'}, 100);
    }

}

    
//thumnail image  call on Next button
function thumbnailNextBtn(){
    thumbnail=document.getElementsByClassName("x");
    size=(thumbnail.length*202)-(5*202);
    a=( $('#sliderUl').css('marginLeft'));
    
    if (parseInt(a) < (-size) ){
    }
    else{
       $('#sliderUl').animate({'margin-left': '-=202px'}, 100);
    }
   }

   //show slider on thumbnail slider
function sliderMove(ImgIndex) {
    sliderImag1(slideIndex += ImgIndex);
}

//thumbnail scroll on next button
function thumbnailScrollNext(){
    sliderImgArr=document.getElementsByClassName(" sliderImgArray");

    if(sliderImgArr.className="active,sliderImgArray"){

        currentImg=document.getElementsByClassName("active sliderImgArray");
       
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
            
             size=i*202;
             $('#sliderUl').animate({'margin-left': '+=202px'}, 100);
        }

    } 
         
    
}


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
   
            thumbnail=document.getElementsByClassName("x");
            size=(thumbnail.length*202)-(5*202);
            a=( $('#sliderUl').css('marginLeft'));
            
            if (parseInt(a) < (-size) ){
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
function empty(){
    $(".sliderImage").empty();
    $("#sliderUl").empty();
}

//Header menubar function call
//wrapper function of All
function wraperAll(){
   var  all=obj;
    empty();
    imgArr(all);
    menuBar(all);
    sliderImag1(slideIndex=1);
    currentDiv();
}
// All click func call
$("#all").click(function(){
    wraperAll();
});
//Onload function call 
window.onload = function() {
    wraperAll();
  };
  

// car click func call
$("#carHref").click(function(){
   
    carArray=imgFilter(obj,"car"); 
    empty();
    imgArr(carArray);
    menuBar(carArray);
    sliderImag1(slideIndex=1);
    currentDiv();

});
// All bike func call
 $("#bikeHref").click(function(){
    bikeArray=imgFilter(obj,"bike"); 
    empty();
    imgArr(bikeArray);
    menuBar(bikeArray);
    sliderImag1(slideIndex=1);
    currentDiv();


});
// cycle click func call
$("#cycleHref").click(function(){
    cycleArray=imgFilter(obj,"cycle"); 
    empty();
    imgArr(cycleArray);
    menuBar(cycleArray);
    sliderImag1(slideIndex=1);
    currentDiv();

});

//acrtive header tab

var liTab = document.getElementsByClassName("liTab");
for (var i = 0; i < liTab.length; i++) {
  liTab[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeTab");
  current[0].className = current[0].className.replace(" activeTab", "");
  this.className += " activeTab";
  });
}