<template>
<div>
  <ul>
    <li v-for="item of list" :key="item.index">
      <a :href="item.link">
        <i class="fa" :class="item.icon"></i>
        <span>{{ item.value }}</span>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          icon: 'fa-store',
          link: 'https://notorious.cl',
          value: 'Tienda'
        },
        {
          icon: 'fa-instagram',
          link: 'https://www.instagram.com/notorious_grow/',
          value: 'Instagram'
        },
        {
          icon: 'fa-facebook',
          link: 'https://www.facebook.com/Notorious.cl/',
          value: 'Facebook'
        }
      ]
    }
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  list-style: none;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
li {
  list-style: none;
  font-size: 2.2vw;
  padding: 8px 40px 40px 0;
  transition: 0.2s ease;
  text-align: center;
}
span {
  padding: 0 8px;
}
a:hover {
  background-color: #fff;
  color: #000;
  transition: 0.2s ease;
}
@media screen and (max-width: 1060px){
    ul{
        flex-direction: column;
    }
    li{
        font-size: 4vw;
        padding: 20px;
    }
}
</style>
