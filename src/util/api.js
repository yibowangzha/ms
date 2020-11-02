import request from './request'

export function gets(url,data){
    return request.get(url,{
        params:data
    })
}

export function posts(url,data){
    return request.post(url,data)
}
export let getBanner = data => gets('banner')
export let getTea = data => gets('teacher/'+data)
export let getTeaInfo = data => gets('teacher/info/'+data)
