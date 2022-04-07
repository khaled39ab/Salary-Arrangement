// function getInput(){
    
// }
//-----------------  Calculate Button -------------------------
document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = document.getElementById("income-field").value;
    // document.getElementById("income-field").value = "";
    const foodCost = document.getElementById("food-cost").value;
    document.getElementById("food-cost").value = "";
    const rentCost = document.getElementById("rent-cost").value;
    document.getElementById("rent-cost").value = "";
    const clothesCost = document.getElementById("clothes-cost").value;
    document.getElementById("clothes-cost").value = "";
    
    if(income == "" || foodCost == "" || rentCost == "" || clothesCost == "" && income < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0){
        alert("Wrong Input")
    }
    else{
        const displayExpenses = document.getElementById("total-expenses");
        const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

        const displayBalance = document.getElementById("balance");
        const balance = parseFloat(income) - totalExpenses;
        
        if(balance < 0){
            alert("Expenses is more than income")
        }
        else{
            displayExpenses.innerText = totalExpenses;
            displayBalance.innerText = balance;
        }
    }
});

//----------------------      Save Button    -----------------------
document.getElementById("save-btn").addEventListener("click", function(){
    const income = document.getElementById("income-field").value;
    // document.getElementById("income-field").value = "";

    const save = document.getElementById("save-field").value;
    // document.getElementById("save-field").value = "";

    const saving = income / save;
    const savingAmount = document.getElementById("saving-amount");
    savingAmount.innerText = saving;
});