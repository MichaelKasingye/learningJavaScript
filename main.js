//practice java Script
document.write("hey \\ and yo yo it\'s and \"cools\" ");
var greet1 = "<br/>" + " hey";
var greet2 = "mike";
document.write(greet1 + greet2 + "\n");

var num1 = 10;
var num2 = 10;
var ans = num1 + num2;
var count = 0;

document.write(num1 + num2);
document.write("<br/>");

if (ans => 30){
    document.write(" it above 30");
}else{document.write(" its less than 30");}

while(ans != 30 ){
    if (ans = 30){
        document.write(" it below 30");
    }else{document.write(" its less than 30");}
}
document.write("<br/>");

while(count < 10){
     document.write("count is " + count + "<br/>");
    count++;
}
// do while loop
/*do{
    document.write("count is " + count + "<br/>");
    count++;
}while(count < 5); this do loop was complementing the while loop*/
document.write("<br/>");
document.write(" do while loop" + "<br/>");
 function myDoLoop(){
    var count = 0;
    do{
        document.write("count is " + count + "<br/>");
        count++;
    }while(count < 5);
     }
     myDoLoop();
     document.write("<br/>");
// for loop
document.write(" for loop" + "<br/>");
function myforLoop(){
    for(count = 0; count < 8; count++){
        document.write("count is " + count + "<br/>");
    }
     }
     myforLoop();
     document.write("<br/>");

// breaks and continue for loops
document.write(" breaking out of while loop" + "<br/>");
function myWhile(){
    count = 1;

    while(count < 10){
        if(count == 6){break;}//breaks out of the loop
        document.write("count is " + count + "<br/>");
       count++;
    }
     }
     myWhile();
     document.write("<br/>");

     // breaks and continue for loops
     document.write(" contiuing a while loop" + "<br/>");
     function myCWhile(){
         count = 1;
         
         while(count < 10){
            count++;
             if(count == 6){continue;}//completes  the loop
             document.write("count is " + count + "<br/>");
        
            }
          }
          myCWhile();
     
