// ajax01({
// 	"url":"getMusic.php",
// 	"method":"get",
// 	"params":{
// 		musicname:"你是"
// 	},
// 	"func":function(){

// 	},
// 	"isAsync":true
// });

// ajax01({
// 	"url":"getMusic.php",
// 	"params":{
// 		musicname:"你是"
// 	},
// 	"func":function(){

// 	}
// });

function ajax01(obj){
	let defaultObj = {
		"url":"#",
		"method":"get",
		"params":{},
		"func":null,
		"isAsync":true
	};

	let ajaxObj={};
	for(let key in defaultObj){
		ajaxObj[key] = obj[key] || defaultObj[key];
	}

	let xhr = new XMLHttpRequest();

	let sendstr="";
	for(let key in ajaxObj.params){
		sendstr+=`${key}=${ajaxObj.params[key]}&`;
	}
	if(sendstr.length>0){
		sendstr=sendstr.substring(0,sendstr.length-1);
	}

	let urlAnd = ajaxObj.url;
	if(ajaxObj.method.toLowerCase()=="get" && sendstr!=""){
		urlAnd+="?"+sendstr;
	}

	xhr.open(ajaxObj.method,urlAnd,ajaxObj.isAsync);

	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			//调用回调函数（如下的 && 表示，逻辑短路，如果func是真，才调用func函数）
			ajaxObj.func&&ajaxObj.func(xhr.responseText);
		}
	}

	if(ajaxObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(sendstr);
	}else{
		xhr.send();
	}
}