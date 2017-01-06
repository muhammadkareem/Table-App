



function btn1()
	{
		
var inpt = document.getElementById("inptv").value;
var ol1 = document.getElementById("ol1");
var li1 = document.createElement("li");
var tx;

for( var i = 1 ; i <=10 ; i ++ )
	{
       
	 tx = document.createTextNode(inpt + "*" + i + "=" + inpt*i + "       ");
      li1.appendChild(tx);
	  
		}
		
   	  ol1.appendChild(li1);
	}
	
	
	
		

