const os=document.getElementById('os')

console.log(os);

function Clear()
{
    os.value=""
}
function display(txt)
{
    os.value=os.value+txt;
    console.log(os);
}
function Del()
{
    os.value=os.value.slice(0,-1);
}
function calculate()
{
    os.value=eval(os.value);
}
function Cube()
{
    let a=prompt('Enter the a value');
    let res=a*a*a;
alert(`The answer is ${res}`);
}

function Square()
{
let a=prompt ('Enter the a Value');
let res=a*a;
alert(`The answer is ${res}`);
}
