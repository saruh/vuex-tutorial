import Count from './components/Count'
import CountEx from './components/CountEx'
import Search from './components/Search'
import Dialog from './components/Dialog'
import Chat from './components/Chat'

export function configRouter (router) {
  router.map({
    '/count': {
      component: Count,
      title: 'Count'
    },
    '/count-ex': {
      component: CountEx,
      title: 'CountEx'
    },
    '/search': {
      component: Search,
      title: 'Search'
    },
    '/dialog': {
      component: Dialog,
      title: 'Dialog'
    },
    '/chat': {
      component: Chat,
      title: 'Chat'
    }
  })
}
