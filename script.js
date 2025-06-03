document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  renderExpenses();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expenses.push(newExpense);
      savetolocalstorage();
      renderExpenses();
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderExpenses(){
    expenseList.innerText="";
    expenses.forEach(expense => {
      const liEle=document.createElement('li');
      liEle.innerHTML = `
      <span>${expense.name} - $${expense.amount}</span>
      <button data-id="${expense.id}">Delete</button>`;

      expenseList.appendChild(liEle);     
    });
    updateTotal();
  }

  expenseList.addEventListener('click',(event)=>{
    if(event.target.tagName==='BUTTON'){
      const expenseID=parseInt(event.target.getAttribute("data-id"));

      expenses=expenses.filter(p => p.id !== expenseID);
      savetolocalstorage();
      renderExpenses();
    }
  })

  function savetolocalstorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function updateTotal() {
    let totalAmount = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }
});
