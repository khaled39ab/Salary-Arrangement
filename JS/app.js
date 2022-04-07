function getInputValue() {
    const income = document.getElementById("income-field").value;
    const foodCost = document.getElementById("food-cost").value;
    const rentCost = document.getElementById("rent-cost").value;
    const clothesCost = document.getElementById("clothes-cost").value;
    const save = document.getElementById("save-field").value;
    const incomeAmount = document.getElementById("income-amount");

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
document.getElementById("calculate-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const incomeError = document.getElementById("income-error");
    const displayExpenses = document.getElementById("total-expenses");
    const displayBalance = document.getElementById("balance");

    const income = getInputValue().income;

    if(income<0 || income === '' ){
        incomeError.innerHTML = `<p style = "color:red" >Number must be positive or no Empty</p>`
    }else{
            incomeError.innerHTML = `<p style = > </p>`
        const foodCost = getInputValue().foodCost >0 ?  getInputValue().foodCost : 0;
        const rentCost = getInputValue().rentCost >0 ?  getInputValue().rentCost : 0;
        const clothesCost = getInputValue().clothesCost >0 ? getInputValue().clothesCost : 0;
        const incomeAmount = getInputValue().incomeAmount;
        
        const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
        const balance = parseFloat(income) - totalExpenses;
        if(balance < 0){
            alert("Expenses is more than income")
        }else{
            displayExpenses.innerText = totalExpenses;
            displayBalance.innerText = balance;
            incomeAmount.innerText = income;
            clearValue();
        }


    }

});

//----------------------      Save Button event handler   -----------------------
document.getElementById("save-btn").addEventListener("click", function () {
    const save = getInputValue().save;
    const incomeAmount = getInputValue().incomeAmount;

    //-----------------          saving amount         -------------------
    const income = incomeAmount.innerText;
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