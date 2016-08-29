<style>
/* for dialog-polyfill, from node_modules/dialog-polyfill/dialog-polyfill.css */
dialog {
    position: absolute;
    left: 0; right: 0;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: -webkit-fit-content;
    height: fit-content;
    margin: auto;
    border: solid;
    padding: 1em;
    background: white;
    color: black;
    display: none;
}
dialog[open] {
    display: block;
}
dialog + .backdrop {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    background: rgba(0,0,0,0.1);
}
/* for small devices, modal dialogs go full-screen */
@media screen and (max-width: 540px) {
    dialog[_polyfill_modal] {  /* TODO: implement */
        top: 0;
        width: auto;
        margin: 1em;
    }
}
._dialog_overlay {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
}
</style>

<template>
  <dialog class="mdl-dialog">
    <p>This is da dialog!</p>
    <div class="mdl-dialog__actions">
      <button type="button" class="mdl-button" @click="close">閉じる</button>
    </div>
  </dialog>
  <button type="button" class="mdl-button" @click="show">開く</button>
</template>

<script>
import dialogPolyfill from 'dialog-polyfill'
export default {
  // createdで試してみたが、readyでないとうまくいかなかった
  // https://jp.vuejs.org/guide/instance.html
  // styleは入れないと、dialogタグがないchrome以外のブラウザでは
  // おそらく表示に問題が出ると思われる
  ready: function () {
    let dialog = document.querySelector('dialog')
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog)
    }
  },
  methods: {
    show () {
      var dialog = document.querySelector('dialog')
      dialog.showModal()
    },
    close () {
      var dialog = document.querySelector('dialog')
      dialog.close()
    }
  }
}
</script>
