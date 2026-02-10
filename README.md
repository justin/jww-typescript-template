# TypeScript Project Template

[![CI Status](https://github.com/justin/jww-typescript-template/actions/workflows/ci.yml/badge.svg)](https://github.com/justin/jww-typescript-template/actions/workflows/ci.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D24.13.1-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9%2B-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A modern TypeScript project template with comprehensive tooling for Node.js development.

## Features

- 🚀 **TypeScript 5.9+** with modern ES modules
- 🧪 **Jest** testing framework with ESM support
- 🔍 **ESLint** with TypeScript and Prettier integration
- 🎨 **Prettier** code formatting
- 📦 **Composite TypeScript** configuration for better build performance
- 🏗️ **VS Code tasks** for building, watching, and linting
- 📊 **Code coverage** reporting
- 🔄 **Watch mode** for development

## Quick Start

### Using as GitHub Template

1. **Create a new repository from this template**
   - Click the "Use this template" button on GitHub
   - Or visit: `https://github.com/justin/jww-typescript-template/generate`
   - Name your new repository and clone it

2. **Set up your new project**

   ```bash
   cd your-new-project
   npm install
   ```

3. **Customize your project**

   ```bash
   # Update package.json with your project details
   npm pkg set name="your-project-name"
   npm pkg set description="Your project description"
   npm pkg set author="Your Name"
   ```

4. **Start developing**
   ```bash
   npm run watch  # Start TypeScript compiler in watch mode
   ```

## Project Structure

```
├── src/              # TypeScript source files
│   └── index.ts      # Main entry point
├── __tests__/        # Jest test files
│   └── index.test.ts # Example test
├── lib/              # Compiled JavaScript output
├── coverage/         # Test coverage reports
├── tsconfig.json     # Main TypeScript config
├── tsconfig.base.json # Base TypeScript config
├── tsconfig.test.json # Test-specific TypeScript config
├── jest.config.ts    # Jest configuration
└── package.json      # Project dependencies and scripts
```

## Available Scripts

### Development

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch mode compilation
- `npm start` - Run the compiled JavaScript

### Testing

- `npm test` - Run all tests
- `npm run test-watch` - Run tests in watch mode

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint-fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format-check` - Check code formatting

### Utilities

- `npm run clean` - Clean workspace and reinstall dependencies
- `npm run package` - Build and create npm package

## TypeScript Configuration

This template uses a composite TypeScript setup:

- **`tsconfig.base.json`** - Base configuration with modern settings
- **`tsconfig.json`** - Main build configuration (src → lib)
- **`tsconfig.test.json`** - Test-specific configuration

### Key Features:

- ES modules with `nodenext` module resolution
- Strict type checking enabled
- Declaration files and source maps generated
- Composite builds for faster incremental compilation

## Testing with Jest

Configured for TypeScript and ES modules:

- Uses `ts-jest` with ESM preset
- Tests located in `__tests__/` directory
- Coverage reports generated in `coverage/`
- Supports modern TypeScript features

## Code Quality Tools

### ESLint

- TypeScript-aware linting rules
- Prettier integration for consistent formatting
- TSDoc plugin for documentation comments

### Prettier

- Automatic code formatting
- Integrated with ESLint to avoid conflicts
- Formats TypeScript files in `src/` and `__tests__/`

## VS Code Integration

Pre-configured tasks available in VS Code:

- **Build TypeScript Files** (Ctrl+Shift+B)
- **Watch TypeScript Files**
- **Run ESLint**
- **Clean Workspace**

## Development

### Working with the Template

1. **Write your code**
   - Add your TypeScript files to `src/`
   - Export your main functionality from `src/index.ts`

2. **Add tests**
   - Create test files in `__tests__/`
   - Follow the naming pattern `*.test.ts`

3. **Build and run**
   ```bash
   npm run build
   npm start
   ```

### Updating This Template

If you're contributing to or maintaining this template:

1. **Clone the template repository**

   ```bash
   git clone https://github.com/justin/jww-typescript-template.git
   cd jww-typescript-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Make your changes and test**
   ```bash
   npm run watch  # Start TypeScript compiler in watch mode
   npm test       # Run tests
   ```

## Customization

### Adding Dependencies

```bash
# Runtime dependencies
npm install <package-name>

# Development dependencies
npm install -D <package-name>
```

### Modifying TypeScript Config

Edit `tsconfig.base.json` for project-wide settings, or individual config files for specific use cases.

### Updating Jest Config

Modify `jest.config.ts` to adjust test settings, add setup files, or configure coverage thresholds.

## License

MIT - See LICENSE file for details
