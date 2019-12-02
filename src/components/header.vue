<template>
  <div>
    <h1 class="primary-title">{{primary}}</h1>
    <h2 class="secend-title">{{secend}}</h2>
    <p class="third-title">{{third}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      primary: 'Notorious',
      secend: 'Código Descuento: Biggie ',
      third: 'Usa este código en nuestra tienda para descuentos',
    }
  }
}
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
