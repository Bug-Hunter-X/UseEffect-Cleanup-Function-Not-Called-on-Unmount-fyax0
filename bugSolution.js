```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let isCurrent = true;
    setIsMounted(true);
    const intervalId = setInterval(() => {
      if (!isCurrent) return;
      console.log('Component mounted');
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Component unmounted');
      isCurrent = false;  
      setIsMounted(false);
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>isMounted: {isMounted.toString()}</p>
    </div>
  );
}
export default MyComponent; 
```