import Count from './components/Count'
import CountEx from './components/CountEx'
import Search from './components/Search'
import Dialog from './components/Dialog'

export function configRouter (router) {
  router.map({
    '/count': {
      component: Count
    },
    '/count-ex': {
      component: CountEx
    },
    '/search': {
      component: Search
    },
    '/dialog': {
      component: Dialog
    }
  })
}
