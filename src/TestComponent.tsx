import React from 'react';

const TestComponent: React.FC = () => {
  console.log('TestComponent rendering');
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'lightblue' }}>
      <h1>Test Component Works!</h1>
      <p>If you can see this, React is working properly.</p>
    </div>
  );
};

export default TestComponent;