import Count from './components/Count'
import Search from './components/Search'

export function configRouter (router) {
  router.map({
    '/count': {
      component: Count
    },
    '/search': {
      component: Search
    }
  })
}
