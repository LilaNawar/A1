let input =1;
let resultNum = 0;
let final = document.getElementById("result").innerText;

function addNum(){
    let input = document.getElementById("field").value
    final = parseInt(final)
    input = parseInt(input)
    if (final=>0){
      document.getElementById("result").innerText= parseInt(document.getElementById("result").innerText) + 
      parseInt(document.getElementById("field").value)
        if(document.getElementById("result").innerText >=0){
          document.getElementById("result").style.color = "black";
        }
        else{
          document.getElementById("result").style.color = "red";
        }
     }
      else {
        console.log(final)
        final = (document.getElementById("result").innerText + 1);
  }
}
function subNum(){    
   let input = document.getElementById("field").value
   final = parseInt(final)
   input = parseInt(input)
    if(final>=0){
      document.getElementById("result").innerText= parseInt(document.getElementById("result").innerText) - 
    parseInt(document.getElementById("field").value)
      
      if(document.getElementById("result").innerText >=0){
        document.getElementById("result").style.color = "black";
      }
      else{
        document.getElementById("result").style.color = "red";
      }
    }
   else{
      final = (document.getElementById("result").innerText - 1)
  }

}
