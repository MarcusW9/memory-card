import { describe, it, expect } from 'vitest'
import { shuffle } from './shuffle'

describe('shuffle', () => {
  it('returns a new array with the same items', () => {
    const input = [1, 2, 3, 4, 5]
    const result = shuffle(input)
    expect(result).not.toBe(input)
    expect([...result].sort()).toEqual(input)
  })

  it('does not mutate the original array', () => {
    const input = [1, 2, 3]
    shuffle(input)
    expect(input).toEqual([1, 2, 3])
  })
})
