import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

test('Dashboard renders correctly', () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );

  // Check if the main heading is present
  const mainHeading = screen.getByRole('heading', { name: /Welcome to the Dashboard!/i });
  expect(mainHeading).toBeInTheDocument();

  // Check if "Add Budgets" button is present and links to "/configure-budgets"
  const addBudgetsButton = screen.getByRole('button', { name: /Add Budgets/i });
  expect(addBudgetsButton).toBeInTheDocument();
  expect(addBudgetsButton.closest('a')).toHaveAttribute('href', '/configure-budgets');

  // Check if "Add Expenses" button is present and links to "/add-expense"
  const addExpensesButton = screen.getByRole('button', { name: /Add Expenses/i });
  expect(addExpensesButton).toBeInTheDocument();
  expect(addExpensesButton.closest('a')).toHaveAttribute('href', '/add-expense');
});
