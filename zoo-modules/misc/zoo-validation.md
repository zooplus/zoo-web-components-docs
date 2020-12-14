# [Validation](#validation)

For validation you can use arbitrary tool. If you already use a framework you can use, for example,
angular forms since the basic elements like `<input/>`, `<select>...</select>` are already exposed.  

However, the preffered way would be to use HTML5 form validation, good articles are:  

1. <https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation>
2. <https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation>

As a quick example you can refer to the following snippet:

```HTML
<form novalidate>
	<zoo-input>
		<input id="input-type-text" slot="input" type="text" placeholder="input" required pattern="[A-Za-z ]+"/>
		<label for="input-type-text" slot="label">Input type text</label>
		<span slot="error">This input field should contain only letters and it is required!</span>
	</zoo-input>
	<zoo-button>
		<button type="submit">Submit</button>
	</zoo-button>
</form>
```

> `novalidate` attribute is defined to prevent browser from showing native error bubbles, since we already have
> a way of providing error messages.

And the respective JavaScript handler:

```JavaScript
document.querySelector('form').addEventListener('submit', async e => {
	e.preventDefault();
	const valid = e.target.checkValidity();
	const backendURL = '...';
	// your handling logic
	if (valid) {
		await fetch(backendURL);
	} else {
		// nothing, zoo-web-components library should show all errors provided via `slot='error'` on each element.
	}
});
```

The above JS is already loaded into this page, the rendered HTML for you to try it is here:  

<form novalidate id="test-form">
	<zoo-input>
		<input id="input-type-text" slot="input" type="text" placeholder="input" required pattern="[A-Za-z ]+"/>
		<label for="input-type-text" slot="label">Input type text</label>
		<span slot="error">This input field should contain only letters and it is required!</span>
	</zoo-input>
	<zoo-button style="margin: 10px auto;">
		<button type="submit">Submit</button>
	</zoo-button>
</form>
