# [Input](#input)

Input component which provides styles for slotted **`<input type="text"/>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-input')">open sandbox</button>
</zoo-button>
<template id="zoo-input-template">
	<form>
		<zoo-checkbox highlighted>
			<input id="zoo-invalid-input-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
			<label for="zoo-invalid-input-id" slot="label">Invalid</label>
		</zoo-checkbox>
		<zoo-input>
			<label slot="label">--primary-light CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-light">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Label slot</label>
			<textarea slot="input" data-type="slot" data-slotname="label"><label slot="label" for="sandbox-input-id">Input type text</label></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Link slot</label>
			<textarea slot="input" data-type="slot" data-slotname="link"><a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Info slot</label>
			<textarea slot="input" data-type="slot" data-slotname="info"><span slot="info">Info</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Error slot</label>
			<textarea slot="input" data-type="slot" data-slotname="error"><span slot="error">Error message</span></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-input>
	<label for="sandbox-input-id" slot="label">Input type text</label>
	<input id="sandbox-input-id" slot="input" type="text" placeholder="input"/>
	<span slot="info">Additional helpful information for our users</span>
	<span slot="error">Error message</span>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-input>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-input>
	<label for="input-type-text" slot="label">Input type text</label>
	<input id="input-type-text" slot="input" type="text" placeholder="input"/>
	<span slot="info">Additional helpful information for our users</span>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-input>
```

The above will render to:

<zoo-input>
	<label for="input-type-text" slot="label">Input type text</label>
	<input id="input-type-text" slot="input" type="text" placeholder="input"/>
	<span slot="info">Additional helpful information for our users</span>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-input>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**        | **Description**                                        | **Optional** |
| :-------------- | :----------------------------------------------------- | :----------: |
| `invalid`       | flag which indicates whether the input is valid or not |   &#10003;   |
| `labelposition` | `top`, `left`                                          |   &#10003;   |

> `invalid` attribute should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**          | **Description**        |
| :---------------- | :--------------------- |
| `--primary-light` | refer to `zoo-link`    |
| `--primary-mid`   | refer to `zoo-link`    |
| `--primary-dark`  | refer to `zoo-link`    |
| `--warning-mid`   | color of error message |

## Slots

| **Name**     | **Description**                                                            | **Optional** |
| :----------- | :------------------------------------------------------------------------- | :----------: |
| `input`      | name of the slot for input                                                 |   &#10005;   |
| `label`      | name of the slot for label                                                 |   &#10003;   |
| `info`       | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`      | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
| `link`       | accepts `a`                                                                |   &#10003;   |
| `additional` | slot for additional content, inserted right after `slot="input"`           |   &#10005;   |
