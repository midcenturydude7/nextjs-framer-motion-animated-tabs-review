# Navigation Context Implementation Resources

## Project Overview
Implementation of shared state management between Navbar and MobileNav components using React Context in a Next.js application.

## Key Resources

### 1. React Context and Hooks
- [Official React Context Documentation](https://react.dev/learn/passing-data-deeply-with-context)
- [React useContext Hook Documentation](https://react.dev/reference/react/useContext)
- [React Custom Hooks Documentation](https://react.dev/learn/reusing-logic-with-custom-hooks)

### 2. Next.js Server/Client Components
- [Next.js Server Components Documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Next.js Client Components Documentation](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Understanding the "use client" Directive](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive)

### 3. State Management Patterns
- [Kent C. Dodds' "Application State Management with React"](https://kentcdodds.com/blog/application-state-management-with-react)
- [React State Management Guide](https://react.dev/learn/managing-state)

### 4. Additional Context Pattern Resources
- [React Context Best Practices](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Using TypeScript with Context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/)

## Implementation Patterns Used

1. Provider Pattern
   - Context provider component that encapsulates state
   - Provider wraps parts of app needing shared state access

2. Custom Hook Pattern
   - Custom hook (useNavContext) for context consumption
   - Error handling for context usage outside provider

3. Client/Server Component Separation
   - Context providers in client components
   - Server component benefits maintained in root layout

## Project Structure
- NavContext: Manages shared navigation state
- ClientLayout: Handles client-side wrapper functionality
- Navbar & MobileNav: Components consuming shared context

Created: 2025-04-19
