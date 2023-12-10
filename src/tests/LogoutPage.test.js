import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LogoutPage from './LogoutPage';

describe('LogoutPage Component', () => {
  it('should call onLogout when the logout button is clicked', () => {
    const onLogout = jest.fn();
    const { getByText } = render(<LogoutPage onLogout={onLogout} />);
    fireEvent.click(getByText('Logout'));
    expect(onLogout).toHaveBeenCalled();
  });
});
