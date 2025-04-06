//값이 null이면 true(경고창에 메세지 띄움)
function isNull(obj, msg) {
	if (obj.value == "") {
		if (msg) {
			alert(msg);
		}
		obj.focus();
		return true;
	}
	return false;
}
//숫자이면 true리턴, 숫자아니면 false
function isNumber(obj) {
	var str = obj.value;
	if (str.length == 0)
		return false;

	for (var i = 0; i < str.length; i++) {
		if (!('0' <= str.charAt(i) && str.charAt(i) <= '9'))
			return false;
	}
	return true;
}
//두개의 값이 같으면 true
function isSame(obj1, obj2) {
	var str1 = obj1.value;
	var str2 = obj2.value;
	if (str1.length == 0 || str2.length == 0)
		return false;

	if (str1 == str2)
		return true;
	return false;
}

// function isSame(a, b) {
// 	return a === b;
// }

function check(xx) {
	if (!isSame(xx.user_pwd, xx.user_pwd2)) {
		alert("비번이 동일하지 않습니다");
		return false;
	}
	return true;
}

//전달된obj가 len값보다 작으면 true (경고창)
function isShort(obj, len, msg) {
	var str = obj.value;
	if (str.length < len) {
		if (msg) {
			alert(msg);
		}
		obj.focus();
		obj.select();
		return true;
	}
	return false;
}
//영문자이면 true
function isAlphabet(obj) {
	var str = obj.value;
	if (str.length == 0)
		return false;

	str = str.toUpperCase();
	for (var i = 0; i < str.length; i++) {
		if (!('A' <= str.charAt(i) && str.charAt(i) <= 'Z'))
			return false;
	}
	return true;
}
//영문자 이거나 숫자이면 true
function isAlphaNumeric(obj) {
	var str = obj.value;
	if (str.length == 0)
		return false;

	str = str.toUpperCase();
	for (var i = 0; i < str.length; i++) {
		if (!(('A' <= str.charAt(i) && str.charAt(i) <= 'Z') ||
			('0' <= str.charAt(i) && str.charAt(i) <= '9')))
			return false;
	}
	return true;
}
//첫글자는 영문자, 영문자,숫자,_ 이면 true
function isID(obj) {
	var str = obj.value;
	if (str.length == 0)
		return false;

	str = str.toUpperCase();
	if (!('A' <= str.charAt(0) && str.charAt(0) <= 'Z'))
		return false;

	for (var i = 1; i < str.length; i++) {
		if (!(('A' <= str.charAt(i) && str.charAt(i) <= 'Z') ||
			('0' <= str.charAt(i) && str.charAt(i) <= '9') ||
			(str.charAt(i) == '_')))
			return false;
	}
	return true;
}
//@ . 포함되어 있으면 true
function isEmail(obj) {
	var str = obj.value;
	if (str == "")
		return false;

	var i = str.indexOf("@");
	if (i < 0)
		return false;

	i = str.indexOf(".");
	if (i < 0)
		return false;
	return true;
}
//신용카드의 16자리, 숫자이면 true;
function isCardNumber(obj) {
	var str = obj.value;
	if (str.length != 16)
		return false;

	for (var i = 0; i < 16; i++) {
		if (!('0' <= str.charAt(i) && str.charAt(i) <= '9'))
			return false;
	}
	return true;
}
//주민등록번호 체크값이 마지막자리와 일치하면 true;
function isSSN(front, back) {
	var birthday = front.value;
	var num = back.value;

	if (birthday.length != 6) {
		return false;
	}
	if (num.length != 7) {
		return false;
	}
	var hap = 0;
	for (var i = 0; i < 6; i++) {
		var temp = birthday.charAt(i) * (i + 2);
		hap += temp;
	}

	var n1 = num.charAt(0);
	var n2 = num.charAt(1);
	var n3 = num.charAt(2);
	var n4 = num.charAt(3);
	var n5 = num.charAt(4);
	var n6 = num.charAt(5);
	var n7 = num.charAt(6);

	hap += n1 * 8 + n2 * 9 + n3 * 2 + n4 * 3 + n5 * 4 + n6 * 5;
	hap %= 11;
	hap = 11 - hap;
	hap %= 10;
	if (hap != n7)
		return false;
	return true;
}

function check(xx) {
	//1) id에 첫글자영어,영어,숫자,_아니면 경고창
	if (!isID(xx.id)) {
		alert("id가 적절하지 않습니다.")
		return false;
	}
	//2) pwd에 널이면 암호를 입력해주세요 경고창
	if (isNull(xx.pwd, "암호가 널입니다.")) {
		return false;
	}

	//3) name에 숫자이거나 널이면 경고창
	if (isNumber(xx.name)) {
		alert("이름은 숫자를 입력하시면 안됩니다.");
		return false;
	}
	if (isNull(xx.name)) {
		alert("이름은 널이면 안됩니다");
		return false;
	}
	//4) mail에 email형식이 아니면 경고창
	if (!isEmail(xx.email)) {
		alert("올바른 이메일형식이 아닙니다");
		return false;
	}

	if (!isSSN(xx.front, xx.back)) {
		alert("올바른 주민번호가 아닙니다");
		return false;
	}

	return true;
}