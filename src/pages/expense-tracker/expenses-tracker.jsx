// This page is for calculation expenses page
import { useState } from "react";
import '../../style.css'


export const ExpensesTracker = ({onLogout}) => {
  // State Declarations
  // (1) `transaction`: An array that will hold all expense objects
  //                 we set it as an empthy array
  const [transactions, setTransactions] = useState([]); // {description: string, amount: string, type: 'expense' | 'income'}
  // (2) `expense`: An object represeting a single expense with an `amount` & `description`
  //                it is an object
  const [transaction, setTransaction] = useState({
    amount: 0,
    description: "",
    date: ""
  });
  // (3) `amount` A number represeting the total amount of all transaction
  const [amount, setAmount] = useState(0);

  const [incomeAmount, setincomeAmount] = useState(0);

  const addTransaction = (e) => {
    // Prevents the default form submission behavior
    e.preventDefault();
    // `...transaction` takes all the element from the `transaction` array (which is currently empthy)
    //  and includes them in the new array
    // Then, `expense` is added to this new array
    const missingValues = !transaction.description || !transaction.amount || !transaction.date
    if (missingValues) {
        alert('You are missing information')
        return
    }

    setTransactions([...transactions, { ...transaction, type: selectedValue }]);
    setTransaction({
      amount: 0,
      description: "",
      date: "",
      type: selectedValue,
    });
    // Updates the total `amount` by adding the current expense's amount
    // If selected income add to income
    if (selectedValue === "income") {
      setincomeAmount(incomeAmount + +transaction.amount);
    } else {
      setAmount(amount + +transaction.amount);
    }

  };

  const [selectedValue, setSelectedValue] = useState("expense");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const LoggedOut = () => {
    onLogout('auth') 
  }

  // What it will return
  // We have header `Expense Tracker - for` then we replace it with the name you signed it up
  return (
      <div className="expense-tracker">
        <div className="container">
          <h1 className="header-tracker">Expenses Tracker - For "{localStorage.getItem("username")}"</h1>
          
          <button onClick={LoggedOut} className="logout-icon">
          Log Out 
          </button>
          
          <div className="balance">
            <h2 className="explain">Your Balance:
            <span className="balance-amount">${incomeAmount - amount}.00</span></h2>
          </div>

            <div className="incomes">
              <h3 className="explain">Incomes:
              <span className="balance-amount">${incomeAmount}.00</span></h3>
          </div>

          <div className="expenses">
            <h3 className="explain">Expenses:
            <span className="balance-amount">${amount}.00</span></h3>
          </div>

          <form className="add-transaction">
            <input
                type="date"
                placeholder="Date"
                onChange={(e) => {
                    setTransaction({...transaction, date: e.target.value});
                }}
                value={transaction.date}
                className="dateform"
            />
            
            <input
              type="text"
              placeholder="Descriptions"
              onChange={(e) => {
                setTransaction({ ...transaction, description: e.target.value });
              }}
              required
              value={transaction.description}
              className="scriptform"
            />

            <input
              type="number"
              placeholder="Amount"
              required
              onChange={(e) => {
                setTransaction({ ...transaction, amount: e.target.value });
              }}
              value={transaction.amount}
              className="amountform"
            />
        </form>

        <form className="radio-section">
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={selectedValue === "expense"}
              onChange={() => handleRadioChange("expense")}
              className="expense-chooseform"
            />
            <label htmlFor="expense">Expense</label>
            
            
            <input
              type="radio"
              id="income"
              value="income"
              checked={selectedValue === "income"}
              onChange={() => handleRadioChange("income")}
              className="income-chooseform"
            />
            <label htmlFor="income">Income</label>
            </form>


            <button type="submit" onClick={addTransaction} className="btn-add">
              Add Transaction
            </button>
    
     
          <div>
            <h3 className="trans">Transactions</h3>
          </div>
        

          <div className="table-wrapper">
            <table class="table">
            <tr>
                <th class="hide-on-mobile" style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>DATE</th>
                <th style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>DESCRIPTIONS</th>
                <th class="hide-on-mobile"style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>TYPE</th>
                <th style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>AMOUNT</th>
            </tr>
              <tbody>
                {transactions.map((e) => {
                  return (
                    <tr key={e.description}>
                        <td  style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}} >{e.date}</td>
                        <td  style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>{e.description}</td>
                        <td style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>{e.type}</td>
                        <td style={{ padding: '10px 20px', fontSize: '10px', textAlign: 'center'}}>
                            {e.type === "income" ? (
                            <span>${e.amount}</span>
                            ) : (
                            <span>-${e.amount}</span>
                            )}
                        </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};
