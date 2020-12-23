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

function openSandbox(component) {
	const parser = new DOMParser();
	const modal = document.body.querySelector('zoo-modal');
	modal.openModal();
	modal.querySelector('span').innerHTML = `${component} sandbox`;
	const content = modal.querySelector(`#sandbox-content`);
	content.innerHTML = '';
	content.appendChild(document.querySelector(`#${component}-template`).content.cloneNode(true));
	const element = content.querySelector('form output').firstElementChild;
	const code = content.querySelector('code'); 
	code.textContent = element.outerHTML;
	Prism.highlightElement(code);
	content.querySelectorAll('input[type="color"]').forEach(input => {
		const val = getComputedStyle(document.documentElement).getPropertyValue(input.dataset.cssname);
		input.value = val.trim();
	});
	content.querySelectorAll('textarea').forEach(textarea => {
		textarea.addEventListener('input', e => {
			e.target.style.height = "";
			e.target.style.height = e.target.scrollHeight + "px";
		});
		textarea.dispatchEvent(new Event('input'));
	});
	content.addEventListener('change', e => {
		if (e.target.dataset.type === 'attr') {
			const set = e.target.dataset.attrboolean ? e.target.checked : e.target.value;
			if (set) {
				element.setAttribute(e.target.dataset.attrname, e.target.dataset.attrboolean ? '' : e.target.value);
			} else {
				element.removeAttribute(e.target.dataset.attrname);
			}
		} else if (e.target.dataset.type === 'css') {
			element.style.setProperty(e.target.dataset.cssname, e.target.value);
		} else if (e.target.dataset.type === 'slot') {
			if (e.target.dataset.slotname) {
				const el = element.shadowRoot.querySelector(`slot[name="${e.target.dataset.slotname}"]`).assignedElements()[0];
				if (el) {
					el.outerHTML = e.target.value;
				} else {
					element.appendChild(parser.parseFromString(e.target.value, 'text/html').body.firstElementChild);
				}
			} else {
				element.innerHTML = e.target.value;
			}
		}
		
		setTimeout(() => {
			code.textContent = element.outerHTML;
			Prism.highlightElement(code);
		}, 100);
	});
}