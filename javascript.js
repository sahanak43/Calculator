function Solve(val){
const value1=document.getElementById('res')
value1.value+=val; //to enter more than one number add '+'

}
function Result(){
    const num1=document.getElementById('res').value;
    const num2=eval(num1);
    document.getElementById('res').value=num2;
}
function Clear(){
    const input=document.getElementById('res');
    input.value="";
}
function Back(){
    const remove=document.getElementById('res')
    remove.value=remove.value.toString().slice(0,-1);
}