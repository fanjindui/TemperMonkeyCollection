// ==UserScript==
// @name         Baidu增强搜索
// @description  给百度搜索引擎的结果页一键跳转到其他网站进行相同关键词的检索；在google搜索结果页一键跳转到百度搜索进行相同关键词的检索。
// @icon         https://www.baidu.com/cache/icon/favicon.ico
// @namespace    https://github.com/fanjindui/TemperMonkeyCollection/tree/main/%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E5%A2%9E%E5%BC%BA
// @version      1.0
// @author       fanfan
// @run-at       document-start
// @include      http*://*baidu.com/s*
// @include      http*://*baidu.com/baidu*
// @include      *://www.google.com/search?*
// @include      *://www.google.com.*/search?*
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @note         参考ddrwin作品，地址https://greasyfork.org/zh-CN/scripts/396960-baidu-%E4%B8%BA%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E9%A1%B5%E6%B7%BB%E5%8A%A0%E7%A3%81%E5%8A%9B-%E7%A7%8D%E5%AD%90-%E7%BD%91%E7%9B%98-%E8%BD%AF%E4%BB%B6-%E5%A4%B4%E6%9D%A1-%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E7%9F%A5%E4%B9%8E-csdn-google%E6%90%9C%E7%B4%A2%E6%8C%89%E9%92%AE-%E4%B8%BAgoogle%E6%B7%BB%E5%8A%A0%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E6%8C%89%E9%92%AE
// ==/UserScript==

