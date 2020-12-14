document.querySelector('#test-form').addEventListener('submit', e => {
	e.preventDefault();
	const toast = document.createElement('zoo-toast');
	const content = document.createElement('span');
	content.slot = 'content';
	if (e.target.checkValidity()) {
		content.innerHTML = 'All form inputs are valid!';
		toast.setAttribute('type', 'success');
	} else {
		content.innerHTML = 'Some inputs fail validation, fix them!';
		toast.setAttribute('type', 'error');
	}
	toast.appendChild(content);
	document.body.appendChild(toast);
	toast.show();
	setTimeout(() => toast.remove(), 3150);
});