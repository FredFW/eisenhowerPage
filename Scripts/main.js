var myScroll;
var element;

function loaded(){
  myScroll = new IScroll("#wrapper",{
    bounce: false,
    mouseWheel: true,
    scrollbars: true,
    interactiveScrollbars: true,
    keyBindings: true,
    momentum: false,
    click: true,
    probeType: 2
  });
  
  $("#scroller").stellar({
    horizontalScrolling: false,
    verticalScrolling: true,
    responsive: false,
    scrollProperty: "transform",
    positionProperty: "transform",
    parallaxBackgrounds: true,
    parallaxElements: false,
    hideDistantElements: true
  });
  
  element = [
    
    [$(".head").outerHeight(), ".head"],
    [$("#startPic").outerHeight(), "#startPic"],
    [$("#y1980").outerHeight(), "#y1980"],
    [$("#y1911").outerHeight(), "#y1911"],
    [$("#militaryPic").outerHeight(), "#militaryPic"],
    [$("#y1915").outerHeight(), "#y1915"],
    [$("#y1916").outerHeight(), "#y1916"],
    [$("#generalPic").outerHeight(), "#generalPic"],
    [$("#y1942").outerHeight(), "#y1942"],
    [$("#y1944").outerHeight(), "#y1944"],
    [$("#y1945").outerHeight(), "#y1945"],
    [$("#war2").outerHeight(), "#war2"],
    [$("#presidentPic").outerHeight(), "#presidentPic"],
    [$("#y1948").outerHeight(), "#y1948"],
    [$("#y1952").outerHeight(), "#y1952"],
    [$("#y1953").outerHeight(), "#y1953"],
    [$("#y1956").outerHeight(), "#y1956"],
    [$("#y1961").outerHeight(), "#y1961"],
    [$("#quotePic").outerHeight() + $("#quote").outerHeight() + $("#link").outerHeight(),"#quotePic"]
    
  ];
  
  initPosition();
  
  $(window).resize(function(){
    location.reload();
  });

  myScroll.on("scroll", move);
  myScroll.on("scrollEnd", move);
}

document.addEventListener("touchmove", function (e) { e.preventDefault(); }, false);
document.addEventListener("keydown", move);

function initPosition(){
  if (sessionStorage.getItem("y")){
    var position = sessionStorage.getItem("y");
    myScroll.scrollToElement(position,1000);
  }
}

function move() {
  
  $(".opt10").each( function(){
    var top_of_object = $(this).offset().top;
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height() * 0.8;
    
    // if(bottom_of_window > top_of_object && bottom_of_object > $(window).height() * 0.25){
    if(bottom_of_window > top_of_object && bottom_of_object > $(window).height() * 0.15){
      $(this).css("opacity","1");
    }
    else{
      $(this).css("opacity","0.2");
    }
  });
  
  var sum = 0;
  
  for(i=0; i<19; i++){
    
    sum += element[i][0];
    
    if (-(myScroll.y) < sum){
      sessionStorage.setItem("y",element[i][1]);
      break;
    }
  }
  
}