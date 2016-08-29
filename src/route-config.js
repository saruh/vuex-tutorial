import Count from './components/Count'
import Search from './components/Search'
import Dialog from './components/Dialog'

export function configRouter (router) {
  router.map({
    '/count': {
      component: Count
    },
    '/search': {
      component: Search
    },
    '/dialog': {
      component: Dialog
    }
  })
}
