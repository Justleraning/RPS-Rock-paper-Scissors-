let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIndex = Math.floor(Math.random() * 3);
    return option[ranIndex];
};
const userscorepara =document.querySelector("#userscore")
const compscorepara =document.querySelector("#compscore")

const draw = () => {
    console.log("Game was Draw");
    msg.innerText =`It's a Draw `
    msg.style.backgroundColor="#081b31"
};

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++
        userscorepara.innerText=userscore;
        console.log("You Win");
        msg.innerText =`You Win!, Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose");
        msg.innerText =`You Lose,${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor="red"
    }
};

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    // Generate computer choice
    const compchoice = gencompchoice();
    console.log("Comp choice =", compchoice);

    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice); 
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userchoice);
        playgame(userchoice);
    });
});
