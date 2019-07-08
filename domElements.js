    
    // This code has abug will have to find it
    function autoRefresh(t){
    setTimeout("location.reload(true);",t);
    } 

    function webDomwin(){
        var ret = document.title;
        alert("Doc title:" + ret);

        var ret = document.URL;
        alert("Doc url:" + ret);
        
        var ret = document.form[0];
        alert("Doc first form:" + ret);
        
        var ret = document.form[0].element[1];
        alert("second elemement:" + ret);
        
        }
        function w3cwebDomwin(){
            var ret = document.getElementsByTagName("title");
            alert("Doc title:" + ret[0].text);
    
            var ret = document.getElementById("heading");
            alert("Doc heading:" + ret.innerHTML);
            
            
            }

        
        function ie4webDomwin(){

            var ret = document.all["heading"];
            alert("Doc heading:" + ret.innerHTML);

            var ret = document.all.tags("p");
            alert("First Paragraph:" + ret[0].innerHTML);   
                        
            }