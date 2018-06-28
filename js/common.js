/* jQuery cookie 操作*/
jQuery.cookie = function (key, value, options) {
    if (arguments.length > 1 && (value === null || typeof value !== "object")){
        options = jQuery.extend({}, options);
        if (value === null) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number'){
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '',
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
/** laytpl-v1.1 */

;!function(){"use strict";var f,b={open:"{{",close:"}}"},c={exp:function(a){return new RegExp(a,"g")},query:function(a,c,e){var f=["#([\\s\\S])+?","([^{#}])*?"][a||0];return d((c||"")+b.open+f+b.close+(e||""))},escape:function(a){return String(a||"").replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")},error:function(a,b){var c="Laytpl Error：";return"object"==typeof console&&console.error(c+a+"\n"+(b||"")),c+a}},d=c.exp,e=function(a){this.tpl=a};e.pt=e.prototype,e.pt.parse=function(a,e){var f=this,g=a,h=d("^"+b.open+"#",""),i=d(b.close+"$","");a=a.replace(/[\r\t\n]/g," ").replace(d(b.open+"#"),b.open+"# ").replace(d(b.close+"}"),"} "+b.close).replace(/\\/g,"\\\\").replace(/(?="|')/g,"\\").replace(c.query(),function(a){return a=a.replace(h,"").replace(i,""),'";'+a.replace(/\\/g,"")+'; view+="'}).replace(c.query(1),function(a){var c='"+(';return a.replace(/\s/g,"")===b.open+b.close?"":(a=a.replace(d(b.open+"|"+b.close),""),/^=/.test(a)&&(a=a.replace(/^=/,""),c='"+_escape_('),c+a.replace(/\\/g,"")+')+"')}),a='"use strict";var view = "'+a+'";return view;';try{return f.cache=a=new Function("d, _escape_",a),a(e,c.escape)}catch(j){return delete f.cache,c.error(j,g)}},e.pt.render=function(a,b){var e,d=this;return a?(e=d.cache?d.cache(a,c.escape):d.parse(d.tpl,a),b?(b(e),void 0):e):c.error("no data")},f=function(a){return"string"!=typeof a?c.error("Template not found"):new e(a)},f.config=function(a){a=a||{};for(var c in a)b[c]=a[c]},f.v="1.1","function"==typeof define?define(function(){return f}):"undefined"!=typeof exports?module.exports=f:window.laytpl=f}();

/* 简单的消息弹出层 */
var motify = {
	timer:null,
	/*shade 为 object调用 show为true显示 opcity 透明度*/
	log:function(msg,time,shade){
		$('.motifyShade,.motify').hide();
		if(motify.timer) clearTimeout(motify.timer);
		if($('.motify').size() > 0){
			$('.motify').show().find('.motify-inner').html(msg);
		}else{
			$('body').append('<div class="motify" style="display:block;"><div class="motify-inner">'+msg+'</div></div>');
		}
		if(shade && shade.show){
			if($('.motifyShade').size() > 0){
				$('.motifyShade').css({'background-color':'rgba(0,0,0,'+(shade.opcity ? shade.opcity : '0.3')+')'}).show();
			}else{
				$('body').append('<div class="motifyShade" style="display:block;background-color:rgba(0,0,0,'+(shade.opcity ? shade.opcity : '0.3')+');"></div>');
			}
		}
		if(typeof(time) == 'undefined'){
			time = 3000;
		}
		if(time != 0){
			motify.timer = setTimeout(function(){
				$('.motify').hide();
			},time);
		}
	},
	clearLog:function(){
		$('.motifyShade,.motify').hide();
	},
	checkMobile:function(){
		if(/(iphone|ipad|ipod|android|windows phone)/.test(navigator.userAgent.toLowerCase())){
			return true;
		}else{
			return false;
		}
	},
    checkIos:function(){
        if(/(iphone|ipad|ipod)/.test(navigator.userAgent.toLowerCase())){
            return true;
        }else{
            return false;
        }
    },
    checkAndroid:function(){
        if(/(android)/.test(navigator.userAgent.toLowerCase())){
            return true;
        }else{
            return false;
        }
    },
	checkWeixin:function(){
		if(/(micromessenger)/.test(navigator.userAgent.toLowerCase())){
			return true;
		}else{
			return false;
		}
	},
    checkApp:function(){
        if(/(pigcmso2olifeapp)/.test(navigator.userAgent.toLowerCase()) || /(pigcmso2oreallifeapp)/.test(navigator.userAgent.toLowerCase())){
            return true;
        }else{
            return false;
        }
    },
	checkLifeApp:function(){
        if((/(pigcmso2olifeapp)/.test(navigator.userAgent.toLowerCase()) && /(life_app)/.test(navigator.userAgent.toLowerCase())) || /(pigcmso2oreallifeapp)/.test(navigator.userAgent.toLowerCase())){
			return true;
		}else{
			return false;
		}
    },
	getLifeAppVersion:function(){
		var reg = /versioncode=(\d+),/;
		var arr = reg.exec(navigator.userAgent.toLowerCase());
		if(arr == null){
			return 0;
		}else{
			return parseInt(arr[1]);
		}
	},
	getAndroidVersion:function(){
		var index = navigator.userAgent.indexOf("Android");
		if(index >= 0){
			var androidVersion = parseFloat(navigator.userAgent.slice(index+8));
			if(androidVersion > 1){
				return androidVersion;
			}else{
				return 100;
			}
		}else{
			return 100;
		}
	}
};
/*修复Iscroll高版本安卓无法点击*/
function iScrollClick(){
	if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
	if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
	if (/Silk/i.test(navigator.userAgent)) return false;
	if (/Android/i.test(navigator.userAgent)) {
	   var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
	   return parseFloat(s[0]+s[3]) < 44 ? false : true
    }
}

var voiceBtmTimer =null,voiceLocalId=0;
$(function(){
	FastClick.attach(document.body);
	/*如果页面没有底部导航，修改样式*/
	if($('.footerMenu').size() == 0){
		$('body').css({'padding-bottom':'0px'});
		$('#container').css({bottom:'0px'});
	}
	if(motify.getAndroidVersion() < 4 && $.cookie('lowPhoneVersion') == null){
		if(confirm('您使用的手机安卓版是 '+motify.getAndroidVersion()+'，低于安卓4.0版本，我们为您提供了更流畅的版本！请问是否需要切换？下次访问会重新询问。')){
			$.cookie('lowPhoneVersion','1');
			window.location.reload();
		}else{
			$.cookie('lowPhoneVersion','2');
		}
	}
	// alert(navigator.platform);
	// alert(navigator.userAgent);
	/*语音事件 start*/
	$('.voiceBtn').click(function(e){
		$('body').append('<div class="voiceContainer"><div class="close"></div><div class="title">请大声说出您想要找什么</div><div class="content"><div class="tip">点击按钮开始录音</div><div class="btn"></div></div><div class="searchBtm1"></div><div class="searchBtm2"></div></div>');
		$('.searchBtm1').css({'background-size':$('.searchBtm1').width()+'px '+$('.searchBtm1').height()+'px'});
		$('.searchBtm2').css({'background-size':$('.searchBtm2').width()+'px '+$('.searchBtm2').height()+'px'});

		$('.voiceContainer .close').click(function(){
			if(voiceBtmTimer){
				clearInterval(voiceBtmTimer);
			}
			$('.voiceContainer').remove();
			if($('.voiceContainer .btn').hasClass('start')){
				endVoice();
			}
		});
		$('.voiceContainer .btn').click(function(){
			if($(this).hasClass('start')){
				$('.voiceContainer .tip').html('点击按钮开始录音');
				$(this).removeClass('start');
				clearInterval(voiceBtmTimer);
				endVoice();
			}else{
				beginVoice();
			}
		});
		return false;
	});
	$('.footerMenu li a').click(function(e){
		if($(this).hasClass('active')){
			return false;
			e.stopPropagation();
		}
	});
	/*语音事件 end*/
	
	/*页面点击事件*/
	$(document).on('click','.link-url',function(){
		if(typeof(noAnimate) == "undefined"){
			redirect($(this).data('url'),$(this).data('url-type'));
			return false;
		}else{
			window.location.href = $(this).data('url');
		}
	});
	
	/*A标签*/
	$(document).on('click','a',function(){
		if($(this).data('nobtn')){
			return false;
		}
		if(typeof(noAnimate) == "undefined"){
			var href = $(this).attr('href');
			if(href && href.substr(0,3) != 'tel' && href.substr(0,10) != 'javascript'){
				redirect(href,$(this).data('url-type'));
				return false;
			}
		}
	});
	
	/*电话按钮事件*/
	// if($('.phone').size() > 0){
		$(document).on('click','.phone',function(event){
			if($(this).attr('data-phone')){
				var tmpPhone = $(this).attr('data-phone').split(' ');
				var bg_height = $('body').height()>$(window).height() ? $('body').height() : $(window).height();
				var msg_dom = '<div class="msg-bg" style="height:'+bg_height+'px;"></div>';
				msg_dom+= '<div id="msg" class="msg-doc msg-option">';
				msg_dom+= '<div class="msg-bd">'+($(this).data('phonetitle') ? $(this).data('phonetitle') : '拨打电话')+'</div>';
				for(var i in tmpPhone){
					msg_dom+= '		<div class="msg-option-btns"><a class="btn msg-btn" href="tel:'+tmpPhone[i]+'">'+(tmpPhone.length == 1 && $(this).data('phonetip') ? $(this).data('phonetip') : tmpPhone[i])+'</a></div>';
				}
				msg_dom+= '		<button class="btn msg-btn-cancel" type="button">取消</button>';
				msg_dom+= '</div>';	
				$('body').append(msg_dom);
			}
			event.stopPropagation();
		});
		$(document).on('click','.msg-btn-cancel',function(){
			$('.msg-doc,.msg-bg').remove();
		});
	// }
	
	$('body').append('<div id="pageLoadTip" style="display:none;"><div></div></div>');
});

/*
 * 微信开始录音
 */
function beginVoice(){
	wx.startRecord({
		success: function (res){
			$('.voiceContainer .tip').html('点击按钮结束录音');
			$('.voiceContainer .btn').addClass('start');
			var voiceBtmNumber = 0;
			voiceBtmTimer = setInterval(function(){
				if(voiceBtmNumber%5 < 3){
					$('.searchBtm1').css({left:(parseInt($('.searchBtm1').css('left'))-1)+'px'});
				}else{
					$('.searchBtm2').css({left:(parseInt($('.searchBtm2').css('left'))-1)+'px'});
				}
				voiceBtmNumber += 1;
			},15);
			
		},
		fail: function (res){
			if(res.errMsg == 'startRecord:system permission denied'){
				motify.log('您拒绝了授权录音');
			}else{
				motify.log('未成功调用录音');
			}
		},
		cancel: function(){
			motify.log('您拒绝了授权录音');
		}
	});
}

/*
 * 微信结束录音
 */
function endVoice(){
	wx.stopRecord({
		success: function (res) {
			voiceLocalId = res.localId;
			// alert(voiceLocalId);
			/* wx.playVoice({
				localId: voiceLocalId // 需要播放的音频的本地ID，由stopRecord接口获得
			}); */
			wx.translateVoice({
				localId: voiceLocalId, // 需要识别的音频的本地Id，由录音相关接口获得
				isShowProgressTips: 1, // 默认为1，显示进度提示
				success: function (res) {
					if(res.translateResult){
						res.translateResult = res.translateResult.replace('。','');
						motify.log('<div style="color:#06c1ae;">'+res.translateResult+'</div>正在为您查询...',0); // 语音识别的结果
						window.location.href = window.location.pathname+'?c=Search&a=group&w='+encodeURIComponent(res.translateResult);
					}else{
						motify.log('没有听出您说了什么，请重试');
					}
				},fail: function (res) {
					motify.log('无法识别该段语音，请重试');
				}
			});
		},fail: function (res) {
			
		}
	});
}
 
 
/*
 * 跳转页面
 * （默认页面往左滑动，即 openRightWindow）
 * （页面往右滑动，即 openLeftWindow）
 */
function redirect(url,type){
	var animateCss = {},animateAfterCss = {};
	if(!type){
		type = 'openRightWindow';
	}
	switch(type){
		case 'openRightWindow':
			animateCss = {'left':'-'+$(window).width()+'px'};
			animateAfterCss = {'left':'0px'};
			break;
		case 'openLeftWindow':
			animateCss = {'left':$(window).width()+'px'};
			animateAfterCss = {'left':'0px'};
			break;
	}
	$('#scroller,.footerMenu,.pageSliderHide').animate(animateCss,function(){
		pageLoadTip();
		window.addEventListener("pagehide", function(){
			$('#scroller,.footerMenu,.pageSliderHide').css(animateAfterCss);
			pageLoadTipHide();
		},false);
		window.location.href = url;
	});
}
/*页面加载提示*/
function pageLoadTip(msg){
	var defaultMsg='',top=0;	//'加载中...'
	//如果msg是数字，则是top的值！是字符串就是消息
	if(typeof(msg) == 'number'){
		top = msg;
		msg = defaultMsg;
	}else if(!msg){
		top = 0;
		msg = defaultMsg;
	}
	$('#pageLoadTip').css({top:top+'px','display':'block'}).find('div').css({'margin-top':(($(window).height()-100-top)/2)+'px'}).html(msg);
	// $('body').append('<div id="pageLoadTip" style="top:'+top+'px;"><div style="margin-top:'+(($(window).height()-100-top)/2)+'px;">'+msg+'</div></div>');
}
function pageLoadTipHide(){
	// $('#pageLoadTip').remove();
	$('#pageLoadTip').hide();
}

/*
 *
 *获得用户经纬度方法
 *
 * 无返回值！如果需要返回值，只能使用 okFunction 调用其他方法
 *
*/
function getUserLocation(options){
	this.options = {
		'useHistory':true,				//boolean 是否使用历史数据
		'historyTime':120,				//number  使用历史数据的时效，也是保存数据的有效期
		'okFunction':false,				//string 得到位置之后调用的方法， refresh 代表刷新页面
		'okFunctionParam':[],		//array 调用方法的自定义参数，以数组形式传参！系统参数：
		'errorFunction':false,			//string 没得到位置调用的方法， refresh 代表刷新页面
		'errorFunctionParam':[],		//array 调用方法的自定义参数，以数组形式传参！系统参数：
		'errorAction':1,				//number 1代表给指定“errorTipTime”参数时间内的提示，2代表弹层给出确认按钮的提示后跳转“errorUrl”（需要自行加载layer.js支持），3代表直接跳转到URL，4代表不提示
		'errorUrl':'',					//string errorAction 等于2或3时生效，值 history 代表上一页 值  href 代表刷新当前页面
		'errorTipTime':3,				//number  给有效时间提示的时间 	0代表长时间存在
		'errorTipTitle':'错误提示：',	//string errorAction 等于2生效
		'errorContentSuffix':'',	//string errorAction 等于2生效
		'errorShade':false,				//boolean errorAction 等于1时，是否开启遮罩层
		'reportLocation':true,			//boolean 是否上报用户地理位置，默认开启
		'okFunctionReport':true			//boolean 是否在上报用户地理位置成功后再执行方法，在 reportLocation为true时生效
	}
	for (var i in options){
		this.options[i] = options[i];
	}
	options = this.options;
	if(options.useHistory && $.cookie('userLocationLong') && $.cookie('userLocationLat')){
		options['userLocation'] = $.cookie('userLocation');
		options['userLocationLong'] = $.cookie('userLocationLong');
		options['userLocationLat'] = $.cookie('userLocationLat');
		locationOkFun(options);
		return false;
	}
	if(typeof(wxSdkLoad) != "undefined"){
		wx.ready(function () {
			wx.getLocation({
				type: 'wgs84',
				success: function (res) {
					var userLat = res.latitude;
					var userLong = res.longitude;
					options['userLocation'] = userLong+','+userLat;
					options['userLocationLong'] = userLong;
					options['userLocationLat'] = userLat;
					//通过 cookie 记录用户的经纬度，不通过H5的本地存储方便PHP调用
					var expire =  new Date();
					expire.setTime(expire.getTime() + options.historyTime*1000);
					options.historyTime = expire;
					$.cookie('userLocation',options['userLocation'],{expires:options.historyTime,path:'/'});
					$.cookie('userLocationLong',options['userLocationLong'],{expires:options.historyTime,path:'/'});
					$.cookie('userLocationLat',options['userLocationLat'],{expires:options.historyTime,path:'/'});
					$.cookie('userLocationHasRecord',0,{expires:options.historyTime,path:'/'});
					
					if(options.reportLocation){
						$.post(window.location.pathname+'?c=Userlonglat&a=report',{userLong:userLong,userLat:userLat},function(){
							if(options.okFunctionReport){
								locationOkFun(options);
							}
						});
						if(!options.okFunctionReport){
							locationOkFun(options);
						}
					}else{
						locationOkFun(options);
					}
				},
				fail: function(res){
					locationErorrTip(res.errMsg);
				},
				cancel: function(res){
					if(res.errMsg == 'getLocation:cancel'){
						options['errorMsg'] = '获取位置信息失败,用户拒绝请求地理定位';
					}
					locationErorrTip(options);
				}
			});
		});
	}else if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			var userLong = position.coords.longitude.toFixed(6);
			var userLat  = position.coords.latitude.toFixed(6);
			options['userLocation'] = userLong+','+userLat;
			options['userLocationLong'] = userLong;
			options['userLocationLat'] = userLat;
			//通过 cookie 记录用户的经纬度，不通过H5的本地存储方便PHP调用
			var expire =  new Date();
			expire.setTime(expire.getTime() + options.historyTime*1000);
			options.historyTime = expire;
			$.cookie('userLocation',options['userLocation'],{expires:options.historyTime,path:'/'});
			$.cookie('userLocationLong',options['userLocationLong'],{expires:options.historyTime,path:'/'});
			$.cookie('userLocationLat',options['userLocationLat'],{expires:options.historyTime,path:'/'});
			$.cookie('userLocationHasRecord',0,{expires:options.historyTime,path:'/'});
			
			if(options.reportLocation){
				$.post(window.location.pathname+'?c=Userlonglat&a=report',{userLong:userLong,userLat:userLat},function(){
					if(options.okFunctionReport){
						locationOkFun(options);
					}
				});
				if(!options.okFunctionReport){
					locationOkFun(options);
				}
			}else{
				locationOkFun(options);
			}
		},function(error){
			switch (error.code){
				case error.PERMISSION_DENIED:
					options['errorMsg'] = '获取位置信息失败,用户拒绝请求地理定位';
					break; 
				case error.POSITION_UNAVAILABLE:
					options['errorMsg'] = '获取位置信息失败,位置信息不可用';
					break; 
				case error.TIMEOUT:
					options['errorMsg'] = '获取位置信息失败,请求获取用户位置超时';
					break; 
				case error.UNKNOWN_ERROR:
					options['errorMsg'] = '获取位置信息失败,定位系统失效';
					break;
			}
			locationErorrTip(options);
		},{enableHighAccuracy:true});
	}else{
		options['errorMsg'] = '获取位置失败,用户浏览器不支持或已禁用位置获取权限';
		locationErorrTip(options);
	}
	function locationOkFun(options){
		if(options.okFunction){
			if(options.okFunction == 'refresh'){
				window.location.reload();
			}else{
				options.okFunctionParam.push(options.userLocation);
				options.okFunctionParam.push(options.userLocationLong);
				options.okFunctionParam.push(options.userLocationLat);
				call_user_func(options.okFunction,options.okFunctionParam);
			}
		}
	}
	function locationErorrTip(options){
		if(options.errorMsg && options.errorContentSuffix){
			options.errorMsg = options.errorMsg + '<br/>' + options.errorContentSuffix;
		}
		if(options.errorFunction){
			if(options.errorFunction == 'refresh'){
				window.location.reload();
			}else{
				options.errorFunctionParam.push(options.errorMsg);
				call_user_func(options.errorFunction,options.errorFunctionParam);
			}
		}else{
			if(options.errorMsg){
				switch(options.errorAction){
					case 1:
						motify.log(options.errorMsg,options.errorTipTime*1000,(options.errorShade ? {show:true} : null));
						break;
					case 2:
						layer.open({
							title:[options.errorTipTitle,'background-color:#FF658E;color:#fff;'],
							content:options.errorMsg,
							btn: ['确定'],
							end:function(){
								if(options.errorUrl != ''){
									if(options.errorUrl == 'history'){
										window.history.go(-1);
									}else if(options.errorUrl == 'href'){
										window.location.reload();
									}else{
										window.location.href=options.errorUrl;
									}
								}
							}
						});
						break;
					case 3:
						if(options.errorUrl != ''){
							if(options.errorUrl == 'history'){
								window.history.go(-1);
							}else if(options.errorUrl == 'href'){
								window.location.reload();
							}else{
								window.location.href=options.errorUrl;
							}
						}else{
							motify.log('调用了“直接跳转URL”，却没有传URL地址',0);
						}
						break;
				}
			}
		}	
	}
}

function geoconv(funName,lng,lat){
	$.getJSON('http://api.map.baidu.com/geoconv/v1/?coords='+lng+','+lat+'&ak=4c1bb2055e24296bbaef36574877b4e2&from=1&to=5&callback='+funName+'&jsoncallback=?');
}
function geocoder(funName,lng,lat){
	$.getJSON('http://api.map.baidu.com/geocoder/v2/?location='+lat+','+lng+'&ak=4c1bb2055e24296bbaef36574877b4e2&output=json&pois=1&callback='+funName+'&jsoncallback=?');
}
/* 得到经纬度之间的距离 */
function Rad(d){
   return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
}
//输出为米
function GetDistance(lng1,lat1,lng2,lat2){
	var radLat1 = Rad(lat1);
	var radLat2 = Rad(lat2);
	var a = radLat1 - radLat2;
	var  b = Rad(lng1) - Rad(lng2);
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
	Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
	s = s *6378.137 ;// EARTH_RADIUS;
	s = Math.round(s * 10000) / 10; //输出为公里
	return s;
}
	
/*调用JS 自定义方法并带参数*/
function call_user_func(cb, options){
	func = window[cb];
	func.apply(cb,options);
}
/* function alerts(params,params2){
	console.log(arguments);
}
call_user_func('alerts',['1111','22222']); */

function parseCoupon(obj,type){
	var returnObj = {};
	for(var i in obj){
		if(typeof(obj[i]) == 'object'){
			returnObj[i] = [];
			for(var j in obj[i]){
				returnObj[i].push('满'+obj[i][j].money+'元减'+obj[i][j].minus+'元');
			}
		}else if(i=='invoice'){
			returnObj[i] = '满'+obj[i]+'元支持开发票，请在下单时填写发票抬头';
		}else if(i=='discount'){
			returnObj[i] = '店内全场'+obj[i]+'折';
		}
	}
	var textObj = [];
	for(var i in returnObj){
		if(typeof(returnObj[i]) == 'object'){
			switch(i){
				case 'system_newuser':
					textObj[i] = '平台首单'+returnObj[i].join(',');
					break;
				case 'system_minus':
					textObj[i] = '平台优惠'+returnObj[i].join(',');
					break;
				case 'newuser':
					textObj[i] = '店铺首单'+returnObj[i].join(',');
					break;
				case 'minus':
					textObj[i] = '店铺优惠'+returnObj[i].join(',');
					break;
				case 'system_minus':
					textObj[i] = '平台优惠'+returnObj[i].join(',');
					break;
				case 'delivery':
					textObj[i] = '配送费'+returnObj[i].join(',');
					break;
			}
		}else if(i=='invoice' || i=='discount'){
			textObj[i] = returnObj[i];
		}
	}
	if(type == 'text'){
		var tmpObj = [];
		for(var i in textObj){
			tmpObj.push(textObj[i]);
		}
		return tmpObj.join(';');
	}else{
		return textObj;
	}
}