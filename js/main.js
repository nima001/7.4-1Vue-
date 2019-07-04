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

Vue.component(
    'balance', {
        template: '<div><show @show_money="showbalance"></show><div v-if="show">ji</div></div>',
        methods:{
            showbalance:function (data) {
                this.show=true,
                alert(data);
                console.log("data",data);
            }
        },
        data: function () {
            return {
                show:false,
            }
        }
    }
);

Vue.component(
    'show',{
        template:'<button @click="showmoney">显示余额</button>',
        props:['mon'],
        methods:{
            showmoney:function() {
                this.$emit('show_money',{a:1,b:2});
            }
        }
    }
);
new Vue({
    el:'#app2',
});

var app = new Vue({
    el: '#app1',
    components: {
        'syq': {
            template: '<button @click="on_click">请点我</button>',
            props:['message'],
            methods: {
                on_click: function () {
                    alert(this.message);
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
        },
        'user':{
            template:'<a :href="username">{{username}}</a>',
            props:['username'],
        }
    }
});



