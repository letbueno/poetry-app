import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import { describe, it, beforeEach, expect } from 'vitest'
import CustomHeader from '../CustomHeader.vue'

// Mock Vue Router
const routes = [
  { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
  {
    path: '/favorites',
    name: 'favorites',
    component: { template: '<div>Favorites</div>' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('CustomHeader Component', () => {
  beforeEach(() => {
    router.push('/')
  })

  it('navigates to home when the title is clicked', async () => {
    const wrapper = mount(CustomHeader, {
      global: {
        plugins: [router],
      },
    })

    // Simula o clique no título
    await wrapper.find('h2').trigger('click')

    // Verifica se o router foi redirecionado para a rota home
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('renders navigation links correctly', () => {
    const wrapper = mount(CustomHeader, {
      global: {
        plugins: [router],
      },
    })

    // Verifica se ambos os links de navegação estão presentes
    const links = wrapper.findAll('.CustomHeader-navigation h4')
    expect(links).toHaveLength(2)
    expect(links[0].text()).toBe('Home')
    expect(links[1].text()).toBe('Favorites')
  })

  it('navigates to favorites when the Favorites link is clicked', async () => {
    const wrapper = mount(CustomHeader, {
      global: {
        plugins: [router],
      },
    })

    // Simula o clique no link Favorites
    await wrapper.findAll('.CustomHeader-navigation h4')[1].trigger('click')

    // Verifica se o router foi redirecionado para a rota favorites
    expect(router.currentRoute.value.name).toBe('favorites')
  })
})
