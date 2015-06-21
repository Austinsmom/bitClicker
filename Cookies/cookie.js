

var cookieVal = "cookie value";
document.cookie = "cookie=" + encodeURIComponent(cookieVal);

var getCookie = function() {
	var cookies = document.cookie.split(/;\s*/);
	var pattern = new RegExp("\\b" + name + "=(.*)");
	
	for (var i = 0, l = cookies.length, i < l, i++) {
		var match = cookies[i].match(pattern);
		if (match) {
			return decodeURIComponent(match[i]);
		};
	};
};

getCookie("cookie");