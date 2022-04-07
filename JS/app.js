function getInputValue() {
    const income = document.getElementById("income-field").value;
    const foodCost = document.getElementById("food-cost").value;
    const rentCost = document.getElementById("rent-cost").value;
    const clothesCost = document.getElementById("clothes-cost").value;
    const save = document.getElementById("save-field").value;
    const incomeAmount = document.getElementById("income-amount").innerText;

    return { income, foodCost, rentCost, clothesCost, save, incomeAmount };
};

//clearing input data
function clearValue(){
    document.getElementById("income-field").value = "";
    document.getElementById("food-cost").value = "";
    document.getElementById("rent-cost").value = "";
    document.getElementById("clothes-cost").value = "";
    document.getElementById("save-field").value = "";
};

//--------------------    Calculate Button event handler   -------------------------
document.getElementById("calculate-btn").addEventListener("click", function () {
    const income = getInputValue().income;
    const foodCost = getInputValue().foodCost;
    const rentCost = getInputValue().rentCost;
    const clothesCost = getInputValue().clothesCost;


    const displayExpenses = document.getElementById("total-expenses");
    const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    const displayBalance = document.getElementById("balance");
    const balance = parseFloat(income) - totalExpenses;

    const incomeAmount = document.getElementById("income-amount");

    if (balance < 0) {
        alert("Expenses is more than income")
    }
    else {
        displayExpenses.innerText = totalExpenses;
        displayBalance.innerText = balance;
        incomeAmount.innerText = income;

       clearValue();
    }
});

//----------------------      Save Button event handler   -----------------------
document.getElementById("save-btn").addEventListener("click", function () {
    const save = getInputValue().save;
    const incomeAmount = getInputValue().incomeAmount;

    //-----------------          saving amount         -------------------
    const income = incomeAmount;
    const saving =  (save / 100) * income;
    const savingAmount = document.getElementById("saving-amount");
    savingAmount.innerText = saving;

    //------------------        remaining amount            ------------------
    const remain = document.getElementById("balance").innerText;
    const remainingAmount = remain - saving;
    const displayRemaining = document.getElementById("remaining-amount");
    displayRemaining.innerText = remainingAmount;

    clearValue();
});