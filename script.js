
// MY VERY FIRST GAME IN JAVASCRIPT ROCK-PAPER-SCISSORS 
// THANKS THE ODIN PROJECT



let botScore = 0;
let humanScore = 0;

function getComputerChoice()
{
    let num = Math.random();
    

    if(num<=0.33)
    {
        return "rock";
    }
    else if(0.33<num && num<=0.66)
    {
        return "paper";
    }
    else if(num>0.66)
    {
        return "scissors";
    }

}


function playRound(humanChoice, computerChoice)
{
    console.log("Bot throws " + computerChoice + " and Human throws " + humanChoice);

    if(humanChoice.toLowerCase() == computerChoice)
    {
        console.log("Draw");
    }
    else if(humanChoice.toLowerCase( )== "rock" && computerChoice == "paper")
    {
        console.log("Bot wins");
        botScore++;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors")
    {
        console.log("Human wins");
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")
    {
        console.log("Bot wins");
        botScore++;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock")
    {
        console.log("Human wins");
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock")
    {
        console.log("Bot wins");
        botScore++;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper")
    {
        console.log("Human wins");
        humanScore++;
    }
    else
    {
        console.log("Error");
    }
}





function playGame()
{
    for(let i = 1; i<6; i++)
    {
        console.log("Round " + i); 
        console.log(humanScore + " - " + botScore);
       
        let input = prompt("Rock, Paper or Scissors?");
        let bot = getComputerChoice();

        playRound(input, bot);
    }
}


playGame();


