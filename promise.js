// let promise = new Promise(function(resolve) {
// 	setTimeout(function() {
// 		let result = [1, 2, 3, 4, 5];
// 		resolve(result);
// 	}, 10000);
// });

// promise.then(function(result) {
// 	console.log(result); 
// });
//=================================


let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
        
		let isError = false;
		
		if (!isError) {
			resolve([1, 2, 3, 4, 5]);   
		} else {
			reject('error in promise'); 
		}
	}, 3000);
});


promise.then(
	function(result) {
		console.log(result); 
	},
	function(error) {
		console.log(error); 
	}
);