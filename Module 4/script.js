function loaded(){
   alert("loaded");
}


function pass(e){
    //console.log(e.value);
    var password= document.getElementById("password").value;
    var confirm= e.value;

    if (confirm===password){
        alert("correct");
        }
        else
        {document.getElementById("password1").innerHTML="your password is incorrect";
    }

    }