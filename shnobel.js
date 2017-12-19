var ShnobelPrize=function(){
  this.timeToLunch=function(lunchHourAndDate){
    var dateNow=Date.now();
    var dateLunch=new Date(lunchHourAndDate);
    var time=(dateLunch-dateNow)/1000/60/60;
    console.log("Time to lunch is "+time+" hours");
    return time;
  };

  this.hangover=function(money, dayOfWeek){
    if (parseInt(money)>250&&(dayOfWeek.toLowerCase()=="thursday"||dayOfWeek.toLowerCase()=="friday")){
      console.log("You will definitely have a hangover tomorrow.");
      return true;
    }
    else{
      console.log("You will not have hangover");
      return false;
    }
  }

  this.casino=function(number){
    var rnd=Math.ceil(Math.random()*10);
    console.log(rnd);
    if (rnd==number){
      console.log("This is definitely your casino day.");
      return true;
    }
    else{
      console.log("Maybe going to a casino will not be a good idea.");
      return false;
    }
  }

  this.drawCirle=function(radius, left, top, color){
    var element=document.createElement("DIV");
    document.body.appendChild(element);
    element.style.width=parseInt(radius)*2+"px";
    element.style.height=parseInt(radius)*2+"px";
    element.style.position="absolute";
    element.style.backgroundColor=color;
    element.style.borderRadius="50%";
    element.style.left=left+"px";
    element.style.top=top+"px";
  }

  this.probability=function(tosses){
    var heads=0;
    var tails=0;
    for (var i=0; i<tosses; i++){
      var rnd=Math.ceil(Math.random()*2);
      if (rnd==1){
        heads++;
      } else if (rnd==2){
        tails++;
      }
    }
    var probability=[heads/(tails+heads)*100, tails/(tails+heads)*100];
    return probability;
  }
}
