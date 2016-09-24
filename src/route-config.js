import Count from './components/Count'
import CountEx from './components/CountEx'
import Search from './components/Search'
import Dialog from './components/Dialog'
import Login from './components/Login'
import Upload from './components/Upload'
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
    '/login': {
      component: Login,
      title: 'Login'
    },
    '/upload': {
      component: Upload,
      title: 'Upload'
    },
    '/chat': {
      component: Chat,
      title: 'Chat'
    }
  })
}
