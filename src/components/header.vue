/* eslint-disable */
<template>
  <div>
    <p align="center">
    <h2 class="secend-title">{{secend}}</h2>
    </p></br>
      <template id="t">
        <div class="container">
          <p align="center">
            <button v-clipboard="'Biggie'">Copiar código!</button>
            </p>
        </div>
      </template>
    <h1 class="primary-title">{{primary}}</h1>   
    <p class="third-title">{{third}}</p>
  </div>
</template>

npm
<script>
import Clipboard from 'v-clipboard'
import Vue from 'vue'

Vue.use(Clipboard)


export default {
  data () {
    return {
      primary: '',
      secend: 'Código: Biggie',
      third: 'Usa este código en nuestra tienda para descuentos',
    }
  },
}




</script>

<style>
h1,h2,h3,{
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
.button{
  text-align: center;
  transition: .2s ease;
  margin: auto;
}
</style>