(function() {
    'use strict';

    var hostname = window.location.hostname;

    if(hostname.match(RegExp(/baidu.com/))){

        document.addEventListener ("DOMContentLoaded",show_button_baidu);
        // 在百度结果首页开始添加按钮
        function show_button_baidu () {
            //设置css
            var style = document.createElement("style");
            style.type = "text/css";
            var text = ".btn {float:right; font-size:14px; text-align:center; text-decoration:none; width:80px; line-height:33px; margin:1px 0 0 0; -webkit-appearance:none; -webkit-border-radius:0; border: 0; color:#fff; letter-spacing:1px; background:#4e6ef2; border:1px solid rgba(255,255,255,0.3); outline:medium;}";
            text = text + ".btn .llst {display:none; width:100px; height:35px; float:left; background-color:rgba(255,255,255,0.1); }";
            text = text + ".btn:hover {background:#3385ff; width:100px; padding-bottom:10px;}";
            text = text + ".btn:hover .llst {display:block; }";
            text = text + ".bbtn {height:35px; width:99px; background-color:rgba(255,255,255,0.1); border:none; color:white; }";
            text = text + ".bbtn:hover {background-color:rgba(255,255,255,0.3);}";
            style.innerHTML = text;
            $(".s_form_wrapper").append(style);

            //添加其他搜索按钮
            var schText = '<div class="btn" style="margin-left:10px;">搜索';
            schText = schText + '<div class="llst"><button class="bbtn" id="bing">Bing</div>';
            schText = schText + '<div class="llst"><button class="bbtn" id="google">Google</div>';
            schText = schText + '<div class="llst"><button class="bbtn" id="ggImg1">谷歌镜像-1</div>';
            schText = schText + '<div class="llst"><button class="bbtn" id="ggImg2">谷歌镜像-2</div>';
            schText = schText + '<div class="llst"><button class="bbtn" id="ggImg3">谷歌镜像-3</div>';
            schText = schText + '<div class="llst"><button class="bbtn" id="ggImg4">谷歌镜像-4</div>';
            schText = schText + '<div class="llst"><button class="bbtn" id="ggImg5">谷歌镜像-5</div>';
            schText = schText + '</div>';
            $('.s_btn_wr,#s_btn_wr').after(schText);
            $("#bing").click(function(){ window.open('https://cn.bing.com/search?q=' + encodeURIComponent($('#kw').val())); });
            $("#google").click(function(){ window.open('https://www.google.com/ncr?gws_rd=ssl#newwindow=1&q=' + encodeURIComponent($('#kw').val())); });
            $("#ggImg1").click(function(){ window.open('https://g.zeit.fun/search?q=' + encodeURIComponent($('#kw').val())); });
            $("#ggImg2").click(function(){ window.open('https://g.jnkip.cn/search?q=' + encodeURIComponent($('#kw').val())); });
            $("#ggImg3").click(function(){ window.open('https://soo.panda321.com/search?q=' + encodeURIComponent($('#kw').val())); });
            $("#ggImg4").click(function(){ window.open('https://gl.ry4.me/search?q=' + encodeURIComponent($('#kw').val())); });
            $("#ggImg5").click(function(){ window.open('http://map.cnmaps.cn/search?q=' + encodeURIComponent($('#kw').val())); });
            // 结束

            //添加社区搜索按钮
            var socialText = '<div class="btn" style="margin-left:10px;">社区';
            socialText = socialText + '<div class="llst"><button class="bbtn" id="zhihu">知乎</div>';
            socialText = socialText + '<div class="llst"><button class="bbtn" id="weibo">weibo</div>';
            socialText = socialText + '<div class="llst"><button class="bbtn" id="douban">豆瓣</div>';
            socialText = socialText + '</div>';
            $('.s_btn_wr,#s_btn_wr').after(socialText);
            $("#zhihu").click(function(){ window.open('https://www.zhihu.com/search?type=content&q=' + encodeURIComponent($('#kw').val())); });
            $("#weibo").click(function(){ alert("敬请期待"); });
            $("#douban").click(function(){ window.open('https://www.douban.com/search?q=' + encodeURIComponent($('#kw').val())); });
            // 结束

            //添加视频搜索按钮
            var videoText = '<div class="btn" style="margin-left:10px;">视频';
            videoText = videoText + '<div class="llst"><button class="bbtn" id="bili">Bilibili</div>';
            videoText = videoText + '<div class="llst"><button class="bbtn" id="txvideo">腾讯视频</div>';
            videoText = videoText + '<div class="llst"><button class="bbtn" id="iqiyi">爱奇艺</div>';
            videoText = videoText + '<div class="llst"><button class="bbtn" id="youku">优酷</div>';
            videoText = videoText + '</div>';
            $('.s_btn_wr,#s_btn_wr').after(videoText);
            $("#bili").click(function(){ window.open('https://search.bilibili.com/all?keyword=' + encodeURIComponent($('#kw').val())); });
            $("#txvideo").click(function(){ window.open('https://v.qq.com/x/search/?q=' + encodeURIComponent($('#kw').val())); });
            $("#iqiyi").click(function(){ window.open('https://so.iqiyi.com/so/q_' + encodeURIComponent($('#kw').val())); });
            $("#youku").click(function(){ window.open('https://so.youku.com/search_video/q_' + encodeURIComponent($('#kw').val())); });
            // 结束

            //添加学术搜索按钮
            var scholarText = '<div class="btn" style="margin-left:10px;">学术';
            scholarText = scholarText + '<div class="llst"><button class="bbtn" id="cnki">中国知网</div>';
            scholarText = scholarText + '<div class="llst"><button class="bbtn" id="ggScholar">谷歌学术</div>';
            scholarText = scholarText + '<div class="llst"><button class="bbtn" id="ggSImg1">学术镜像-1</div>';
            scholarText = scholarText + '<div class="llst"><button class="bbtn" id="ggSImg2">学术镜像-2</div>';
            scholarText = scholarText + '<div class="llst"><button class="bbtn" id="qichacha">企查查</div>';
            scholarText = scholarText + '</div>';
            $('.s_btn_wr,#s_btn_wr').after(scholarText);
            $("#cnki").click(function(){ window.open('https://kns8.cnki.net/kns/defaultresult/index?kw=' + encodeURIComponent($('#kw').val())); });
            $("#ggScholar").click(function(){ alert("敬请期待"); });
            $("#ggSImg1").click(function(){ window.open('https://scholar.lanfanshu.cn/scholar?q=' + encodeURIComponent($('#kw').val())); });
            $("#ggSImg2").click(function(){ window.open('https://sc.panda321.com/scholar?q=' + encodeURIComponent($('#kw').val())); });
            $("#qichacha").click(function(){ window.open('https://www.qcc.com/search?key=' + encodeURIComponent($('#kw').val())); });
            // 结束
        }
    }


    if(hostname.match(RegExp(/google.com/))){
        //Google上添加百度搜索
        document.addEventListener ("DOMContentLoaded", show_button_google);
        function show_button_google () {
            var url_baidu = "https://www.baidu.com/s?wd=" + encodeURIComponent($(".gLFyf.gsfi:first").val()) + "&from=TsingScript";
            $(".RNNXgb:first").append('<div style="display:inline-block; height:100%; width:0px; box-sizing: border-box; border-radius:30px;"><button id="google++" type="button" style="height:100%; width:100%; border:none; outline:none; border-radius:30px; font-size:15px; cursor:pointer; display:block; float:left; font-size:14px; text-align:center; text-decoration:none; width:100px;  margin-left:30px; color:#fff; letter-spacing:1px; background:#3385ff; " onclick="window.open(\''+ url_baidu + '\')" title="使用百度搜索引擎检索该关键词">百度一下</button></div>');
            $(".gLFyf.gsfi:first").change(function(){
                var url_baidu_new = "https://www.baidu.com/s?wd=" + encodeURIComponent($(".gLFyf.gsfi:first").val()) + "&from=TsingScript";
                $("#google++").attr('onclick','window.open("'+ url_baidu_new + '")');
            });
        }
    }; // 结束
})();