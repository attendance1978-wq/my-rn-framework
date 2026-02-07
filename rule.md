# Project Rules and Guidelines

This document outlines the rules and guidelines for contributing to and maintaining the My RN Framework project.

## Code of Conduct

All contributors must adhere to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Development Guidelines

### 1. Code Style
- Follow the existing code style and formatting.
- Use ESLint and Prettier for consistent formatting.
- Run `npm run lint:fix` before committing changes.

### 2. Commit Messages
- Use clear, descriptive commit messages.
- Follow conventional commit format: `type(scope): description`

### 3. Pull Requests
- Create a feature branch for each new feature or bug fix.
- Ensure all tests pass before submitting a PR.
- Provide a clear description of the changes.

### 4. Testing
- Write unit tests for new features.
- Ensure existing tests still pass.
- Run `npm test` to execute tests.

### 5. Documentation
- Update documentation for any new features or changes.
- Keep README.md and other docs up to date.

## Project Structure Rules

- Place components in the `components/` directory.
- Add new screens to the appropriate subdirectory in `screens/`.
- Store utility functions in `utils/`.
- Add custom hooks to `hooks/`.

## Theming Rules

- Use the provided theming system for colors and styles.
- Avoid hardcoding colors; use `theme.colors` instead.
- Test components in both light and dark themes.

## Navigation Rules

- Use the pre-configured navigation stacks.
- Add new routes to the appropriate stack (AuthStack or MainStack).
- Follow the existing navigation patterns.

## State Management Rules

- Use Redux Toolkit for state management.
- Create new slices in `store/slices/`.
- Follow the existing state structure.

## API Integration Rules

- Use the provided API service in `services/api.js`.
- Handle authentication through the API interceptors.
- Follow RESTful API conventions.

## Security Guidelines

- Never commit sensitive information (API keys, passwords).
- Validate user inputs on both client and server side.
- Use HTTPS for all API communications.

## Performance Guidelines

- Optimize images and assets.
- Use FlatList for long lists with proper key props.
- Avoid unnecessary re-renders by using memoization when appropriate.

## Accessibility Guidelines

- Ensure components are accessible.
- Provide alt text for images.
- Use proper semantic elements.

## License

All contributions must comply with the MIT License.
