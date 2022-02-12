var a;
function myFunction() {
    if (a==1) {
        document.getElementById("mylinks").style.display="none";
        return a=0;
    }else{
        document.getElementById("mylinks").style.display="block";
        return a=1;
    }  
}