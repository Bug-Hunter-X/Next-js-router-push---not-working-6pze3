```javascript
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function MyComponent() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      router.push('/another-page');
    }
  }, [redirect, router]);

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```