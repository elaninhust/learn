function loadImgPromise(url){
    var promise=new Promise(resolve,reject){
        var oImg=new Image();
        oImg.src=url;
        oImg.onload=function(){
            resolve(oImg);
        };
        oImg.onerror=function(){
            reject(new Error('图片加载错误！'));
        };
    };

    return promise;
}

loadImgPromise('http://7qnb7a.com1.z0.glb.clouddn.com/6608717992840918931.jpg')
.then(function(oImg){
    //利用oImg。。。
},function(err){
    console.log(error);
});
