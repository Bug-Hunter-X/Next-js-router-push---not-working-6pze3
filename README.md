# Next.js router.push() Not Working

This repository demonstrates a common issue with Next.js's `router.push()` method where the redirection doesn't occur as expected. The problem occurs when the `router.push()` is called within a component that doesn't re-render after a state update or outside of a lifecycle method that causes a rerender.  The solution involves ensuring the component re-renders after calling `router.push()`. 

## Bug
The provided `bug.js` file contains a simple component that uses `router.push()` to navigate to another page. However, this code might not function correctly in certain scenarios. The provided example is in a simple component that only renders once.