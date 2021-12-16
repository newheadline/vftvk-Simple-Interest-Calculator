function populateyears(){
    //populating drop-down box from 1 to 10 
        var start = 1;
        var end = 10;
        var options = "";
        for(var year = start ; year <=end; year++){
          options += "<option>"+ year +"</option>";
        }
        document.getElementById("years").innerHTML = options;
    }
    
    function updateRate() 
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }
    function compute()
    {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var amount = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        //principal Element
        var principalElm = document.getElementById("principal");
        
        if(principal <= 0){
                alert("Enter a positive number");
                principalElm.focus();
                return false;
          }
          else {
              //setting the background color of numbers as yellow according to the original example in the descriptiom
        document.getElementById("result").innerHTML="If you deposit <span class='yellowtxt'>"+principal+
        "</span>,\<br\>at an interest rate of <span class='yellowtxt'>"+rate+
        "</span>%\<br\>You will receive an amount of <span class='yellowtxt'>"+amount+
        "</span>,\<br\>in the year <span class='yellowtxt'>"+year+"</span> \<br\>";
          }
        
    }
                 