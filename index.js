let billbox=document.getElementById('Bill');
let btn5=document.getElementById('btn5');
let btn10=document.getElementById('btn10');
let btn15=document.getElementById('btn15');
let btn25=document.getElementById('btn25');
let btn50=document.getElementById('btn50');
let per=document.getElementById('person');
let tipdisplay=document.getElementById('tipdisplay');
let billdisplay=document.getElementById('totaldisplay');

let tipamount
function calcul(value) {
    tipamount= (billbox.value * value / 100)
     
}

function personcal() {
   let tip=tipamount/per.value;
   let total=parseInt(tip)+parseInt(billbox.value)
   tipdisplay.innerHTML=tip;
   billdisplay.innerHTML=total
console.log(total);
}


function reset() {
    billbox.value="";
    tipdisplay.innerHTML=0;
    billdisplay.innerHTML=0;
    per.value=0
}
