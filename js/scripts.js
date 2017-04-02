
var n =  rysujChoinke(5)       
function rysujChoinke(n) {
    for( k = 1; k <= n; k++)
    {  var star = (' ')
        
        for(j = 1; j<=( 2*k-1 ); j++)
        {
            star += '*';
        }
		 console.log(star);
    }  
        
}

//próba ze spacjami ,
var n =  rysujChoinke(5)       
function rysujChoinke(n) {
    for( k = 1; k <= n; k++)
    {  var star = (' ')
        
        for(j = 1; j<=( 2*k-1 ); j++)
        {
            star += '*';
        }
        for (i = 1; i <= n; i++) {
        	space = (' ')
        }
		 console.log(star);
		 console.log(space);
    }  
        
}






var s = " ";
var n =  rysujChoinke(5)       
function rysujChoinke(n) {
    for( k = 1; k <= n; k++)
    {   for (i = n-1; i > k; i--) {
    	 s += k + " ";
    }
			var star = (" ");
        for(j = 1; j<=( 2*k-1 ); j++)
        {
            star += "*";

        }
		 console.log(star);
    }  
        
}
 var n = 5
 for(i=1; i<=n; i++)
    { 
        //Prints trailing spaces
        for(j=i; j<n; j++)
        {
            printf(" ");
        }
 
        //Prints the pyramid pattern
        for(j=1; j<=(2*i-1); j++)
        {
            printf("*");
        }
 
        console.log(printf);
    }








    var n = 8;                                          
                                                      
    for(i=1; i<=n; i++)
    { 
        //Prints trailing spaces
        for(j=i; j<n; j++)
        {
            document.write(" ");               
        }
 
        //Prints the pyramid pattern
        for(j=1; j<=(2*i-1); j++)
        {
            document.write("*");
        }
 
        document.write("<br>");

        }

        var x = 8;
for (let i = 0; i < x; i++) {
   for (let j=x-1; j>i; j--) {
      var star = (" "); 
   }
   for (let k=0; k<=(i*2); k++) {
      star += '*'; 
   }
   console.log(star);
}