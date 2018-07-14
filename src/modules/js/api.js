let url = {
  hotLists:'/index/hotLists'
}
let host = 'http://rap.taobao.org/mockjsdata/31797'

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}


export default url