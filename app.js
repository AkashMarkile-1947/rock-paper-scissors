const blocks = document.querySelectorAll('.block');
const choiceContainer = document.querySelector('.initial-screen');
const ResultContainer = document.querySelector('.result-screen');
let userChoice;
let pcChoice;
let result;
const choose = (choice) => {
    userChoice = choice;
    choiceContainer.classList.add("hide");
    pcChoice = computerChoice();
    result = calculateResult();
    showResult();
}
const changeBg = () => {
    const colors = ["red", "green", "yellow"];
}
const computerChoice = () => {
    let random = Math.floor(Math.random() * 4);
    switch(random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}
const calculateResult = () => {
    if (userChoice === "rock" && pcChoice === "rock") {
        return "Result Tied!"
    }
    if (userChoice === "paper" && pcChoice === "paper") {
        return "Result Tied!"
    }
    if (userChoice === "scissors" && pcChoice === "scissors") {
        return "Result Tied!"
    }
    if (userChoice === "rock" && pcChoice === "paper") {
        return "You Lost :("
    }
    if (userChoice === "paper" && pcChoice === "scissors") {
        return "You Lost :("
    }
    if (userChoice === "scissors" && pcChoice === "rock") {
        return "You Lost :("
    }
    if (userChoice === "rock" && pcChoice === "scissors") {
        return "You Won!"
    }
    if (userChoice === "paper" && pcChoice === "rock") {
        return "You Won!"
    }
    if (userChoice === "scissors" && pcChoice === "paper") {
        return "You Won!"
    }
}
const resultObj = {
    'rock': "&#129704;",
    'paper': "&#128220;",
    'scissors': "&#9986;&#65039;"
}
const showResult = () => {
    const pcChoiceBlock = document.createElement("div");
    pcChoiceBlock.setAttribute("class", `block ${pcChoice}`);
    const pcChoiceEmoji = document.createElement("span");
    pcChoiceEmoji.innerHTML = resultObj[pcChoice]; 
    console.log(pcChoiceBlock);
    pcChoiceBlock.innerText = pcChoice;
    const userChoiceBlock = document.createElement("div");
    userChoiceBlock.setAttribute("class", `block ${userChoice}`);
    const userChoiceEmoji = document.createElement("span");
    userChoiceEmoji.innerHTML = resultObj[userChoice];
    console.log(userChoiceEmoji);
    userChoiceBlock.innerText = userChoice;
    userChoiceBlock.appendChild(userChoiceEmoji);
    pcChoiceBlock.appendChild(pcChoiceEmoji);
    const resultHeading = document.createElement("h2");
    resultHeading.innerText = result;
    if (result === "You Won!") {
        userChoiceBlock.classList.add("won-bg");
        pcChoiceBlock.classList.add("lost-bg");
        resultHeading.classList.add( "won");
    }
    if (result === "You Lost :(") {
        userChoiceBlock.classList.add("lost-bg");
        pcChoiceBlock.classList.add("won-bg");
        resultHeading.classList.add("lost");
    }
    if (result === "Result Tied!") {
        userChoiceBlock.classList.add("tied-bg");
        pcChoiceBlock.classList.add("tied-bg");
        resultHeading.classList.add("tied");
    }
    ResultContainer.appendChild(userChoiceBlock);
    ResultContainer.appendChild(resultHeading);
    ResultContainer.appendChild(pcChoiceBlock);
    ResultContainer.classList.remove("hide");
    ResultContainer.classList.add("wrapper");
}