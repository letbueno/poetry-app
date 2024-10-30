import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import AuthorFilter from '@/components/AuthorFilter.vue'
import { useArticles } from '@/stores/articles'
import { describe, it, beforeEach, expect, vi } from 'vitest'

describe('AuthorFilter Component', () => {
  let pinia
  let articlesStore

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    articlesStore = useArticles()

    articlesStore.articles = [
      { id: 1, title: 'Poem 1', author: 'Author A' },
      { id: 2, title: 'Poem 2', author: 'Author B' },
      { id: 3, title: 'Poem 3', author: 'Author C' },
    ]
  })

  it('renders all unique authors in the dropdown', () => {
    const wrapper = mount(AuthorFilter, {
      global: {
        plugins: [pinia],
      },
    })

    const options = wrapper.findAll('option')
    const expectedAuthors = ['All Authors', 'Author A', 'Author B', 'Author C']

    expect(options).toHaveLength(expectedAuthors.length)
    options.forEach((option, index) => {
      expect(option.text()).toBe(expectedAuthors[index])
    })
  })

  it('calls setAuthorFilter with the selected author', async () => {
    const wrapper = mount(AuthorFilter, {
      global: {
        plugins: [pinia],
      },
    })

    const setAuthorFilterSpy = vi.spyOn(articlesStore, 'setAuthorFilter')

    await wrapper.find('select').setValue('Author B')

    expect(setAuthorFilterSpy).toHaveBeenCalledWith('Author B')
  })
})
