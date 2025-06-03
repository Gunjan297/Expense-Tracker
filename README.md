# Expense Tracker

A simple web-based **Expense Tracker** built using **HTML**, **CSS**, and **JavaScript**. It allows users to add, view, and delete their daily expenses. The total expenditure is automatically calculated and displayed. All data is stored in the browser's **Local Storage**, ensuring persistence across page reloads.

---

## Features

- Add new expenses with a name and amount  
- View all listed expenses in real-time  
- Delete any expense entry  
- Automatically calculate and display the total expenses  
- Data persistence using `localStorage`

---

## Technologies Used

- **HTML**
- **CSS** *(optional styling)*
- **JavaScript (Vanilla)**
- **Local Storage API**

---

## Getting Started

**1. Clone the Repository**

**2. Open the Project**
Open index.html in your preferred browser.

**How to Use**
Enter the expense name (e.g., "Groceries", "Rent").
Enter the expense amount (positive number).
Click "Add" to submit.
See the item added in the list with a Delete button.
Click "Delete" to remove an entry.
View the total expense below the list.

---

## Example Data Structure
Each expense is stored in localStorage like this:
[
  { "id": 1717438509123, "name": "Groceries", "amount": 120.50 },
  { "id": 1717438513045, "name": "Transport", "amount": 40.00 }
]

