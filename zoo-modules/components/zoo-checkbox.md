# [Checkbox](#checkbox)

Checkbox component which provides styles for **`<input type="checkbox"/>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-checkbox')">open sandbox</button>
</zoo-button>
<template id="zoo-checkbox-template">
	<form>
		<zoo-checkbox highlighted>
			<input id="zoo-highlighted-checkbox-id" slot="checkbox" type="checkbox" checked data-type="attr" data-attrname="highlighted" data-attrboolean="true"/>
			<label for="zoo-highlighted-checkbox-id" slot="label">Highlighted</label>
		</zoo-checkbox>
		<zoo-checkbox highlighted>
			<input id="zoo-invalid-checkbox-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
			<label for="zoo-invalid-checkbox-id" slot="label">Invalid</label>
		</zoo-checkbox>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Label slot</label>
			<textarea slot="input" data-type="slot" data-slotname="label"><label slot="label" for="sandbox-checkbox-id">An example checkbox</label></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Info slot</label>
			<textarea slot="input" data-type="slot" data-slotname="info"><span slot="info">Info</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Error slot</label>
			<textarea slot="input" data-type="slot" data-slotname="error"><span slot="error">Error</span></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-checkbox highlighted>
	<input id="sandbox-checkbox-id" slot="checkbox" type="checkbox"/>
	<label for="sandbox-checkbox-id" slot="label">An example checkbox</label>
	<span slot="info">Info</span>
	<span slot="error">Error</span>
</zoo-checkbox>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-checkbox highlighted>
	<input id="checkbox-id" slot="checkbox" type="checkbox"/>
	<label for="checkbox-id" slot="label">An example checkbox</label>
</zoo-checkbox>
```

The above will render to:

<zoo-checkbox highlighted>
	<input id="checkbox-id" slot="checkbox" type="checkbox"/>
	<label for="checkbox-id" slot="label">An example checkbox</label>
</zoo-checkbox>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**      | **Description**                                                | **Optional** |
| :------------ | :------------------------------------------------------------- | :----------: |
| `invalid`     | flag which indicates whether the input is valid or not         |   &#10003;   |
| `highlighted` | flag indicating whether the border around the input is visible |   &#10003;   |

> `invalid` and `highlighted` attributes should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**        | **Description**                                         |
| :-------------- | :------------------------------------------------------ |
| `--primary-mid` | used for all states                                     |
| `--warning-mid` | used for all states when `invalid` attribute is present |

## Slots

| **Name**   | **Description**                                                            | **Optional** |
| :--------- | :------------------------------------------------------------------------- | :----------: |
| `checkbox` | `<input id="checkbox-id" slot="checkbox" type="checkbox/>`                 |   &#10005;   |
| `label`    | `<label for="checkbox-id" slot="label">An example checkbox</label>`        |   &#10003;   |
| `info`     | accepts any element, for example `span`                                    |   &#10003;   |
| `error`    | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |

## Dependencies

- `zoo-info`
- `zoo-attention-icon`
