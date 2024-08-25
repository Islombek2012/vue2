var app = new Vue({
      'el': '#app',
      data:{
            ism: 'Dior',
            age: '<u>meni yoshim 12da</u>',
            markaz: true,
            pul: true,
            count: 50,
            link: 'https://picsum.photos/600/300',
            izoh: 'bu rasm',
            // link2: 'https://picsum.photos/300/300',
            izoh2: 'bu rasm',
            num: 0,
            cars: [
                  {name: 'Malibu', color: 'yellow'},
                  {name: 'Inox', color: 'green'},
                  {name: 'Matiz', color: 'lime'},
                  {name: 'Tiko', color: 'red'}
            ]
      },
      methods:{
            plus(){
                  this.num++
            },
            addThree(){
                  this.num +=3
            }
      }
})