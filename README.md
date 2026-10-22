# Memory Card

A memory game built with React for [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card). Click each card only once. The cards shuffle after every click.

## Project requirements

- [ ] Show a scoreboard with the **current score** and the **best score**
- [ ] Show a grid of cards, each with an image and a name, fetched from an external API (`src/api/fetchCards.js`)
- [ ] Clicking a card shuffles the cards into a random order (`src/utils/shuffle.js`)
- [ ] Clicking a new card increases the score; clicking a card twice resets it
- [ ] Update the best score when the current score beats it
- [ ] Fetch data in a `useEffect`, and handle loading and error states
- [ ] Style it
- [ ] Deploy it (Netlify config included, see below)

## Starter structure

```
src/
├── App.jsx                 # Game state + click handler (TODOs inside)
├── App.css                 # Layout and card styles
├── App.test.jsx            # Starter tests, add more as you build
├── api/fetchCards.js       # TODO: fetch card data (PokéAPI example)
├── components/
│   ├── Scoreboard.jsx      # Current + best score
│   ├── CardGrid.jsx        # Renders the list of cards
│   └── Card.jsx            # A single clickable card
└── utils/
    ├── shuffle.js          # Fisher–Yates shuffle (returns a new array)
    └── shuffle.test.js
```

## Stack

| Tool                                                                                   | Purpose                                 |
| -------------------------------------------------------------------------------------- | --------------------------------------- |
| [pnpm](https://pnpm.io/)                                                               | Package manager                         |
| [Vite](https://vite.dev/)                                                              | Dev server and bundler                  |
| [React](https://react.dev/)                                                            | UI library                              |
| [Vitest](https://vitest.dev/)                                                          | Test runner (Jest-compatible API)       |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Render and query components in tests    |
| [user-event](https://testing-library.com/docs/user-event/intro)                        | Simulate real user interactions         |
| [jest-dom](https://github.com/testing-library/jest-dom)                                | DOM matchers like `toBeInTheDocument()` |
| [jsdom](https://github.com/jsdom/jsdom)                                                | Browser-like environment for tests      |
| [oxlint](https://oxc.rs/docs/guide/usage/linter)                                       | Linter                                  |
| [Prettier](https://prettier.io/)                                                       | Formatter                               |

## Getting started

```bash
corepack enable   # once per machine, provides pnpm
pnpm install
pnpm dev
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload |
| `pnpm test`    | Run tests in watch mode              |
| `pnpm build`   | Build for production into `dist/`    |
| `pnpm preview` | Serve the production build locally   |
| `pnpm lint`    | Lint with oxlint                     |
| `pnpm format`  | Format all files with Prettier       |

## Testing

Tests live next to the component they test, named `*.test.jsx`. Vitest globals (`describe`, `it`, `expect`) are enabled, but importing them explicitly also works.

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

it('increments the counter on click', async () => {
  const user = userEvent.setup()
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  await user.click(button)
  expect(button).toHaveTextContent('Count is 1')
})
```

Prefer queries that reflect how users find elements: `getByRole`, `getByLabelText`, `getByText`.

## Deploying to Netlify

`netlify.toml` tells Netlify to run `pnpm build` and publish `dist/`.

One-time setup: in Netlify, **Add new site → Import an existing project**, pick this repo, and keep the defaults. Every push to `main` then redeploys the site.

GitHub Actions (`.github/workflows/ci.yml`) runs lint and tests on every push and pull request.
