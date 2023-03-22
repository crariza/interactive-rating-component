const Chart = document.querySelector(".chart");
const thanksChart = document.querySelector(".thank-you");
const primaryButton = document.querySelector("#button");
const secondaryButton = document.querySelector("#button-again");
const scoreSelected = document.getElementById("score-selected");
const scores = document.querySelectorAll(".rate-buttons");
const scoresArray = [...scores];

primaryButton.addEventListener("click", submitRating);
secondaryButton.addEventListener("click", rateAgain);

function submitRating () {
    if (scoreSelected.innerHTML==="") {
        alert("Please select a rating before submitting");
    } else {
        Chart.classList.add("hidden");
        thanksChart.classList.remove("hidden");
    }
}

function rateAgain () {
    Chart.classList.remove("hidden");
    thanksChart.classList.add("hidden");
    scoreSelected.innerText = "";
}

scoresArray.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.innerHTML);
        scoreSelected.innerText = button.innerHTML;
    })
});






