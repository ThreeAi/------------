document.addEventListener("DOMContentLoaded", function () {
    // Всплывающее окно
    const response = confirm("Приступаем?");
    if (response) {
        alert("Жизнь продолжается, и мы должны двигаться дальше");
        const distanceInput = prompt("Введите дистанцию (в километрах):");
        if (distanceInput !== null) {
            var distance = parseFloat(distanceInput);
        }
    } else {
        alert("Даже камень движется дальше");
        displaySmiley("😢");
        const negativeAnswer = document.createElement("p");
        negativeAnswer.textContent = "Расчет невозможен";
        document.body.appendChild(negativeAnswer);
    }

    // Обработчик изменения ползунка
    const fuelRange = document.getElementById("fuelRange");
    const fuelLabel = document.getElementById("fuelLabel");
    fuelRange.addEventListener("input", function () {
        const fuel = fuelRange.value;
        fuelLabel.textContent = `Количество бензина: ${fuel} л`;
    });

    // Расход бензина
    const motorcycleFuelConsumption = 5;
    const carFuelConsumption = 10;

    // Обработчики для кнопок
    const motorcycleButton = document.getElementById("motorcycleButton");
    motorcycleButton.addEventListener("click", function () {
        const fuel = parseFloat(fuelRange.value);
        if (fuel >= distance / 100 * motorcycleFuelConsumption) { 
            displaySmiley("😊");
        } else {
            displaySmiley("😢");
        }
    });

    const carButton = document.getElementById("carButton");
    carButton.addEventListener("click", function () {
        const fuel = parseFloat(fuelRange.value);
        if (fuel >= distance / 100 * carFuelConsumption) {
            displaySmiley("😊");
        } else {
            displaySmiley("😢");
        }
    });

    // Отображение смайлика
    function displaySmiley(smile) {
        const smileyElement = document.getElementById("smile");
        smileyElement.textContent = smile;
    }
});
