/* eslint-disable */
<template>
  <div id="app">
    <v-Header/>
    <Links/>
    <!-- <p id="hitokoto">加载中...</p> -->
  </div>
</template>

<script>
import header from './components/header'
import Links from './components/links'
import './assets/global.css'

export default {
  name: 'App',
  components: {
    'v-Header': header,
    'Links': Links
  },
  methods: {
        copyTestingCode () {
          let testingCodeToCopy = 'Biggie'
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            alert('Testing code was copied ' + msg);
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
}
}
</script>

<style>
#app{
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(0,0,0,.4);
}
#hitokoto{
  text-align: center;
}
</style>
