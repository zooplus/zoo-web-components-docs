# [Select](#select)

Select component which provides styles for slotted **`<select>...</select>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-select')">open sandbox</button>
</zoo-button>
<template id="zoo-select-template">
	<form>
		<zoo-select>
			<label slot="label">Label position</label>
			<select slot="select" data-type="attr" data-attrname="labelposition">
				<option value="">none</option>
				<option value="top">top</option>
				<option value="left">left</option>
			</select>
		</zoo-select>
		<zoo-checkbox highlighted>
			<input id="zoo-invalid-select-checkbox-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
			<label for="zoo-invalid-select-checkbox-id" slot="label">Invalid</label>
		</zoo-checkbox>
		<zoo-checkbox highlighted>
			<input id="zoo-loading-select-checkbox-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="loading" data-attrboolean="true"/>
			<label for="zoo-loading-select-checkbox-id" slot="label">Loading</label>
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
			<label slot="label">--warning-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Label slot</label>
			<textarea slot="input" data-type="slot" data-slotname="label"><label slot="label" for="sandbox-checkbox-id">Label</label></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Info slot</label>
			<textarea slot="input" data-type="slot" data-slotname="info"><span slot="info">Info</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Error slot</label>
			<textarea slot="input" data-type="slot" data-slotname="error"><span slot="error">Error</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Link slot</label>
			<textarea slot="input" data-type="slot" data-slotname="link"><a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-select>
	<label for="zoo-sandbox-select" slot="label">Label</label>
	<select id="zoo-sandbox-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
	<span slot="info">Info</span>
	<span slot="error">Error</span>
</zoo-select>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-select>
	<label for="zoo-select" slot="label">Label</label>
	<select id="zoo-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-select>
```

The above will render to:

<zoo-select>
	<label for="zoo-select" slot="label">Label</label>
	<select id="zoo-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-select>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**        | **Description**                                        | **Default** | **Optional** |
| :-------------- | :----------------------------------------------------- | :---------- | :----------: |
| `labelposition` | `top`, `left`                                          | `top`       |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not | `null`      |   &#10003;   |
| `loading`       | flag which indicates whether to show loader            | `null`      |   &#10003;   |

> `invalid` and `loading` attributes should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**          | **Description**        |
| :---------------- | :--------------------- |
| `--primary-light` | refer to `zoo-link`    |
| `--primary-mid`   | refer to `zoo-link`    |
| `--primary-dark`  | refer to `zoo-link`    |
| `--warning-mid`   | color of error message |

## Slots

| **Name** | **Description**                                                              | **Optional** |
| :------- | :--------------------------------------------------------------------------- | :----------: |
| `select` | `<select id="zoo-select" slot="select">...</select>`                         |   &#10005;   |
| `label`  | `<label for="zoo-select">Label</label>`                                      |   &#10003;   |
| `input`  | `<slot name="input"></slot>` can be used for composition of select and input |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                      |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present   |   &#10003;   |
| `link`   | accepts `a`                                                                  |   &#10003;   |

## Dependencies

- `zoo-label`
- `zoo-info`
- `zoo-link`
- `zoo-attention-icon`
- `zoo-preloader`
- `zoo-arrow-icon`
