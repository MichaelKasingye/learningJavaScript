function autoRefresh(t){
setTimeout("location.reload(true);",t);
}
document.write("tsup!!");// testing link
//method greeting on alert
function sayHI(){
    alert("hey tsup bro");
}
sayHI()

// method greeting on click
function sayTsup(){
    document.write("And I appear with a HEY HEY!!!");
}

// method with parameters
function me(name,age){
    document.write("Hey I am " + name + "<br/>" + "and "+ age + " old.");
}

//return function
function add(first,last){
    var both;
    both= first + last;
    return both;
    
}

function meWho(){
    var result;
    result = add('Michael ', ' Kasingye');
    document.write(result);
}

// funtion constructor
/*var func = new function(x,y,"return x*y");

 function added(){
     var result;
     result = func(10,20);
     document.write(result);
 }*/

 //function literal
 var func = new function(x,y){return x*y};

 function added(){
     var result;
     result = func(10,20);
     document.write(result);
 }

