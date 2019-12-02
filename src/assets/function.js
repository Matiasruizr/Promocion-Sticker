import $ from 'jquery';


$(document).ready(() => {
    setBackground();
    hitokoto();
})


function setBackground(){
    const background = [
        'https://heabbi.com/wp-content/uploads/2018/05/biggie-smalls-full.jpg',
        'https://miro.medium.com/max/2960/1*z7MMtcltsXpg8ReeWSmbfg.jpeg',
        // 'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfivzadbwj31kw0w0k4s.jpg',
        // 'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi88qcdpj31hc0u00xy.jpg',
        // 'https://ww2.sinaimg.cn/large/0060lm7Tly1fji5691db2j31hc0u0n5v.jpg',
        // 'https://ww4.sinaimg.cn/large/0060lm7Tly1fji5688e62j31hc0u0wjg.jpg',
        // 'https://ww4.sinaimg.cn/large/0060lm7Tly1fjfi87rzn0j31hc0u0djp.jpg',
        // 'https://ws3.sinaimg.cn/large/007giGeVly1fuvsdqd6duj31hc0u0aea.jpg',
        // 'https://ws2.sinaimg.cn/large/0065BpO8gy1fuhnokeop1j31hc0u0too.jpg',
        // 'https://ws4.sinaimg.cn/large/007giGeVly1fuvsgpyiplj31hc0u0adj.jpg',
      ];
    const random = Math.ceil(Math.random() * background.length - 1);
    const a = `url('${background[random]}')`;
    $('body').css("background-image",a);
}

function hitokoto(){
    fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console(err);
    })
}