import { render, screen } from '../../../../testUtils/test-utils';
import userEvent from '@testing-library/user-event';
import ColorModeSwitcher from '../index';

describe('ColorModeSwitcher', () => {
  it('renders button', () => {
    render(<ColorModeSwitcher />);
    expect(screen.getByRole('button', { name: '🌚' })).toBeInTheDocument();
  });

  it('button changes label after click', () => {
    render(<ColorModeSwitcher />);

    const button = screen.getByRole('button', { name: '🌚' });

    expect(button.textContent).toBe('🌚');

    userEvent.click(button);

    expect(button.textContent).toBe('🌞');
  });
});
