document.querySelector('.save_changes').onclick = myClick;

function myClick() {
	let a = document.querySelector('[name="email"]').value;
	console.log(a);
}