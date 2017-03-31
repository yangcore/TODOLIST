<template>
  <div class="main">
    <h3>待办事项</h3>
    <input type="text" class="inpunt-x" v-model='msg' :value="msg" v-on:keyup.13="enter"/>
    <ul>
      <li v-for="(x,index) in msgiteam" @click.stop="complete(x,index)">{{index + 1}}.{{x}}  <span style="text-decoration: none" @click="delet(index)">删除</span> </li>
    </ul>
  </div>
</template>
<script>

  module.exports = {//扔出去的是一个对象
    name: 'hello',
    data: function () {
      return {
        msg: '',
        msgiteam: [],
      }
    },
    mounted:function () {
      if(localStorage.getItem('msgiteam')){
        this.msgiteam= localStorage.getItem('msgiteam').split(',');
      }
    },
    methods: {
      enter: function () {
        this.msgiteam.push(this.msg);
        this.msg = '';
      },
      complete: function () {
        this.$nextTick(function () {
          event.target.classList.toggle('complete');
        });
      },
      delet:function (index) {
        Array.prototype.remove = function (dx) {
          if (isNaN(dx) || dx > this.length) { return false; }
          for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
              this[n++] = this[i]
            }
          }
          this.length -= 1;
          return this;
        }
        this.msgiteam=this.msgiteam.remove(index);
            if(this.msgiteam=='' || this.msgiteam==false){
              localStorage.removeItem('msgiteam');
            }else {
              localStorage.setItem('msgiteam',this.msgiteam);
            }
          this.$forceUpdate();//升级数据重新渲染页面，但不是整体刷新页面
      }
    },
    watch:{ //监控数据的，注意：在变异（不是替换）对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。
      msg:function (x,y) {
        localStorage.setItem('msgiteam',this.msgiteam);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    font-family: "Microsoft YaHei";
  }
  .complete {
    text-decoration: line-through;
  }
  .main{
    width: 500px;
    height:500px;
    border:1px solid black;
    border-radius: 30px;
    margin: 0 auto;
  }
  .main ul li{
    list-style: none;
    text-align: left;
    padding: 10px 0;
    border-bottom: 1px solid #ff6600;
  }
  .main ul li span{
    float: right;
    margin-right: 30px;
    border:1px solid #ff6600;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    background: #ff6600;
    color: white !important;
  }

</style>
