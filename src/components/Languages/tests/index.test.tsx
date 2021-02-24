import { render, screen, waitFor, getByText } from '../../../../testUtils/test-utils';
import userEvent from '@testing-library/user-event';

import Languages from '../index';
import { Language } from '../../../api';

const langs: Language[] = [
  {
    language_id: 1,
    language_iso: 'en',
    progress: 0,
    words_to_do: 42
  }
];

describe('Languages', () => {
  it('renders button', () => {
    render(<Languages langs={langs} />);
    expect(screen.getByRole('button', { name: /add language/i })).toBeInTheDocument();
  });

  it('button changes label after click', async () => {
    render(<Languages langs={langs} />);

    const button = screen.getByRole('button', { name: /add language/i });

    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });
});
