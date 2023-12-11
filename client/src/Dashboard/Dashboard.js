import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <main className="center" id="main" aria-label="main">
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <Link to="/configure-budgets">
        <button style={{marginRight:'20px'}}>Add Budgets</button>
      </Link>
      <Link to="/add-expense">
        <button>Add Expenses</button>
      </Link>
    </div>
    </main>
  );
}

export default Dashboard;
