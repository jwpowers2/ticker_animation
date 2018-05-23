
function end(element){
  
  TweenLite.to(element,0.1,{
  	                      backgroundColor:'transparent',
  	                      color:'transparent',
  	                      x:-500,
                          });
  
}
function start(element){
  
  TweenLite.to(element,0.1,{
  	                        color:'black',
                           });
  
}

window.onload = function(){

  var interval = setInterval(function(){
  var arr = ["FB","AAPL","AMZN"];

  var t1 = new TimelineMax();

  var ob1 = document.getElementById("one");
  var ob2 = document.getElementById("two");
  var ob3 = document.getElementById("three");

    ob1.innerHTML = arr[0];
    ob2.innerHTML = arr[1];
    ob3.innerHTML = arr[2];

  t1.to(ob1,2,{x:700,
                  y:0,
                  onStart:start,
                  onStartParams:[ob1],
                  onComplete:end,
                  onCompleteParams:[ob1]
                  })
     .to(ob2,2,{x:700,
                  y:0,
                  onStart:start,
                  onStartParams:[ob2],
                  color:'transparent',
                  onComplete:end,
                  onCompleteParams:[ob2]
                  },1.0)
       .to(ob3,2,{x:700,
                  y:0,
                  onStart:start,
                  onStartParams:[ob3],
                  color:'transparent',
                  onComplete:end,
                  onCompleteParams:[ob3]
                  },2.0)
       count++;  
  },5000)
  
       	                                                      
}