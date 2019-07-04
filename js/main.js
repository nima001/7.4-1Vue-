Vue.component(
    'alert', {
        template: '<button @click="clicked">我是全局方式</button>',
        methods: {
            clicked: function () {
                alert("heihei");
            }
        }
    }
);

var app = new Vue({
    el: '#app1',
    components: {
        'syq': {
            template: '<button @click="on_click">请点我</button>',
            methods: {
                on_click: function () {
                    alert("haha");
                }
            }
        },
        'dianzan': {
            template: '<button @click="click_dianzan">点赞{{like_count}}</button>',
            data:function(){
              return {
                  like_count:10,
              }
            },
            methods: {
                click_dianzan: function () {
                    return this.like_count++;
                }
            }
        }
    }
});



