import { setActivePinia, createPinia } from 'pinia'
import { useArticles } from '../articles'
import api from '@/services/api'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/services/api')

describe('useArticles Store', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useArticles()
  })

  it('initializes with default state', () => {
    expect(store.articles).toEqual([])
    expect(store.selectedAuthor).toBeNull()
  })

  it('fetches and sets articles via getArticles action', async () => {
    const mockArticles = [
      { title: 'Poem 1', author: 'Author 1' },
      { title: 'Poem 2', author: 'Author 2' },
    ]
    api.get.mockResolvedValueOnce(mockArticles)

    await store.getArticles()

    expect(store.articles.length).toBe(2)
    expect(store.articles[0]).toEqual({
      title: 'Poem 1',
      author: 'Author 1',
      id: 1,
    })
    expect(store.articles[1]).toEqual({
      title: 'Poem 2',
      author: 'Author 2',
      id: 2,
    })
  })

  it('returns error if getArticles action fails', async () => {
    const error = new Error('Network Error')
    api.get.mockRejectedValueOnce(error)

    const result = await store.getArticles()

    expect(result).toBe(error)
  })

  it('filters articles by selected author', () => {
    store.articles = [
      { title: 'Poem 1', author: 'Author 1' },
      { title: 'Poem 2', author: 'Author 2' },
      { title: 'Poem 3', author: 'Author 1' },
    ]
    store.setAuthorFilter('Author 1')

    const filteredArticles = store.returnArticles
    expect(filteredArticles).toHaveLength(2)
    expect(filteredArticles).toEqual([
      { title: 'Poem 1', author: 'Author 1' },
      { title: 'Poem 3', author: 'Author 1' },
    ])
  })

  it('retrieves a specific article by ID using getArticle getter', () => {
    store.articles = [
      { id: 1, title: 'Poem 1', author: 'Author 1' },
      { id: 2, title: 'Poem 2', author: 'Author 2' },
    ]
    const article = store.getArticleById(2)
    expect(article).toEqual({ id: 2, title: 'Poem 2', author: 'Author 2' })
  })

  it('retrieves unique authors using getAuthors getter', () => {
    store.articles = [
      { title: 'Poem 1', author: 'Author 1' },
      { title: 'Poem 2', author: 'Author 2' },
      { title: 'Poem 3', author: 'Author 1' },
    ]
    const authors = store.getAuthors
    expect(authors).toEqual(['Author 1', 'Author 2'])
  })

  it('sets the selected author filter via setAuthorFilter action', () => {
    store.setAuthorFilter('Author 1')
    expect(store.selectedAuthor).toBe('Author 1')
  })
})
