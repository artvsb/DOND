const startButton = document.querySelector(".start-button");
const body = document.getElementById("body");
leftSideValues = [".01", "1", "5", "10", "25", "50", "75", "100", "200", "300", "400", "500", "750"];
rightSideValues = ["1,000", "5,000", "10,000", "25,000", "50,000", "75,000", "100,000", "200,000", 
    "300,000", "400,000", "500,000", "750,000", "1,000,000"];

function startGame() {
    const leftSideBar = document.createElement("div");
    ulLeftSide = document.createElement("ul");
    
    leftSideBar.classList.add("side-values");
    leftSideValues.forEach((value) => {
        
    })
}

startButton.addEventListener("click", (evento) => {
    evento.preventDefault();

})