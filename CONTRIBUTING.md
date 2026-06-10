# Contributing to SnapEats

Thank you for your interest in contributing to SnapEats! This document provides guidelines for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/SnapEats.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Install dependencies: `npm install`

## Development Setup

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your configuration
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Code Style

- Use ES6+ syntax
- Follow airbnb style guide
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

## Commit Guidelines

- Use descriptive commit messages
- Start with verb: `Add`, `Fix`, `Update`, `Remove`
- Example: `Add restaurant filtering feature`

## Pull Request Process

1. Ensure all tests pass
2. Update documentation if needed
3. Provide a clear description of changes
4. Link any related issues
5. Request review from maintainers

## Reporting Bugs

- Use GitHub Issues
- Provide detailed description
- Include steps to reproduce
- Attach screenshots if applicable

## Feature Requests

- Use GitHub Discussions
- Explain use case
- Suggest implementation approach

## Questions?

Reach out on GitHub Issues or Discussions.
