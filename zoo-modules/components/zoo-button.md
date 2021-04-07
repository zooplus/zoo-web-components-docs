# [Button](#button)

Button component which provides styles for **`<button></button>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-button')">open sandbox</button>
</zoo-button>
<template id="zoo-button-template">
	<form>
		<zoo-select>
			<label slot="label">Type</label>
			<select slot="select" data-type="attr" data-attrname="type">
				<option value="">none</option>
				<option value="primary">primary</option>
				<option value="secondary">secondary</option>
				<option value="hollow">hollow</option>
			</select>
		</zoo-select>
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
			<label slot="label">--secondary-light CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--secondary-light">
		</zoo-input>
		<zoo-input>
			<label slot="label">--secondary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--secondary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--secondary-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--secondary-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">Slot</label>
			<textarea slot="input" data-type="slot" data-slotname=""><button type="button">Button</button></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-button>
	<button type="button">Button</button>
</zoo-button>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example

```HTML
<zoo-button>
	<button type="button" disabled>Disabled :(</button>
</zoo-button>
```

The above will render to:

<zoo-button>
	<button type="button" disabled>Disabled :(</button>
</zoo-button>

## Attributes

| **Name** | **Description**                         | **Default** | **Optional** |
| :------: | :-------------------------------------- | :---------- | :----------: |
|  `type`  | primary, secondary, hollow, transparent | `primary`   |   &#10003;   |

## CSS Variables

| **Name**            | **Description**                                                                                |
| :------------------ | :--------------------------------------------------------------------------------------------- |
| `--primary-light`   | used as right end of gradient                                                                  |
| `--primary-mid`     | used as left side of gradient, background on hover/focus and as text-color for `type="hollow"` |
| `--primary-dark`    | used for background when button is active                                                      |
| `--secondary-light` | same as `primary-light` for `type="secondary"`                                                 |
| `--secondary-mid`   | same as `primary-mid` for `type="secondary"`                                                   |
| `--secondary-dark`  | same as `primary-dark` for `type="secondary"`                                                  |

## Slots

| **Name** | **Description**                                  | **Optional** |
| :------: | :----------------------------------------------- | :----------: |
|          | `<button>` element with arbitrary content inside |   &#10005;   |
