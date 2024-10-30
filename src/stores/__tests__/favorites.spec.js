import { setActivePinia, createPinia } from 'pinia'
import { useFavorites } from '../favorites'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useFavorites Store', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useFavorites()
  })

  it('initializes with an empty favoriteArticles array', () => {
    expect(store.favoriteArticles).toEqual([])
  })

  it('checks if an article is a favorite using isFavorite getter', () => {
    const article = { id: 1, title: 'Poem 1' }
    store.addFavorite(article)

    expect(store.isFavorite(article.id)).toBe(true)
    expect(store.isFavorite(2)).toBe(false)
  })

  it('adds an article to favorites with addFavorite action', () => {
    const article = { id: 1, title: 'Poem 1' }

    store.addFavorite(article)

    expect(store.favoriteArticles).toContainEqual(article)
    expect(store.favoriteArticles).toHaveLength(1)
  })

  it('does not add duplicate articles to favorites', () => {
    const article = { id: 1, title: 'Poem 1' }

    store.addFavorite(article)
    store.addFavorite(article) // Attempt to add the same article again

    expect(store.favoriteArticles).toHaveLength(1)
  })

  it('removes an article from favorites with removeFavorite action', () => {
    const article1 = { id: 1, title: 'Poem 1' }
    const article2 = { id: 2, title: 'Poem 2' }
    store.favoriteArticles = [article1, article2]

    store.removeFavorite(1)

    expect(store.favoriteArticles).not.toContain(article1)
    expect(store.favoriteArticles).toHaveLength(1)
  })

  it('toggles an article as a favorite with toggleFavorite action', () => {
    const article = { id: 1, title: 'Poem 1' }

    store.toggleFavorite(article)
    expect(store.favoriteArticles).toContainEqual(article)

    store.toggleFavorite(article)
    expect(store.favoriteArticles).not.toContainEqual(article)
  })
})
