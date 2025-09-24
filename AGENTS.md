# AI Coding Agent Instructions

## Project Overview

This is a **GitHub template repository** for modern TypeScript projects with ES modules, comprehensive tooling, and VS Code integration. The architecture prioritizes developer experience with composite TypeScript builds, ESM-first configuration, and seamless toolchain integration.

## Essential Development Context

### TypeScript Configuration Strategy

- **Composite build system**: `tsconfig.base.json` → `tsconfig.json` (src) + `tsconfig.test.json` (tests)
- **ES modules only**: Uses `"type": "module"` with `nodenext` module resolution
- **Build target**: `src/` → `lib/` with declaration maps and source maps enabled
- **Critical**: Always use `.js` extensions in TypeScript imports for ESM compatibility

### Testing Architecture (Jest + ESM)

- **Special setup required**: `NODE_OPTIONS="--experimental-vm-modules"` for Jest ESM support
- **Configuration**: `jest.config.ts` with `ts-jest/presets/default-esm` preset
- **Pattern**: Tests in `__tests__/` directory, named `*.test.ts`
- **VS Code integration**: Jest Runner configured with proper environment variables

### Code Quality Toolchain

- **EditorConfig**: Cross-editor settings in `.editorconfig` (LF line endings, UTF-8, 2-space indent, 120 char width)
- **Prettier**: Configuration in `.prettierrc` (120 char width, no semicolons, single quotes, arrow parens always)
- **ESLint**: Configuration in `.eslintrc.json` (TypeScript-aware with Prettier integration, relaxed `no-explicit-any` and `no-non-null-assertion`)
- **Format-on-save enabled** in VS Code with auto-fix on save
- **Always reference these config files** rather than hardcoding formatting rules

### Development Workflows

#### Core Commands

```bash
npm run watch    # Primary development - TypeScript compiler in watch mode
npm run build    # Production build with declaration files
npm test         # Run Jest with ESM support
npm run clean    # Nuclear option - clean everything and reinstall
```

#### VS Code Tasks (Ctrl+Shift+B)

- Default build task: "Build TypeScript Files"
- Background watch task available
- Integrated ESLint and clean tasks

### Project Conventions

#### File Structure Patterns

- **Source**: All TypeScript in `src/`, main export from `src/index.ts`
- **Output**: Compiled JS/declarations in `lib/` (git-ignored, hidden in VS Code)
- **Tests**: `__tests__/*.test.ts` pattern, not alongside source files

#### VS Code Workspace Setup

- **Hidden files**: Compiled JS, node_modules, build artifacts auto-hidden
- **Jest integration**: Both Jest Runner and Jest extension configured
- **TypeScript**: Uses workspace TypeScript version, not global

#### Template-Specific Patterns

- **Package.json customization**: Use `npm pkg set` commands for new projects
- **ESM imports**: Always use `.js` extensions even in TypeScript files
- **Composite builds**: Incremental compilation with `tsconfig.tsbuildinfo`

### Common Pitfalls to Avoid

- Don't use CommonJS patterns (`require`, `module.exports`) - this is ESM-only
- Don't forget `.js` extensions in imports - they're required for ESM
- Don't run Jest without `NODE_OPTIONS="--experimental-vm-modules"`
- Don't edit files in `lib/` - they're generated and will be overwritten

### When Making Changes

- **Add dependencies**: Use appropriate `npm install` vs `npm install -D`
- **New source files**: Place in `src/`, export from `src/index.ts` if public API
- **New tests**: Use `__tests__/*.test.ts` pattern, follow Jest ESM setup
- **Config changes**: Consider impact on both development and template users
