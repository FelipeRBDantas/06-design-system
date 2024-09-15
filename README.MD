# Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

# Build

## Build without monitoring

`npm run build`

## Build with monitoring changes

`npm run dev`

# Package Docs

To create the storybook, the following command was executed:

`npx sb init --builder @storybook/builder-vite --type react --package-manager=npm`

Para rodar o storybook é com base no seguinte script:

`npm run storybook dev -p 6006 --initial-path=/onboarding --quiet`

## Run

Para rodar o projeto todo em Dev, execute:

`npm run dev`

Para gerar a Build de todo o projeto, execute:

`npm run build`
