$(function() {
	$(document).on('click', '.hasMore', function() {
		$(this).toggleClass('showMore');
		myScroll.refresh();
		return false;
	});
});

$(document).ready(function () {
	$('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false,
   });
}); 

$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$(".topUp").show();
		} else {
			$(".topUp").hide();
		}
	});
	$(".topUp").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 200);
	});
	$(".foot_more").click(function() {
		$(this).find(".foot_more_pull").toggle();
	});
});		

$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')) {
            $('.grade-eject').removeClass('grade-w-roll');
        } else {
            $('.grade-eject').addClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $(".grade-w>li").click(function(){
        $(".grade-t")
            .css("left","33.48%")
    });
});

$(document).ready(function(){
    $(".grade-t>li").click(function(){
        $(".grade-s")
            .css("left","66.96%")
    });
});

//Brand寮€濮�

$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')) {
            $('.Category-eject').removeClass('grade-w-roll');
        } else {
            $('.Category-eject').addClass('grade-w-roll');
        }
    });
});

$(document).ready(function(){
    $(".Category-w>li").click(function(){
        $(".Category-t")
            .css("left","33.48%")
    });
});

$(document).ready(function(){
    $(".Category-t>li").click(function(){
        $(".Category-s")
            .css("left","66.96%")
    });
});

//Sort寮€濮�

$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')) {
            $('.Sort-eject').removeClass('grade-w-roll');
        } else {
            $('.Sort-eject').addClass('grade-w-roll');
        }
    });
});


//鍒ゆ柇椤甸潰鏄惁鏈夊脊鍑�

$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };

    });
});


//js鐐瑰嚮浜嬩欢鐩戝惉寮€濮�
function grade1(wbj){
    var arr = document.getElementById("gradew").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#eee"
}

function gradet(tbj){
    var arr = document.getElementById("gradet").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    tbj.style.background = "#fff"
}

function grades(sbj){
    var arr = document.getElementById("grades").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}

function Categorytw(wbj){
    var arr = document.getElementById("Categorytw").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#eee"
}

function Categoryt(tbj){
    var arr = document.getElementById("Categoryt").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    tbj.style.background = "#fff"
}

function Categorys(sbj){
    var arr = document.getElementById("Categorys").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}

function Sorts(sbj){
    var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}


function toshare(){
	$(".am-share").addClass("am-modal-active");	
	if($(".sharebg").length>0){
		$(".sharebg").addClass("sharebg-active");
	}else{
		$("body").append('<div class="sharebg"></div>');
		$(".sharebg").addClass("sharebg-active");
	}
	$(".sharebg-active,.share_btn").click(function(){
		$(".am-share").removeClass("am-modal-active");	
		setTimeout(function(){
			$(".sharebg-active").removeClass("sharebg-active");	
			$(".sharebg").remove();	
		},300);
	})
}


(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '现金'
		}, {
			value: '',
			text: '现金+积分'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickerthree');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '车型级别一'
		}, {
			value: '',
			text: '车型级别二'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickerone');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '宝马'
		}, {
			value: '',
			text: '奥迪'
		}, {
			value: '',
			text: '奔驰'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickertwo');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '安徽省'
		}, {
			value: '',
			text: '湖北省'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickerfour');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '商圈一'
		}, {
			value: '',
			text: '商圈二'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickerfive');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '4室及以上'
		}, {
			value: '',
			text: '3室2厅2卫'
		}, {
			value: '',
			text: '3室2厅1卫'
		}, {
			value: '',
			text: '3室1厅1卫'
		}, {
			value: '',
			text: '2室2厅2卫'
		}, {
			value: '',
			text: '1室1厅1卫'
		}, {
			value: '',
			text: '2室1厅1卫'
		}, {
			value: '',
			text: '2室2厅1卫'
		}, {
			value: '',
			text: '1室0厅1卫'
		}, {
			value: '',
			text: '其他'
		}]);
		var showUserPickerButton = doc.getElementById('Huxing');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '限70平米以下'
		}, {
			value: '',
			text: '70平米-90平米'
		}, {
			value: '',
			text: '90平米-110平米'
		}, {
			value: '',
			text: '110平米-150平米'
		}, {
			value: '',
			text: '150平米以上'
		}]);
		var showUserPickerButton = doc.getElementById('Mianji');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '30万以下'
		}, {
			value: '',
			text: '30万-40万'
		}, {
			value: '',
			text: '40万-50万'
		}, {
			value: '',
			text: '50万-70万'
		}, {
			value: '',
			text: '70万-90万'
		}, {
			value: '',
			text: '90万-120万'
		}, {
			value: '',
			text: '120万以上'
		}]);
		var showUserPickerButton = doc.getElementById('Shoujia');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);


(function($, doc) {
	$.init();
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '微信'
		}, {
			value: '',
			text: '支付宝'
		}]);
		var showUserPickerButton = doc.getElementById('Zhifu');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

























