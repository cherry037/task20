var valueArray = [];
// var zs = /^[0-9]*[1-9][0-9]*$/; 
var st = /[^0-9a-zA-Z\u4e00-\u9fa5]+/;
var fg = /[\s\r\n、,，]+/;
function renderDiv (){
	var divs = document.getElementsByTagName("div");
	divs[0].innerHTML = "";
	for (var i = 0; i < valueArray.length; i++) {
		divs[0].innerHTML = divs[0].innerHTML + "<li>" + valueArray[i] + "</li>";
		}
}
function initIuput (){
	alert("请按规范输入！");
		document.getElementById("in").value = "";
		document.getElementById("in").focus();
}
function leftIn() {
	var texaValue = document.getElementById("in").value.trim();
	if (!st.test(texaValue)) {
		initIuput();
	} else {
		var texArray = texaValue.split(fg);
		for (var i = 0; i < texArray.length; i++) {
			valueArray.unshift(texArray[i]);
		}
		renderDiv();	
	}	
}
function leftOut() {
	valueArray.shift();
	renderDiv();		
}
function rightIn() {
	var texaValue = document.getElementById("in").value.trim();
	if (!st.test(texaValue)) {
		initIuput();
	} else {
		var texArray = texaValue.split(fg);
		for (var i = 0; i < texArray.length; i++) {
			valueArray.push(inputValue);
		}
		renderDiv();
	}		
}
function rightOut() {
	valueArray.pop();
	renderDiv();
}
function search(){
	var searchValue = document.getElementById("search").value.trim();
	for (var i = 0; i < valueArray.length; i++){
		valueArray[i] = valueArray[i].replace(searchValue,"<span>"+searchValue+"</span>");
	}
	renderDiv();
}				
	
buttons = document.getElementsByTagName("button");
window.onload = function(){
	buttons[0].onclick = leftIn;
	buttons[1].onclick = rightIn;
	buttons[2].onclick = leftOut;
	buttons[3].onclick = rightOut;
	buttons[4].onclick = search;
};	
