import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';

// Needed by react-textarea-autosize
beforeAll(() => {
  // Unfortunately, JSDom does not implement document.fonts yet
  // so we're mocking it
  Object.defineProperty(document, 'fonts', {
    value: { addEventListener() {}, removeEventListener() {} },
  });
});

afterEach(cleanup);
