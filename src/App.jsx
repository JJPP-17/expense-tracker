import React, { useState } from "react";
import { Auth } from "./pages/auth/index";
import { ExpensesTracker } from "./pages/expense-tracker/expenses-tracker";



const App = () => {
  const [currentPage, setCurrentPage] = useState("auth");


  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const loggedIn = localStorage.getItem('username') !== undefined && localStorage.getItem('username') !== 'undefined'&& localStorage.getItem('username') !== ''
  // Noted: the key 'username' is not undefined && the key 'username' is not the string 'undefined'

  const handleLoggedOut = () => {
    localStorage.setItem('username', '')
    localStorage.setItem('password', '')
    setCurrentPage('auth')
  }
  return (
    <div>
      <div>
        <button onClick={() => handleNavClick("auth")}>AUTH</button>
       {loggedIn && <button onClick={() => handleNavClick("expense")}>EXPENSE</button>}
      </div>
      {currentPage === "auth" && (
        <Auth onSignIn={() => setCurrentPage("expense")} />
      )}
      {currentPage === "expense" && <ExpensesTracker onLogout={() => handleLoggedOut()} />}
    </div>
  );
};

// There are 2 buttons for this page which are `auth` button & `expense` button
// These buttons have `onCLick` event handler that calls `handleNavClick` function
// There are conditional rendering statements based on
// (1) The value of `currentPage` is `auth`, it renderes the `Auth` component with an `onSignIn`
//     props set to a function that changes the `currentPage` state to `expense` : auth/index.jsx
//     -> When you sign in, it will set state to setCurrentPage('expense')
// (2) If `currentPage` is `expense`, it renders the `ExpenseTracker` component

export default App;
