# AGENTS.md - Coding Guidelines for Cleaning Company Website

This document provides guidelines for agents working on this Astro-based website for a Swedish cleaning company. Follow these rules to maintain consistency, quality, and best practices.

## Build, Lint, and Test Commands

### Build Commands
- **Development server**: `npm run dev` - Starts the development server with hot reloading.
- **Production build**: `npm run build` - Builds the site for production deployment.
- **Preview build**: `npm run preview` - Previews the production build locally.
- **Astro CLI**: `npm run astro` - Access Astro CLI commands.

### Lint Commands
Currently, no linting tools are configured. To add linting:
1. Install dependencies: `npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-astro prettier`
2. Add script to package.json: `"lint": "eslint . --ext .js,.jsx,.ts,.tsx,.astro"`
3. Run lint: `npm run lint`

For type checking: `npx astro check` - Checks TypeScript types in Astro files.

### Test Commands
No testing framework is currently set up. Recommended setup with Vitest for unit tests:
1. Install: `npm install --save-dev vitest @testing-library/jest-dom @testing-library/react @astrojs/react`
2. Add scripts to package.json:
   - `"test": "vitest"`
   - `"test:ui": "vitest --ui"`
   - `"test:run": "vitest run"`
3. For integration/e2e tests, consider Playwright:
   - Install: `npm install --save-dev @playwright/test`
   - Scripts: `"test:e2e": "playwright test"`

**Running a single test**:
- Unit test: `npm run test -- src/components/Button.test.ts`
- E2E test: `npx playwright test tests/contact-form.spec.ts`

## Code Style Guidelines

### General Principles
- Write clean, readable, and maintainable code.
- Prioritize TypeScript for type safety.
- Follow DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid) principles.
- Use descriptive names for variables, functions, and files.
- Keep functions small and focused on a single responsibility.

### File Structure
- **src/pages/**: Route components (e.g., index.astro, contact.astro)
- **src/components/**: Reusable components
- **src/layouts/**: Page layouts
- **src/styles/**: Global styles
- **public/**: Static assets (images, favicon)
- Use kebab-case for file names (e.g., contact-form.astro)

### TypeScript and Typing
- Use strict TypeScript configuration (as per tsconfig.json extending astro/tsconfigs/strict).
- Define interfaces/types for complex objects.
- Avoid `any` type; use `unknown` if necessary.
- Use union types for multiple possible values.
- Example:
  ```typescript
  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  ```

### Imports and Modules
- Use ES6 imports/exports.
- Prefer absolute imports with baseUrl set to "src/" (add to tsconfig.json if not present).
- Group imports: standard library, third-party, local components/utilities.
- Example:
  ```typescript
  import { useState } from 'react';
  import { Button } from '@/components/Button';
  import { apiCall } from '@/utils/api';
  ```

### Naming Conventions
- **Variables/Functions**: camelCase (e.g., `contactFormData`, `handleSubmit`)
- **Components**: PascalCase (e.g., `ContactForm`, `LandingPage`)
- **Files**: kebab-case (e.g., `contact-form.astro`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Interfaces/Types**: PascalCase with "I" prefix or suffix (e.g., `IUserData`, `UserData`)
- **Enums**: PascalCase (e.g., `FormStatus`)

### Formatting
- Use Prettier for consistent formatting.
- Install: `npm install --save-dev prettier`
- Add .prettierrc: `{ "semi": true, "singleQuote": true, "tabWidth": 2 }`
- Run: `npx prettier --write .`

### Components and Astro Files
- Use .astro for static content, .tsx for interactive components.
- Keep component logic minimal; extract to utilities.
- Use Astro's built-in slots for flexibility.
- Example component structure:
  ```astro
  ---
  const { title } = Astro.props;
  ---
  <div class="component">
    <h2>{title}</h2>
    <slot />
  </div>
  ```

### Styling
- Use scoped styles in Astro components with `<style>` tags.
- Prefer CSS variables for theming.
- Follow BEM methodology for class names (Block__Element--Modifier).
- Example: `.contact-form__input--error`

### Error Handling
- Use try/catch for asynchronous operations.
- Throw descriptive errors with context.
- Handle form validation errors gracefully.
- Example:
  ```typescript
  try {
    await submitForm(data);
  } catch (error) {
    console.error('Form submission failed:', error);
    // Show user-friendly message
  }
  ```

### Performance
- Optimize images and assets.
- Use lazy loading for non-critical components.
- Minimize bundle size by tree-shaking unused code.
- Use Astro's image optimization.

### Security
- Validate and sanitize user input.
- Use HTTPS for all external requests.
- Avoid storing sensitive data in client-side code.
- For forms: Implement server-side validation if needed.

### Accessibility
- Use semantic HTML.
- Add alt text to images.
- Ensure keyboard navigation.
- Test with screen readers.

### Git and Version Control
- Commit messages: "feat: add contact form" (use conventional commits).
- Branch naming: feature/contact-form, bugfix/form-validation.
- Pull requests: Describe changes and test them.

### Testing
- Write unit tests for utilities and components.
- Test user interactions with integration tests.
- Aim for >80% code coverage.
- Use descriptive test names.

### Documentation
- Add JSDoc comments for complex functions.
- Keep this AGENTS.md updated.
- Document API endpoints if any.

### Deployment
- Deploy to Netlify from GitHub.
- Use Netlify forms for contact form handling.
- Set up email notifications in Netlify dashboard.

### Tools and Extensions
- VS Code with Astro extension.
- TypeScript and Prettier extensions.
- Use the terminal for npm scripts.

Follow these guidelines to ensure the codebase remains high-quality and maintainable. If in doubt, refer to Astro documentation or ask for clarification.