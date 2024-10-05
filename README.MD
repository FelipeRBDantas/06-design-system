# Components

- [x] Box
- [x] Text
- [x] Heading
- [x] Button
- [x] TextInput
- [x] TextArea
- [x] Checkbox
- [x] Avatar
- [x] MultiStep

## Tools

:hammer_and_wrench: NodeJS
:hammer_and_wrench: Javascript
:hammer_and_wrench: Typescript
:hammer_and_wrench: ReactJS
:hammer_and_wrench: Vite
:hammer_and_wrench: Turborepo
:hammer_and_wrench: Eslint
:hammer_and_wrench: Stitches
:hammer_and_wrench: Storybook
:hammer_and_wrench: Github Actions / CI/CD
:hammer_and_wrench: Changesets
:hammer_and_wrench: Vercel

# Build

## Build without monitoring

`npm run build`

## Build with monitoring changes

`npm run dev`

# Package Docs

To create the storybook, the following command was executed:

`npx sb init --builder @storybook/builder-vite --type react --package-manager=npm`

To run the entire project in Dev, run:

`npm run storybook dev -p 6006 --initial-path=/onboarding --quiet`

## Run

To run the entire project in Dev, run:

`npm run dev`

To generate the Build of the entire project, run:

`npm run build`

# Changesets

To generate new publishing versions of packages using Changeset, run:

`npm run changeset`

`npm run versions-packages`

`npm login`

`npm whoami`

`npm run release`
