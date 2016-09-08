<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Menu</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" id="menu-{{ item.id }}" v-link="{ path: item.path }" v-for="item in items">{{ item.name }}</a>
        <a class="mdl-navigation__link" id="menu-login" href="/server-program/login">Login</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Menu</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" id="s-menu-{{ item.id }}" v-link="{ path: item.path }" v-for="item in items">{{ item.name }}</a>
      <a class="mdl-navigation__link" id="s-menu-login" href="/server-program/login">Login</a>
    </nav>
  </div>
</template>

<script>
export default {
  // 初期値
  data: function () {
    return {
      items: [
          {id: 'count', name: 'Count', path: '/count'},
          {id: 'count-ex', name: 'CountEx', path: '/count-ex'},
          {id: 'search', name: 'Search', path: '/search'},
          {id: 'dialog', name: 'Dialog', path: '/dialog'},
          {id: 'chat', name: 'Chat', path: '/chat'}
      ]
    }
  }
}
</script>