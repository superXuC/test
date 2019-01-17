$('#musicBtn').bind("click",function () {
    var audioEle =$("#autoplay")[0]
    if (audioEle.played){
        audioEle.pause();  //暂停
        $("#musicBtn").removeClass("on")
    }else {
        audioEle.play();   //播放
        $("#musicBtn").addClass("on")
    }
})


scaleW=window.innerWidth/320;
scaleH=window.innerHeight/480;
var resizes = $('.resize');
for (var j=0; j<resizes.length; j++) {
    resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
    resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
    resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
    resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px';
}

var mySwiper = new Swiper ('.swiper-container', {
    direction : 'vertical',
    mousewheelControl : true,
    watchSlidesProgress: true,
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper){
        swiperAnimate(swiper);
    },
    onProgress: function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress*swiper.height/4;
            scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
            var opacity = 1 - Math.min(Math.abs(progress/2),0.5);
            slide.style.opacity = opacity;
            es = slide.style;
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,'+translate+'px,-'+translate+'px) scaleY(' + scale + ')';

        }
    },

    onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
            es = swiper.slides[i].style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';

        }
    },

})
var a1=0//开朗
var a2=0//乐观
var a3=0//温和
var a4=0//耐心
var a5=0//感性
var a6=0//浪漫
var a7=0//稳重
var a8=0//独立
$(".slide1 input").on("click",function(){
    var index=$(".slide1 input").index(this)
    mySwiper.slideTo(1,1000);
   if (index==0) {
        a2++
   }else if(index==1){
        a3++

   }else if(index==2){
        a8++
   }else if(index==3){
        a5++
   }
})

$(".slide2 input").on("click",function(){
    var index = $(".slide2 input").index(this);
    mySwiper.slideTo(2,1000);
    if (index==0) {
        a3++
    }else if(index==1){
        a8++
    }else if(index==2){
        a6++
    }else if(index==3){
        a5++
    }
})
$(".slide3 input").on("click",function(){
    var index = $(".slide3 input").index(this);
    mySwiper.slideTo(3,1000);
    if (index==0) {
        a1++;
        a2++
    }else if(index==1){
        a6++
    }else if(index==2){
        a7++;
        a8++
    }else if(index==3){
        a3++;
        a5++
    }
})
$(".slide4 input").on("click",function(){
    var index = $(".slide4 input").index(this);
    mySwiper.slideTo(4,1000);
    if (index==0) {
        a2++
    }else if(index==1){
        a3++
    }else if(index==2){
        a8++
    }else if(index==3){
        a4++
    }
})
$(".slide5 input").on("click",function(){
    var index = $(".slide5 input").index(this);
    mySwiper.slideTo(5,1000);
    if (index==0) {
        a6++;
        a8++
    }else if(index==1){
        a3++
    }else if(index==2){
        a7++
    }else if(index==3){
        a5++
    }
})
$(".slide6 input").on("click",function(){
    var index = $(".slide6 input").index(this);
    mySwiper.slideTo(6,1000);
    if (index==0) {
        a3++
    }else if(index==1){
        a8++
    }else if(index==2){
        a2++
    }else if(index==3){
        a6++
    }
})
$(".slide7 input").on("click",function(){
    var index = $(".slide7 input").index(this);
    mySwiper.slideTo(7,1000);
    if (index==0) {
        a1++
    }else if(index==1){
        a3++
    }else if(index==2){
        a5++
    }else if(index==3){
        a6++
    }
})
$(".slide8 input").on("click",function(){
    var index = $(".slide8 input").index(this);
    mySwiper.slideTo(8,1000);
    if (index==0) {
        a2++
    }else if(index==1){
        a5++
    }else if(index==2){
        a3++
    }else if(index==3){
        a6++
    }
})
$(".slide9 input").on("click",function(){
    var index = $(".slide9 input").index(this);
    mySwiper.slideTo(9,1000);
    if (index==0) {
        a7++
    }else if(index==1){
        a5++
    }else if(index==2){
        a8++
    }else if(index==3){
        a2++
    }
    var arr=[]
    arr.push(a1,a2,a3,a4,a5,a6,a7,a8)
   console.log(arr)
    var myChart = echarts.init(document.getElementById('main'))
    option = {
        title: {
            text: '性格趋势',
            textAlign:"center",
            textStyle:{
                color:'#344532'
            }
        },
        tooltip: {},

        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '开朗', max: 2},
                { name: '乐观', max: 6},
                { name: '温和', max: 8},
                { name: '耐心', max: 1},
                { name: '感性', max: 7},
                { name: '浪漫', max: 6},
                { name: '稳重', max: 3},
                { name: '独立', max: 7}
            ],
            center: ['50%', '50%'],
            radius: 120
        },
        series: [{
            type: 'radar',
            // areaStyle: {normal: {}},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data : [{
                value:arr,
                normal: {
                    color:'#42bd56'
                }
            }]
        }]
    };
    myChart.setOption(option);
})

//输出结果
