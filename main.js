var app = new Vue({
    el:'#app',
    data:{
        message: '안녕'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data:{
        message:'이 페이지는'+new Date()+' 에 로드 되었습니다'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen:true
    }
})


var app4 = new Vue({
    el: '#app-4',
    data:{
        todos: [
            {text: 'java'},
            {text: 'py'},
            {text: 'c'},
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data:{
       message:'hi vue'
    },
    methods: {
        reverse: function(){
            this.message = this.message.split('').reverse().join('')
        }
    },
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '안녕하세요 Vue!'
    }
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.t }}</li>'
  })

  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, t: 'Vegetables' },
        { id: 1, t: 'Cheese' },
        { id: 2, t: 'Whatever else humans are supposed to eat' }
      ]
    }
  })