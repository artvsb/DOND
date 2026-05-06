const startButton = document.querySelector(".start-button");
const body = document.getElementById("body");
// let hasChosenCase = false;
const gameState = {
    hasChosenCase: false,
    playerCase: null
}
leftSideValues = [".01", "1", "5", "10", "25", "50", "75", "100", "200", "300", "400", "500", "750"];
rightSideValues = ["1,000", "5,000", "10,000", "25,000", "50,000", "75,000", "100,000", "200,000", 
    "300,000", "400,000", "500,000", "750,000", "1,000,000"];

function startGame() {
    assignValues();
    alert('Pick a case');
    setupCaseSelection();
}

startButton.addEventListener("click", (evento) => {
    evento.preventDefault();
    startGame();
})

function shuffle(array) {
    for(let i = array.lenght - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function setupCaseSelection() {
    const cases = document.querySelectorAll(".playable-case");

    cases.forEach((caseEl) => {
        caseEl.addEventListener("click", () => {
            handleCaseClick(caseEl);
        });
    });
    /* nesse funçao, o boolean hasChosenCase começa como false para que 
    quando eu escolher minha maleta, ele vire true e nao deixe mais escolher outra
    */
}

function chooseYourCase(caseEl) {
    gameState.hasChosenCase = true;
    gameState.playerCase = caseEl;
    const yourCase = document.querySelector(".your-case");
    const value = caseEl.dataset.value;
    console.log(`Value: ${value}`);
}

function handleCaseClick(caseEl) {
    
    if(!gameState.hasChosenCase) { 
        chooseYourCase(caseEl); 
    } else { 
        openCase(caseEl); 
    }
}

function assignValues() {
    const shuffledValues = shuffle([
        ...leftSideValues, 
        ...rightSideValues]);
    const cases = document.querySelectorAll(".playable-case");

    cases.forEach((caseEl, index) => {
        caseEl.dataset.value = shuffledValues[index];
    })
}
/* Essa função está pegando os valores embaralhados graças à função acima dessa
    shuffle() recebe um array, embaralha os valores do array e devolve um array
    com os elementos reorganizados aleatoriamente. 
    assignValues vai pegar todos os <li class='case'> e em cada um vai implantar
    um valor desse array.
*/

function openCase(caseEl) {
    if(caseEl === gameState.playerCase) return;
    const value = caseEl.dataset.value;
    console.log(`Opened: ${value}`);
}