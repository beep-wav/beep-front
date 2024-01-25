import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import  useRtc from './rtc';

describe('useRtc', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useRtc());

    // expect(result.current.count).toBe(0);

    act(() => {
      // result.current.increment()
    });

      // expect(result.current.count).toBe(1);
    });
});