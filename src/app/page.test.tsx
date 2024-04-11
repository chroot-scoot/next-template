import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('root Page', () => {
  it('has heading', () => {
    render(<Page />);
    expect.hasAssertions();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Home' })
    ).toBeDefined();
  });
});
