 let out = document.getElementById("output");
    function display(num){
        out.value += num ;
    }
    function calculate(){
        try{
            out.value = eval(out.value)
        }
        catch(err){
            alert("invalid")

        }
    }
   
    function del(){
        out.value = out.value.slice(0,-1);
    }
     function cl(){
        out.value = "";
    }