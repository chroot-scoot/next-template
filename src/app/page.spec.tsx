import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Root Page', () => {
  test('has heading', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Home' })
    ).toBeDefined();
  });
});
