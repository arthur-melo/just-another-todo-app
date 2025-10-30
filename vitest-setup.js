import { beforeAll, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import 'global-jsdom/register';

import { cleanup } from '@testing-library/react';

beforeAll(() => {
  // Needed by react-textarea-autosize
  // Unfortunately, JSDom does not implement document.fonts yet
  // so we're mocking it
  Object.defineProperty(document, 'fonts', {
    value: { addEventListener() {}, removeEventListener() {} },
  });
});

afterEach(cleanup);
