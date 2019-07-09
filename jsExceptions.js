//try{}catch()

function exceptionTest(){
    var a = 100;
    try{
        document.write("a value is:" + a +"<br/>");
        document.write("a value is:" + b );
        // eeror will occur to b which is undefined.
    }catch(e){
        document.write("ERROR:" + e.description);
    }
    }

   // Now using try{}catch()finally{}
   function exceptionTest2(){
    var a = 100;
    try{
        document.write("a value is:" + a +"<br/>");
        document.write("a value is:" + b );
        // error will occur to b which is undefined.
    }catch(e){
        document.write("ERROR:" + e.description + "  <br/>");
    }finally{
        document.write(" The Finally code will always execute");
        // The code here will always excute_ in finally.
    }
    }

       // Now using throw exeption
       function exceptionTest3(){
        var a = 100;
        var b = 2;
        try{
            if(b == 0){
                throw("DIVIED BY ZERO ERROR");
                // with throw you get to use your error statement
                }else{var c = a/b;
                }       
        }catch(e){
            document.write("error:" + e);
        }finally{
            document.write(" Ans is: " + c );
            // The code here will always excute_ in finally.
        }
    }
    // Now using onerror() exeption
    // this exception occrs on window object when error is on
    // a page
    function onerrorFunctionTest(){
        window.onerror = function(msg, url, line){
            document.write("MESSAGE. " + msg);
            document.write("url. " + url);
            document.write("line. " + mlinesg);
        }
    }//
