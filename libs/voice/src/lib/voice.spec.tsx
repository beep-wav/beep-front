import { render } from '@testing-library/react';

import Voice from './voice';

describe('Voice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Voice />);
    expect(baseElement).toBeTruthy();
  });
});
