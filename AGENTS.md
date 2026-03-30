# AI Coding Agent Instructions

## Purpose

This repository is a GitHub template for modern TypeScript projects.

When working here, optimize for:

- TypeScript + ESM correctness
- predictable developer tooling
- minimal, maintainable template changes
- preserving a good default experience for future template users

## Quick Rules

- Treat this repository as ESM-only
- Put source files in `src/`
- Put tests in `__tests__/`
- Never edit generated files in `lib/`
- Always use `.js` extensions in TypeScript import paths
- Match the existing project configuration instead of inventing new defaults
- Keep changes small and targeted

## Project Shape

### Repository role

This is not just an application. It is a reusable template repository, so changes should be broadly sensible for future consumers of the template.

### Source layout

- Source code lives in `src/`
- Public exports should be surfaced from `src/index.ts`
- Tests live in `__tests__/` and use the `*.test.ts` naming pattern
- Build output goes to `lib/`

## TypeScript and Module System

### Module rules

- The project uses `"type": "module"`
- TypeScript uses Node ESM settings with `nodenext`
- Imports in TypeScript files must use `.js` extensions

### Build configuration

The TypeScript configuration uses a composite setup:

- `tsconfig.base.json` is the shared base
- `tsconfig.json` is for source compilation
- `tsconfig.test.json` is for tests

Build output is `src/` to `lib/`, with declaration files, declaration maps, and source maps enabled.

## Testing

### Jest + ESM

Jest requires ESM support through:

```bash
NODE_OPTIONS="--experimental-vm-modules"
```

Key expectations:

- Jest config lives in `jest.config.ts`
- The preset is `ts-jest/presets/default-esm`
- Tests should follow the existing `__tests__/*.test.ts` pattern

Do not run or describe Jest as if this were a CommonJS project.

## Tooling

### Formatting and linting

Always read and follow the repo configuration before making style decisions:

- `.editorconfig`
- `.prettierrc`
- `.eslintrc.json`

Do not hardcode formatting assumptions when the config already answers the question.

### VS Code integration

This repository includes VS Code-oriented workflow support:

- format on save
- ESLint autofix on save
- Jest integration
- TypeScript build tasks

These settings are defined in `.vscode/settings.json`.

If you change config, consider the impact on both CLI and VS Code workflows.

## Commands

Preferred project commands:

```bash
npm run watch
npm run build
npm test
npm run lint
npm run lint-fix
npm run format
npm run clean
```

Interpret them as follows:

- `npm run watch`: primary development workflow
- `npm run build`: production TypeScript build
- `npm test`: Jest test run with the required ESM `NODE_OPTIONS` already set by the script
- `npm run lint`: ESLint check
- `npm run lint-fix`: ESLint autofix
- `npm run format`: Prettier formatting for TypeScript source and tests
- `npm run clean`: full cleanup and reinstall path

To run a single test file, prefer:

```bash
npm test -- __tests__/index.test.ts
```

## Common Mistakes To Avoid

- Using CommonJS patterns such as `require` or `module.exports`
- Omitting `.js` from TypeScript import paths
- Editing files inside `lib/`
- Putting tests next to source files instead of `__tests__/`
- Describing config from memory when the repo already defines it explicitly

## Change Guidance

When adding or modifying code:

- add new source files under `src/`
- export public API from `src/index.ts` when appropriate
- add tests in `__tests__/`
- use `npm install` for runtime dependencies
- use `npm install -D` for development dependencies

When changing configuration:

- preserve ESM compatibility
- preserve the composite TypeScript build
- consider template users, not just the immediate repository state
- avoid unnecessary tool churn

## Decision Heuristics For Agents

When uncertain, prefer the option that:

- keeps the repository ESM-native
- follows existing config instead of adding parallel config
- minimizes surprise for future template consumers
- preserves editor, test, and build integration
- avoids touching generated output
