import axios from 'axios'
// const baseURL = "http://192.168.40.138:8088"
const baseURL = "http://localhost:8088"
export function postRequest(urlApi, data) {
    axios({
        method: 'post',
        url: baseURL + urlApi,
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Accept': 'application/json'
        }
    }).then(function (res) {
        if (res.data.code === 10000) {
            console.log(res.data.msg);
            alert(res.data.msg)
            // <Redirect to="/404"/>
        } else if (res.data.code === 10001) {
            console.log(res.data.msg);
        } else {
            console.log("发布异常")
        }
    })
}

export function postRequestJson(urlApi, data, callback) {
    axios({
        method: 'post',
        url: baseURL + urlApi,
        data: data,
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        }
    }).then(function (res) {
        console.log("ret",res)
        if (res.data.code === 10000) {
            callback(res.data.toke)
            console.log("res.data.msg",res.data.msg);
            alert(res.data.msg)
            // <Redirect to="/404"/>
        } else if (res.data.code === 10001) {
            console.log(res.data.msg);
            alert(res.data.msg)
        } else {
            console.log("注册异常")
        }
    })
}

//封装axios的get请求
// export function getRequest(urlApi,callback) {
//     axios({
//         method:'get',
//         url:baseURL+urlApi,
//         // data:data,
//         headers:{
//         "Content-Type":"application/json",
//         'Accept':'application/json'}
//     }).then(function(res){
//         console.log("res:",res);
//         if(res.data.code==10000){
//             callback(res)
//             console.log("请求成功");
//         }else if(res.data.code=10001){
//             console.log("请求失败");
//         }else{
//             console.log("异常")
//         }
//         // console.log("res",res)
//     })
//  }

//fetch的get请求
export function getRequest(urlApi, callback) {
    let url = baseURL + urlApi
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(json => {
            if (json.code === 10000) {
                callback(json)
                console.log(json.msg);
            } else if (json.code === 10001) {
                console.log(json.msg)
            }
        })
        .catch(err => {
            console.log('异常！！！', err);
        })
}


