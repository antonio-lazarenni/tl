import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Text, ThemeProvider } from 'theme-ui';

import theme from '../../../theme';
import ColorModeSwitcher from '../index';

describe('ColorModeSwitcher', () => {
  it('renders button', () => {
    render(
      <ThemeProvider theme={theme}>
        <ColorModeSwitcher />
      </ThemeProvider>
    );
    expect(screen.getByRole('button', { name: 'Toggle Dark' })).toBeInTheDocument();
  });

  it('button changes label after click', () => {
    render(
      <ThemeProvider theme={theme}>
        <ColorModeSwitcher />
        <Text sx={{ color: 'primary' }}>deburger</Text>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle dark/i });
    const text = screen.getByText('deburger');

    expect(button.textContent).toBe('Toggle Dark');

    userEvent.click(button);

    expect(button.textContent).toBe('Toggle Light');

    expect(text).toHaveStyle(`color: ${theme.colors.primary}`);
  });
});
