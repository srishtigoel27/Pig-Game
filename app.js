turn=1;
sum1=0;
sum2=0;
  function rolldice()
  {
    var max=6;
    var min=1;
    g =Math.floor(Math.random() * (+max - +min)) + +min;
    if(g==1)
    {
      document.getElementById("dice").src="dice-1.png";
      if(turn==1)
      {
        sum1=0;
        g=0;
      }
      else {
        sum2=0;
        g=0;
      }
    }
    else if(g==2)
    {
      document.getElementById("dice").src="dice-2.png";
    }
    else if(g==3)
    {
      document.getElementById("dice").src="dice-3.png";
    }
    else if(g==4)
    {
      document.getElementById("dice").src="dice-4.png";
    }
    else if(g==5)
    {
      document.getElementById("dice").src="dice-5.png";
    }
    else if(g==6)
    {
      document.getElementById("dice").src="dice-6.png";
    }
    addSum(g);
    if(turn==1)
    {
      turn=2;
      var h=document.getElementById("player-0-panel");
      h.className="";
      var d=document.getElementById("player-1-panel");
      d.className="active";
    }
    else {
      turn=1;
      var h=document.getElementById("player-1-panel");
      h.className="";
      var d=document.getElementById("player-0-panel");
      d.className="active";
    }
  }
  function addSum(g)
  {
    if(turn==1)
    {
      sum1=sum1+g;
      document.getElementById("score-0").innerHTML=sum1;
    }
    else
    {
      sum2=sum2+g;
      document.getElementById("score-1").innerHTML=sum2;
    }
  }
