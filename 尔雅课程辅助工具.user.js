// ==UserScript==
// @name       尔雅课程辅助工具
// @author     南国羽
// @namespace  http://www.nanguoyu.com/
// @exclude    http://*.tsk.erya100.com/student/*
// @updateURL  http://www.nanguoyu.com/tool/尔雅课程辅助工具.user.js
// @version    1.2
// @description  尔雅课程辅助：禁用暂停 屏蔽验证码（测试中） 自动跳转下一集
// @match      http://*.tsk.erya100.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_addStyle
// @grant      unsafeWindow
//@run-at    document-end
// @copyright  GPL V3 ,BY-NC-SA 4.0
// ==/UserScript==

//////////////////////////////////////////////////////////

setInterval(function(){$('#eryaPlayer').playMovie();},10);
//禁止暂停
var jss = document.getElementsByTagName("script");
var jsss;
for (var i = 0; i < jss.length; i++) 
{
    jsss = jss[i];
    jsss.src=jsss.src.replace(/4/g,'5');
}
//尝试破坏验证码
try{  
    if(document.all.ocx.object == null) {  
        alert("ActiveX控件不存在，无法自动跳过验证码");
    }else{  
        alert("ActiveX控件已安装,自动跳过验证码");  
        var shell = new ActiveXObject("WScript.Shell");
        shell.SendKeys("{LEFT}");
    }
}  
catch(e){  
    alert("异常调用");
} 
//尝试逃过验证码
cur_video=cur_video+1;
setInterval(function(){goPlay(cur_video);},200000);
//尝试突破验证码
