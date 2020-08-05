function display(){

 var name = document.getElementById("info").value;
 var address = document.getElementById("info1").value;
 var sizes = size();
 var topp = toppings();
 var result ="\t    YOUR ORDER SUMMARY"+"\n\nName: "+ name+"\nAddress: " +address+"\nSize: "+sizes+"\nToppings: "+topp;
 document.getElementById("textarea").value = result;

  return result;
}

function toppings(){
 var top = ["Pepperoni\n","Sausage\n","Olives\n","Mushrooms\n","Extra Cheese\n"];
  if(!document.getElementById("t1").checked){
     top[0]="";
  }
  if(!document.getElementById("t2").checked){
     top[1]="";
  }
  if(!document.getElementById("t3").checked){
     top[2]="";
  }
  if(!document.getElementById("t4").checked){
   top[3]="";
}
  if(!document.getElementById("t5").checked){
    top[4]="";
 }
 return (top[0]+top[1]+top[2]+top[3]+top[4]);
}

function size(){
var s = "";
 if(document.getElementById("size1").checked){
   s = document.getElementById("size1").value;
 }else if (document.getElementById("size2").checked) {
  s = document.getElementById("size2").value;
}else{
   s = document.getElementById("size3").value;
 }
 return s;
}
