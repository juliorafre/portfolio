// src/components/common/error-test-component.tsx
'use client';

import { useEffect, useState } from 'react';

const ErrorTestComponent = ({ throwOnInit = false }) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    if (throwOnInit) {
      throw new Error('Test error on component mount!');
    }
  }, [throwOnInit]);

  if (shouldThrow) {
    throw new Error('Test error on button click!');
  }

  return (
    <div>
      <h3>Error Testing Component</h3>
      <p>This component is used to test the ErrorBoundary.</p>
      <button
        onClick={() => setShouldThrow(true)}
        style={{ border: '1px solid red', padding: '5px', margin: '5px' }}
        type="button"
      >
        Click to Throw Error
      </button>
      {!throwOnInit && (
        <p>
          Alternatively, you can make it throw on mount by passing the
          `throwOnInit` prop.
        </p>
      )}
    </div>
  );
};

export default ErrorTestComponent;
