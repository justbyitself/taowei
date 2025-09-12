import { describe, it, expect } from 'vitest'
import { empty } from '../../src/index.js'

describe('empty', () => {
  it('empty() returns a fresh empty generator (iterable) each call', () => {
    expect(typeof empty).toBe('function')

    const g1 = empty()
    const g2 = empty()

    // ambos son generator objects
    expect(typeof g1.next).toBe('function')
    expect(typeof g2.next).toBe('function')

    // son reiniciables al pedir un nuevo generator (no el mismo objeto)
    expect(g1).not.toBe(g2)

    // cumplen iterator protocol: iterator() returns itself
    expect(g1[Symbol.iterator]()).toBe(g1)
    expect(g2[Symbol.iterator]()).toBe(g2)

    // ambos ya están done y no producen valores
    expect(g1.next()).toEqual({ value: undefined, done: true })
    expect(g2.next()).toEqual({ value: undefined, done: true })

    // Array.from sobre un nuevo generator produce []
    expect(Array.from(empty())).toEqual([])
    expect([...empty()]).toEqual([])
  })
})
