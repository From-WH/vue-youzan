let url = {
  hotLists:'/index/hotLists',
  banner:'/index/banner'
}
let host = 'http://rap.taobao.org/mockjsdata/24170'

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}


export default url