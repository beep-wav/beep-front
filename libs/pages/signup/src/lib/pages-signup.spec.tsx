import { render } from '@testing-library/react';

import PagesSignup from './pages-signup';

describe('PagesSignup', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<PagesSignup />);
    expect(baseElement).toBeTruthy();
  });
  
});
