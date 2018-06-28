
/**
 login_info是一个对象，包含wxtoken、jobnetid、checkstr
 */
function set_login_info(userid, checkstr) {
	var obj = new Object();
	obj.userid = userid;
	obj.checkstr = checkstr;

	//json对象转字符串
	var obj_str = JSON.stringify(obj);
	console.log("设置登录信息：" + obj_str);

	//缓存返回数据
	localStorage.setItem("login_info", obj_str);
}
/**
 获取本地存储的登录成功信息
 返回的是login_info对象
 */
function get_login_info() {

	//缓存返回数据
	var login_info = localStorage.getItem("login_info");
	//console.log("获取登录信息：" + login_info);

	var obj = JSON.parse(login_info);
	
	if ((obj == null)	 || (!obj.userid) || (!obj.checkstr)) {
		location.href = "login.html";
	}

	return obj;

}

/**
 判断用户是否登录
 */
function is_user_login() {

	//缓存返回数据
	var login_info = localStorage.getItem("login_info");

	//console.log("获取登录信息：" + login_info);
	//字符串中解析出json 对象
	var obj = JSON.parse(login_info);
	if ((obj == null) || (obj.userid == null) || (obj.checkstr == null)) {
		return false;
		}

	return true;
}

/**
 清除本地存储的登录成功信息
 返回的是login_info对象
 */
function del_login_info() {

	//缓存返回数据
	localStorage.removeItem("login_info");

	location.href = "center.html";
	
}


