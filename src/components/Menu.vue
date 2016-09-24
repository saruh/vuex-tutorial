<template>
  <!-- 常時表示メニュー -->
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Menu</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <!-- There is no page transition -->
        <a class="mdl-navigation__link" id="menu-{{ item.id }}" v-link="{ path: item.path }" v-for="item in items">{{ item.name }}</a>
        <!-- There is a page transition -->
        <a class="mdl-navigation__link" id="menu-login-with-page-transition" href="/server-program/login">Login</a>
      </nav>
    </div>
  </header>
  <!-- 折りたたみメニュー -->
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Menu</span>
    <nav class="mdl-navigation">
      <!-- There is no page transition -->
      <a class="mdl-navigation__link" id="s-menu-{{ item.id }}" v-link="{ path: item.path }" v-for="item in items">{{ item.name }}</a>
      <!-- There is a page transition -->
      <a class="mdl-navigation__link" id="s-menu-login-with-page-transition" href="/server-program/login">Login</a>
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
          {id: 'login', name: 'Login', path: '/login'},
          {id: 'upload', name: 'Upload', path: '/upload'},
          {id: 'chat', name: 'Chat', path: '/chat'}
      ]
    }
  }
}
</script>