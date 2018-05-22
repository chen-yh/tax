'use strict';

let testCases = [{
    url: "/api/loan/refundapply/select",
    category: 1,
    in: {},
    out: {
          "result": {
            "total": 1,
            "rows": [
              {
                "refundApply": {
                  "id": 1,
                  "financingProject": 1,
                  "financing": 200,
                  "loanPeriod": 2,
                  "createTime": "Mar 21, 2018 6:35:18 PM"
                },
                "entName": "阿里巴巴11",
                "monthBalance": 10
              }
            ],
            "pageNum": 1,
            "pages": 1,
            "pageSize": 10,
            "firstPage": 1,
            "prePage": 0,
            "nextPage": 0,
            "lastPage": 1,
            "isFirstPage": true,
            "isLastPage": true,
            "hasPreviousPage": false,
            "hasNextPage": false,
            "navigatePages": 0
          },
          "status": 200
        }
    }   
];

function plugin(Vue) {
	Vue.prototype.$http = {
		get: (url, args) => {
			return new Promise((resolve, reject) => {
				for (let tc of testCases) {
					if (tc.url === url) {
						resolve({
							status: 200,
							data: tc.out
						});
						break;
					}
				}
			});
		},
		post: (url, args) => {
			return new Promise((resolve, reject) => {
				for (let tc of testCases) {
					if (tc.url === url) {
						resolve({
							status: 200,
							data: tc.out
						});
						break;
					}
				}
			});
		}
	}
}

export default plugin;
// module.exports = plugin;
// module.exports.default = plugin;