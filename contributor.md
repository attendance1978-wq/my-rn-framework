Contributor Guide

Welcome Contributors! 👋

Thank you for your interest in contributing to my-rn-framework! This guide will help you get started with contributing to our React Native CLI framework.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Contributions](#making-contributions)
- [Pull Request Process](#pull-request-process)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

Please read and follow our Code of Conduct. We are committed to providing a friendly, safe, and welcoming environment for all.

## Getting Started

### Prerequisites

- Node.js (>= 16.0.0)
- npm (>= 8.0.0) or yarn (>= 1.22.0)
- Git

### First-Time Setup

#### Fork the Repository

```bash
# Click the 'Fork' button on GitHub
# Clone your fork
git clone https://github.com/attendance1978-wq/my-rn-framework.git
cd my-rn-framework
```

#### Set Upstream Remote

```bash
git remote add upstream https://github.com/attendance1978-wq/my-rn-framework.git
```

#### Install Dependencies

```bash
npm install
```

#### Link CLI Locally

```bash
npm link
```

## Development Setup

### Development Workflow

#### Sync with Upstream

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

#### Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

#### Make Your Changes

#### Test Your Changes

```bash
# Test CLI functionality
npm run test:cli

# Test template creation
npm run test:template
```

#### Commit Your Changes

```bash
git add .
git commit -m "type(scope): brief description"
```

### Available Scripts

| Script              | Description                  |
|---------------------|------------------------------|
| npm test            | Run test suite               |
| npm run test:cli    | Test CLI functionality       |
| npm run test:template | Test template generation     |
| npm run lint        | Run ESLint                   |
| npm run lint:fix    | Fix linting errors           |
| npm run build       | Build for production         |
| npm run docs        | Generate documentation       |
## Project Structure

```text
my-rn-framework/
├── bin/                    # CLI entry point
│   └── create-myrnapp.js
├── template/              # Project template
│   ├── components/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── config/
│   ├── types/            # TypeScript declarations
│   └── *.config.js       # Configuration files
├── scripts/              # Build and test scripts
├── tests/               # Test files
├── docs/               # Documentation
└── examples/           # Example projects
```

## Making Contributions

### Types of Contributions We Welcome

#### Bug Fixes

- Fix bugs in CLI functionality
- Fix template issues
- Fix documentation errors

#### Feature Additions

- New CLI options
- Additional template features
- Improved error handling
- Enhanced user experience

#### Documentation

- Improve README
- Add examples
- Create tutorials
- Translate documentation

#### Tests

- Add unit tests
- Add integration tests
- Improve test coverage

### Finding Issues to Work On

- **Good First Issues**: Look for issues labeled `good first issue`
- **Help Wanted**: Issues labeled `help wanted`
- **Bugs**: Issues labeled `bug`
- **Enhancements**: Issues labeled `enhancement`

## Pull Request Process

### Before Submitting a PR

- Ensure tests pass

  ```bash
  npm test
  ```

- Update documentation if needed
- Add tests for new functionality
- Follow commit message conventions

### Creating a Pull Request

- Push to your fork

  ```bash
  git push origin feature/your-feature-name
  ```

- Create PR on GitHub
- Go to your fork on GitHub
- Click "Compare & pull request"
- Fill in the PR template

### PR Title Format

```text
type(scope): Brief description
```

**Examples:**
- feat(cli): Add --typescript flag
- fix(template): Fix navigation setup
- docs(readme): Update installation instructions

### PR Review Process

#### Automated Checks

- Tests must pass
- Code must pass linting
- No merge conflicts

#### Maintainer Review

- At least one maintainer will review
- Address review comments promptly
- Make requested changes

#### Merge

- PR will be merged when approved
- Squash merge is preferred for single-commit PRs

Development Guidelines
Code Style
We use ESLint and Prettier. Run these before committing:

```bash
npm run lint
npm run lint:fix
```
JavaScript/TypeScript Guidelines
Use meaningful variable names

Add JSDoc comments for complex functions

Follow existing patterns in the codebase

Keep functions focused and small

Handle errors appropriately

Template Guidelines
Keep templates minimal and focused

Follow React Native best practices

Include comprehensive comments

Ensure backward compatibility

Commit Message Convention
We follow Conventional Commits.

Format: type(scope): description

Types:

feat: New feature

fix: Bug fix

docs: Documentation changes

style: Code style changes (formatting, etc.)

refactor: Code refactoring

test: Adding or fixing tests

chore: Maintenance tasks

Examples:

```text
feat(cli): add --expo flag for Expo projects
fix(template): resolve navigation import error
docs(readme): add contributor guidelines
test(cli): add unit tests for argument parsing
```
CLI Development Guidelines
User Experience

Provide clear error messages

Include helpful usage information

Use colors and formatting for better UX

Support both interactive and non-interactive modes

Error Handling

Validate user input

Handle edge cases

Provide recovery suggestions

Testing

Test all CLI options

Mock file system operations

Test error scenarios

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run CLI tests
npm run test:cli

# Run template tests
npm run test:template

# Run with coverage
npm run test:coverage
```

### Writing Tests

- Unit Tests for individual functions
- Integration Tests for CLI operations
- Snapshot Tests for template output

**Example Test:**

```javascript
describe('create-myrnapp CLI', () => {
  test('should create project with correct name', async () => {
    const result = await runCLI(['TestProject']);
    expect(result.exitCode).toBe(0);
    expect(fs.existsSync('TestProject')).toBe(true);
  });
});
```

## Documentation

### Updating Documentation

- README.md: Main project documentation
- CONTRIBUTING.md: This file
- CODE_OF_CONDUCT.md: Community guidelines
- /docs/: Additional documentation
- JSDoc Comments: Code documentation

### Documentation Standards

- Use clear, concise language
- Include code examples
- Keep up-to-date with code changes
- Use proper Markdown formatting

## Community

### Getting Help

#### Check Existing Resources

- README.md
- Issues and Discussions
- Example projects

#### Ask Questions

- Create a GitHub Discussion
- Open an Issue for bugs
- Join our community chat (if available)

### Staying Updated

- Watch the repository on GitHub
- Join our mailing list (if available)
- Follow project announcements

### Recognizing Contributions

We recognize all contributions through:

- Contributor list in README
- GitHub contributor graph
- Special thanks in release notes

### Release Process

#### Versioning

We follow Semantic Versioning:

- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes

#### Release Checklist

- Update version in package.json
- Update CHANGELOG.md
- Run all tests
- Create release on GitHub
- Publish to npm registry

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

## Acknowledgments

Thank you to all our contributors! Your help makes this project better for everyone.

## Need Help?

- Open an Issue
- Start a Discussion
- Contact maintainers: [attendance1978@gmail.com]

Happy Contributing! 🚀
