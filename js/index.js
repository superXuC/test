$('#musicBtn').bind("click",function () {
    var audioEle =$("#autoplay")[0]
    if (audioEle.paused){
        audioEle.play();   //播放
        $("#musicBtn").addClass("on")
    }else {
        audioEle.pause();  //暂停
        $("#musicBtn").removeClass("on")

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
   var index_= arr.indexOf(Math.max.apply(Math, arr))
    console.log(index_)
    var arrTitle=["开朗","乐观","温和","耐心","感性","浪漫","稳重","独立"]
    var arrmixTitle=["（目标明确，自我挑战）","（热情友善，心胸开放）","（随遇而安，安分守己）","（尽责细心，三思后行）","（情绪丰富、坚持梦想）","（独特优雅，直觉敏锐）","（是非分明，客观冷静）","（坚持心愿，自我享受，爱人爱己）"]
    var main=[
        "你气场强大，精力充沛，好动且外向； 事业心强，尽职尽责，充满理想，灵活机警。 你追求自由及不受拘束，自我的生活 你那坚强的意志使你时刻都充满信心。",
        "你的企图心强烈，有着乐观的态度，能够奋勇向前，未达到自己的目标之前，你绝不罢休。你不介意冒险，特别喜欢有趣的，多元化的工作。相比之下，例行公事及惯例会令你没精打采。你最兴奋的是可以积极参与任何比赛活动，因为这样你就可以在众人面前大显身手了。",
        "你通常是个性情温和的人，善于思考，情感细腻且深刻，你很会替他人着想，外表亲切热情，内心追求安逸的环境，很有忍耐力，什么事都放在心里自己承受；不爱争抢，认为属于自己的是不需争抢的。你很会替他人着想，常试图改变自己去迎合对方。",
        "你总能观察入微、善解他人心意。由于你的细心体贴，常赢得别人对你的信任，而且不论你遇到什么挫折，都能愈挫愈勇，努力克服。你是个注重细节的人，也会敏感地注意别人情绪的细节，所以你对他人是比较细致而有耐心的。",
        "你慷慨大方，比较引人注目。你秉承着自然、随兴的交友原则，从来都不强求，不会主动地想和哪一种类型的人在一起。你创造力强，机智过人，思路敏捷。你爱好美与艺术，善解人意，有时顾虑太多，充满感性。",
        "你创造力强，机智过人，思路敏捷。你爱好美与艺术，善解人意，有时顾虑太多，充满感性。很多时候你会选择沉默，但那是你的温柔，你宁愿牺牲奉献，也不愿任何人受伤。有时候你只是心直口快，但并不妨碍你有一颗美丽的心灵。",
        "你总能观察入微、善解他人心意。由于你的细心体贴，常赢得别人对你的信任，而且不论你遇到什么挫折，都能愈挫愈勇，努力克服。性格谦卑、忠诚而且不张扬，所以不管让做什么都会竭尽所能。外表亲切热情，内心追求安逸的环境，胆小并害怕失败，却总表现出强悍的一面；外表亲切热情，内心追求安逸的环境，胆小并害怕失败，却总表现出强悍的一面。",
        "想象力强，乐于助人，富有同情心；不拘小节，求知欲强，爱冒险，风趣幽默，甚至爱自黑；享受独处，不太喜欢热闹，喜欢闲散的生活节奏，但并不孤僻。有自己分析问题的能力，不盲目跟风，对事物的判断有自己的根据，而绝不人云亦云。"
    ]
    var motto=[
        "属于开朗的座右铭：“为了看阳光 我来到世上 ------巴尔蒙特”",
        "属于乐观的座右铭：“每一个不曾起舞的日子，都是对生命的辜负。——罗兰”",
        "属于温和的座右铭：“宠辱不惊,看庭前花开花落; 去留无意,望天空云卷云舒”——《幽窗小记》”",
        "属于耐心的座右铭：“慎终如始，则无败事——老子《道德经》”",
        "属于感性的座右铭：“人性的选择和自决都不是出于意志的理性，而是出于偶然的动机以及这种动机对感性外在世界的依赖——黑格尔”",
        "属于浪漫的座右铭：“一个人只拥有此生此世是不够的,他还应该拥有诗意的世界——王小波”",
        "属于感性的座右铭：“天下之事，每得于从容，而失之急遽。—曾国藩”",
        "属于独立的座右铭：“有些事，只能一个人做。有些关，只能一个人过。有些路啊，只能一个人走——龙应台。”"
    ]
    $('.title').html(arrTitle[index_])
    $('.arrmixTitle').html(arrmixTitle[index_])
    $('.main').html(main[index_])
    $('.motto').html(motto[index_])
    var myChart = echarts.init(document.getElementById('main'))
    option = {
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    fontsize:'13px',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '开朗', max: 6},
                { name: '乐观', max: 6},
                { name: '温和', max: 6},
                { name: '耐心', max: 6},
                { name: '感性', max: 6},
                { name: '浪漫', max: 6},
                { name: '稳重', max: 6},
                { name: '独立', max: 6}
            ],
            center: ['50%', '50%'],
            radius: 100
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
