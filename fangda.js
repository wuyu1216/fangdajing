window.onload=function () {
    let small = document.getElementsByClassName('sImg')[0];
    let opacity = document.getElementsByClassName('opacity')[0];
    let img = document.getElementsByTagName('img')[1];
    let mask = document.getElementsByClassName('mask')[0];
    let mh=mask.offsetHeight, mw=mask.offsetWidth;
    let maxH=small.offsetHeight-mh;
    let maxW=small.offsetWidth-mw;

    opacity.addEventListener('mousemove',function (e) {
        let bili = img.offsetWidth /small.offsetWidth;
        // 放到中间
        let ox = e.offsetX-mw/2, oy = e.offsetY-mh/2;
        // 设置边界
        if(ox>=maxW){
            ox = maxW;
        }
        if(ox<=0){
            ox=0;
        }
        if(oy>=maxH){
            oy=maxH;
        }
        if(oy<=0){
            oy=0;
        }
        mask.style.top=oy+'px';
        mask.style.left=ox+'px';
        // 以上为左边实现mask拖拽
        /*比例
        mask    big
        small   img
        * */
        img.style.width=opacity.offsetWidth*opacity.offsetWidth/mw+'px';
        img.style.height=opacity.offsetHeight*opacity.offsetHeight/mh+'px';

        img.style.top=-oy*bili+'px';
        img.style.left=-ox*bili+'px';

    });
};