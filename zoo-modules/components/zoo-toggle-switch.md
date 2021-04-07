# [Toggle Switch](#toggle-switch)

Input component which provides styles for slotted **`<input type="checkbox"/>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-toggle-switch')">open sandbox</button>
</zoo-button>
<template id="zoo-toggle-switch-template">
	<form>
		<zoo-checkbox highlighted>
			<input id="zoo-invalid-toggle-switch-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
			<label for="zoo-invalid-toggle-switch-id" slot="label">Invalid</label>
		</zoo-checkbox>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Label slot</label>
			<textarea slot="input" data-type="slot" data-slotname="label"><label slot="label" for="sandbox-toggle-switch">Toggle switch</label></textarea>
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
<zoo-toggle-switch>
	<input id="sandbox-toggle-switch" slot="input" type="checkbox"/>
	<label for="sandbox-toggle-switch" slot="label">Toggle switch</label>
	<span slot="info">Info</span>
	<span slot="error">Error</span>
</zoo-toggle-switch>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-toggle-switch>
	<input id="input-toggle" slot="input" type="checkbox"/>
	<label for="input-toggle" slot="label">Toggle switch</label>
</zoo-toggle-switch>
```

The above will render to:

<zoo-toggle-switch>
	<input id="input-toggle" slot="input" type="checkbox"/>
	<label for="input-toggle" slot="label">Toggle switch</label>
</zoo-toggle-switch>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**        | **Description**                                        | **Optional** |
| :-------------- | :----------------------------------------------------- | :----------: |
| `labelposition` | `top`, `left`                                          |   &#10003;   |

## CSS Variables

| **Name**        | **Description**           |
| :-------------- | :------------------------ |
| `--primary-mid` | color of clickable toggle |

## Slots

| **Name** | **Description**                                                            | **Optional** |
| :------- | :------------------------------------------------------------------------- | :----------: |
| `input`  | `<input id="input-id" slot="input" type="checkbox"/>`                      |   &#10005;   |
| `label`  | `<label for="input-id" slot="label">An example input</label>`              |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |

## Dependencies

- `zoo-label`
- `zoo-info`
- `zoo-attention-icon`
