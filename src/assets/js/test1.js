/*
let $ = {
	http: (url, req) => {
		return new Promise((resolve, reject) => {
			resolve(200);
		});
	}
}

/*
$.http('/usr/add').then(res => {
	console.log(res);
});
*/

let testCases = [{
	url: "/usr/add",
	in: {
		name: "Yanhong",
		gender: "female"
	},
	out: {
		code: 200
	}
}];

if ($) {
	$.http = (url, req) => {
		// console.log('new impl is called');
		return new Promise((resolve, reject) => {
			for (let tcase of testCases) {
				console.log(tcase.url, url);
				if (tcase.url === url)
					resolve({
						data: tcase.out
					});
			}
		});
	}
}

$.http('/usr/add').then(body => {
	console.log(body);
});