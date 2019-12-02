<template>
  <div>
    <h2 class="secend-title">{{secend}}</h2>
      <template id="t">
        <div class="container">
          <input type="text" v-model="message">
          <button type="button"
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">Copy!</button>
        </div>
      </template>
    <h1 class="primary-title">{{primary}}</h1>   
    <p class="third-title">{{third}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      primary: '',
      secend: 'Código: Biggie',
      third: 'Usa este código en nuestra tienda para descuentos',
    }
  },
}

new Vue({
  el: '#app',
  template: '#t',
  data: function () {
    return {
      message: 'Copy These Text'
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }
})
</script>

<style>
h1,h2,h3{
  transition: .2s ease;
  letter-spacing: 4px;
  padding: 8px 0;
  text-align: center;
}
h1{
  font-size: 8vw;
}
h2{
  font-size: 4vw;
}
h3{
  font-size: 1vw;
}
p{
  text-align: center;
}
</style>
