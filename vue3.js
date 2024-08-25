const {createApp} = Vue;

createApp({
      data(){
            return{
                  ism: 'alisher va Diorbek',
                  count: 1,
                  link: 'https://picsum.photos/300/300'
            }
      },
      methods:{
            plus(){
                  this.number++
            }
      },
      computed: {
            changeImg() {
                  this.count++
                  return this.link = `https://picsum.photos/300/300?random=${this.count}`
            }
      },
}).mount('#app')