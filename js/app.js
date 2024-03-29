$(document).ready(function(){
    filterSelection("all")

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(".column").hover(function(event){
    const index= $(this).attr("data-index");
    $(".show"+index).toggle("fade");
});
const menuBar = ["aboutMe", "portfolio", "skills", "contact" ]
$(".aboutMe").click(function(event){
  menuBar.map(function(menu){
    $("."+menu).removeClass("active");
  })
  $(this).addClass("active");
})

$(".portfolio").click(function(event){
  menuBar.map(function(menu){
    $("."+menu).removeClass("active");
  })
  $(this).addClass("active");
})

$(".skills").click(function(event){
  menuBar.map(function(menu){
    $("."+menu).removeClass("active");
  })
  $(this).addClass("active");
})

$(".contact").click(function(event){
  menuBar.map(function(menu){
    $("."+menu).removeClass("active");
  })
  $(this).addClass("active");
})

$(".brandMenu").click(function(event){
  menuBar.map(function(menu){
    $("."+menu).removeClass("active");
  })
})




})





function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }