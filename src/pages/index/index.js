import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'

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
    pageSize: 6,
    bannerLists: null
  },
  created() {
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists() {
      if (this.allLoaded) return
      this.loading = true
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then((res) => {
        let curLists = res.data.lists
        //判断数据是否加载完毕
        if (curLists.length < this.pageSize) {
          this.allLoaded = false
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
    },
    getBanner() {
      axios.get(url.banner).then(res => {
        this.bannerLists = res.data.lists
      })
    }
  },
  components: {
    Foot,
    Swiper
  }
})
