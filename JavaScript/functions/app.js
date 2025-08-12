//Function to print poem
function printPoem()
{
    console.log("Twinkle,Twinkle little star!");
    console.log("How I wonder what you are");
}
printPoem();

//Function to roll a dice
function rollDice()
{
    num=Math.floor(Math.random()*6)+1;
    alert("Dice value "+num);
}

rollDice();

//Average of 3 numbers
function avg(a,b,c)
{
    res=(a+b+c)/3;
    console.log(`Average of ${a}, ${b}, ${c} is ${res}`);
}

avg(3,5,6);


//To print multiplication tables

function tables(n)
{
    console.log(`Table of ${n} is:`);
    for(let i=1;i<=10;i++)
    {
        console.log(`${n}*${i}=${n*i}`);
    }
}
tables(5);

//Function to calculate sum from 1 to n
function sum1ToN(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}

console.log(sum1ToN(10));


//Function that returns the concatenation of all strings in array
let str=["hi",'hello','bye','Rashmi'];
function concat(str)
{
    let result="";
    for(let i=0;i<str.length;i++)
    {
        result=result+str[i];
    }
    console.log(result);
}

concat(str);