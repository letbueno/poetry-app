import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import ArticlesList from '../ArticlesList.vue'
import ArticleCard from '../ArticleCard.vue'
import AuthorFilter from '../AuthorFilter.vue'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ArticleList', () => {
  let router
  let pinia

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)

    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/articles/:id',
          name: 'articleDetails',
          component: ArticleCard,
        },
      ],
    })
  })

  it('renders a list of articles', async () => {
    const articles = [
      { id: 1, title: 'Poem 1', author: 'Author 1', lines: ['Line 1'] },
      {
        id: 2,
        title: 'Poem 2',
        author: 'Author 2',
        lines: ['Line 1', 'Line 2'],
      },
    ]

    const wrapper = mount(ArticlesList, {
      props: { articles },
      global: { plugins: [router, pinia] },
    })

    const articleCards = wrapper.findAllComponents(ArticleCard)
    expect(articleCards).toHaveLength(articles.length)

    articles.forEach((article, index) => {
      expect(articleCards[index].text()).toContain(article.title)
      expect(articleCards[index].text()).toContain(article.author)
    })
  })

  it('renders the AuthorFilter component', () => {
    const wrapper = mount(ArticlesList, {
      props: { articles: [] },
      global: { plugins: [router, pinia] },
    })

    const authorFilter = wrapper.findComponent(AuthorFilter)
    expect(authorFilter.exists()).toBe(true)
  })
})
