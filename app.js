turn=1;
fin1=0;
fin2=0;
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
      else
       {
        sum2=0;
        g=0;
      }
      changeturn();
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
  }
  function changeturn()
  {
    if(turn==1)
    {
      turn=2;
      fin1=fin1+sum1;
      sum1=0;
      document.getElementById("score-0").innerHTML=fin1;
      result(fin1,0);
      var h=document.getElementById("player-0-panel");
      h.className="";
      var d=document.getElementById("player-1-panel");
      d.className="active";
      document.getElementById("current-0").innerHTML=0;
    }
    else {
      turn=1;
      fin2=fin2+sum2;
      sum2=0;
      document.getElementById("score-1").innerHTML=fin2;
      result(fin2,1);
      var h=document.getElementById("player-1-panel");
      h.className="";
      var d=document.getElementById("player-0-panel");
      d.className="active";
      document.getElementById("current-1").innerHTML=0;
    }
  }
  function addSum(g)
  {
    if(turn==1)
    {
      sum1=sum1+g;
      document.getElementById("current-0").innerHTML=sum1;
    }
    else
    {
      sum2=sum2+g;
      document.getElementById("current-1").innerHTML=sum2;
    }
  }
  function result(f,a)
  {
    if(f>=100)
    {
      if(a==0)
      {
        document.getElementById("name-0").innerHTML="WINNER";
      }
      else
       {
        document.getElementById("name-1").innerHTML="WINNER";
      }
    document.querySelector(".btn-roll").disabled="true";
    document.querySelector(".btn-hold").disabled="true";
  }
  }
