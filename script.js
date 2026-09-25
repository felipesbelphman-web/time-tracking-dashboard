
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => { 

    const timeframeButtons = document.querySelectorAll("[data-timeframe]");
    function updateCards(selectedTimeframe) {
    const previousLabel = {
    daily: "Yesterday - ",
    weekly: "Last Week - ",
    monthly: "Last Month - "
    }[selectedTimeframe];
    data.forEach((activity) => {
      
     const activityCard = document.querySelector(
    `[data-activity="${activity.title}"]`  
    );

    const previousElement = activityCard.querySelector(".previous-hours");

    previousElement.textContent =
    previousLabel + activity.timeframes[selectedTimeframe].previous + "hrs";

    const hoursEle = activityCard.querySelector(".current-hours");
    hoursEle.textContent = activity.timeframes[selectedTimeframe].current + "hrs";

        });
    }

    const cardsContainer = document.querySelector(".section-cards");

    timeframeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedTimeframe = button.dataset.timeframe;
        timeframeButtons.forEach((item) => {
            item.classList.remove("is-active");
        });
        button.classList.add("is-active");

        cardsContainer.classList.add("is-animating");
        updateCards(selectedTimeframe);
      });
    });
    cardsContainer.addEventListener("animationend", (event) => {
        if (event.target.parentElement === cardsContainer) {
            cardsContainer.classList.remove("is-animating");
        }
    });

    updateCards("daily");
    });
        

