<template>
  <div>
    <h1 class="primary-title">{{primary}}</h1>
    <h2 class="secend-title">{{secend}}</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      primary: 'Usa este código al comprar y aprovecha el descuento',
      secend: 'Código: Biggie '
    }
  }
}
</script>
<style>
h1,h2{
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
</style>
