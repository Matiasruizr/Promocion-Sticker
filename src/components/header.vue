<template>
  <div>
    <h2 class="secend-title">{{secend}}</h2>
    <span class="btn btn-info text-white copy-btn ml-auto" @click.stop.prevent="copyTestingCode">
              Copy
            </span>
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
  methods: {
        copyTestingCode () {
          let testingCodeToCopy = document.querySelector('Biggie')
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
},
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
