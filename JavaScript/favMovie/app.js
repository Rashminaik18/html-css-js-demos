let favMovie="avatar";

 let guess=prompt("Enter the movie name");


while(guess!="quit")
{
    guess=prompt("Enter the movie name");
    if(guess.toLocaleLowerCase()==favMovie)
    {
        alert("You guessed right");
        break;
    }
    else
        alert("wrong!! Try again or type 'quit'")
}
alert("Thank you for playing");
