//income inputs
const incomeSalary = document.querySelector('#income-salary'),
    incomeFreelance = document.querySelector('#income-freelance'),
    incomeExtra1 = document.querySelector('#income-extra-1'),
    incomeExtra2 = document.querySelector('#income-extra-2');


//costs inputs
const costsFlat = document.querySelector('#costs-flat'),
    costsHouseServices = document.querySelector('#costs-house-services'),
    costsTransport = document.querySelector('#costs-transport'),
    costsCredit = document.querySelector("#costs-credit");

//total inputs
const totalMonthInput = document.querySelector('#total-month'),
    totalDayInput = document.querySelector('#total-day'),
    totalYearInput = document.querySelector('#total-year');

let totalMonth, totalDay, totalYear;

//money
const monyeBoxRange = document.querySelector('#money-box-range'),
    accumulationInput = document.querySelector('#accumulation'),
    spendInput = document.querySelector('#spend'),
    totalPrecentEl = document.querySelector('#total-precents')

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');

for (input of inputs) {
    input.addEventListener('input', () => {
        countingAvaibleMoney();
    })
}

monyeBoxRange.addEventListener('input', e => {

    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPrecents()
})

const strToNum = str => str.value ? parseInt(str.value) : 0;

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed(1);
    accumulationInput.value = accumulation;
    spendInput.value = totalMonth - accumulation;
    totalDay = (spendInput.value / 30).toFixed(1);
    totalDayInput.value = totalDay;
    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}
const countingAvaibleMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);
    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;

}
const disabledRange = function() {
    if (totalMonth == undefined) {
        monyeBoxRange.disabled = true;
    } else {
        monyeBoxRange.disabled = true;
    }
}