import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useFavorites } from '@/stores/favorites'
import { useArticles } from '@/stores/articles'

import { beforeEach, describe, expect, it } from 'vitest'
import ArticleCard from '../ArticleCard.vue'

describe('ArticleCard', () => {
  let favoritesStore
  let articlesStore

  beforeEach(() => {
    setActivePinia(createPinia())
    favoritesStore = useFavorites()
    articlesStore = useArticles()

    articlesStore.articles = [
      {
        id: 1,
        title: 'Poem 1',
        author: 'Author 1',
        lines: ['Line 1', 'Line 2', 'Line 3'],
      },
    ]
  })

  it('displays poem title, author, and first 3 lines', () => {
    const wrapper = mount(ArticleCard, {
      props: {
        id: 1,
        title: 'Poem 1',
        author: 'Author 1',
        lines: ['Line 1', 'Line 2', 'Line 3'],
      },
    })

    expect(wrapper.text()).toContain('Poem 1')
    expect(wrapper.text()).toContain('Author 1')
    expect(wrapper.text()).toContain('Line 1')
    expect(wrapper.text()).toContain('Line 2')
    expect(wrapper.text()).toContain('Line 3')
  })

  it('adds a poem to favorites when "Favorite" button is clicked', async () => {
    const wrapper = mount(ArticleCard, {
      props: {
        id: 1,
        title: 'Poem 1',
        author: 'Author 1',
        lines: ['Line 1', 'Line 2', 'Line 3'],
      },
    })

    const favoriteButton = wrapper.find('.favorite-button')
    await favoriteButton.trigger('click')

    expect(favoritesStore.isFavorite(1)).toBe(true)
    expect(favoriteButton.text()).toBe('Unfavorite')
  })

  it('removes a poem from favorites when "Unfavorite" button is clicked', async () => {
    favoritesStore.addFavorite({ id: 1, title: 'Poem 1', author: 'Author 1' })

    const wrapper = mount(ArticleCard, {
      props: {
        id: 1,
        title: 'Poem 1',
        author: 'Author 1',
        lines: ['Line 1', 'Line 2', 'Line 3'],
      },
    })

    const favoriteButton = wrapper.find('.favorite-button')
    await favoriteButton.trigger('click')

    expect(favoritesStore.isFavorite(1)).toBe(false)
    expect(favoriteButton.text()).toBe('Favorite')
  })

  it('applies "is-favorite" class to button when poem is a favorite', () => {
    favoritesStore.addFavorite({ id: 1, title: 'Poem 1', author: 'Author 1' })

    const wrapper = mount(ArticleCard, {
      props: {
        id: 1,
        title: 'Poem 1',
        author: 'Author 1',
        lines: ['Line 1', 'Line 2', 'Line 3'],
      },
    })

    const favoriteButton = wrapper.find('.favorite-button')
    expect(favoriteButton.classes()).toContain('is-favorite')
  })
})
