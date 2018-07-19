import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'

import {
  InfiniteScroll
} from 'mint-ui'
Vue.use(InfiniteScroll)



let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    loading: false,
    allLoaded: false,
    pageSize: 6
  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      if (this.allLoaded) return
      this.loading = true
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        //判断数据是否加载完毕
        if(this.curLists.lenght<this.pageSize){
          this.allLoaded = true
        }
        if (this.lists) {
          this.lists = this.lists.concat(curLists)
        } else {
          //初始化
          this.lists = curLists
        }
        this.loading = false
        this.pageNum++
      })
    }
  },
  components:{
    Foot
  }
})
