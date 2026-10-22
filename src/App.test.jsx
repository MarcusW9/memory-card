import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /memory card/i }),
    ).toBeInTheDocument()
  })

  it('starts with a score and best score of 0', () => {
    render(<App />)
    expect(screen.getByText('Score: 0')).toBeInTheDocument()
    expect(screen.getByText('Best score: 0')).toBeInTheDocument()
  })

  it('renders the cards', () => {
    render(<App />)
    expect(screen.getAllByRole('button')).toHaveLength(12)
  })

  // TODO: add tests as you build the game logic, e.g.
  // it.todo('increments the score when a new card is clicked')
  // it.todo('resets the score when a card is clicked twice')
  // it.todo('updates the best score when beaten')
})
