//your JS code here. If required.
let arr=[1,2,3,4];
function getNumbers() {
	return new Promise((res)=>{
		setTimeout(()=>{
			res([1,2,3,4]);
		},3000);
	});
}
const div=document.getElementById("output");
function update(even) {
	div.innerText=even;
}

getNumbers()
	.then((nums)=>{
		return new Promise((res)=>{
			setTimeout(()=>{
				const even=nums.filter((num)=>num%2===0);
				update(`Even numbers: ${even}`);
				res(even);
			},1000);
		});
	})
	.then((even)=>{
		return new Promise((res)=>{
			setTimeout(()=>{
				const multipliedNumbers = even.map(num => num * 2);
				console.log(multipliedNumbers);
	            update(`Multiplied numbers: ${multipliedNumbers}`);
	            res(multipliedNumbers);
			},2000);
		});
	});




