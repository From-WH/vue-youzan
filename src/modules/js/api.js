//引入文件
let url = {
  hotLists:'/index/hotLists',
  banner:'/index/banner',
  topList:'/category/topList',
  subList:'/category/subList',
  rank:'/category/rank',
  searchList: '/search/list'
}
//接口
let host = 'http://rap2api.taobao.org/app/mock/7058'   //7058

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
    
  }
}


export default url