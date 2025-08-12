const max=prompt("Enter maximum number");


let random=Math.floor(Math.random()*max)+1;
while(true)
{
let guess=prompt("Guess the number");
if(guess==random)
{
alert("Congrajulations! you guessed right");
}
else if(guess=="quit")
{
    break;
}
else 
{
if(guess<random)
    alert("Enter a larger number as the guessed number is smaller")

else
    alert("Enter a smaller number as the number you guessed is larger");
}
}