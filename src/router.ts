import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

const About = { template: '<div>About</div>' }
const NotFound = { template: '<div>Not Found</div>' }

import Home from './components/Home.vue'
import Node from './components/Node.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/node/:id', component: Node },


  ],
})
