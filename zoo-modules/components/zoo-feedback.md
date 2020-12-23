# [Feedback](#feedback)

Container component which provides a styled container with preset icon.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-feedback')">open sandbox</button>
</zoo-button>
<template id="zoo-feedback-template">
	<form>
		<zoo-select>
			<label slot="label">Type</label>
			<select slot="select" data-type="attr" data-attrname="type">
				<option value="">none</option>
				<option value="info">info</option>
				<option value="error">error</option>
				<option value="success">success</option>
			</select>
		</zoo-select>
		<zoo-input>
			<label slot="label">--primary-ultralight CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-ultralight">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--info-ultralight CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-ultralight">
		</zoo-input>
		<zoo-input>
			<label slot="label">--info-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--info-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-ultralight CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-ultralight">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Slot</label>
			<textarea slot="input" data-type="slot" data-slotname="">Slotted content, this can be HMTL as well!</textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-feedback>
	Slotted content, this can be HMTL as well!
</zoo-feedback>
		</output>
		<h3>HTML code</h3>
		<div style="height: 50px; width: auto">
			<pre class=" language-html"><code></code></pre>
		</div>
	</form>
</template>

***

## Example usage

```HTML
<div style="height: 50px; width: auto">
	<zoo-feedback>
		This is an info message.
	</zoo-feedback>
</div>
```

### Rendered

<div style="height: 50px; width: auto">
	<zoo-feedback>This is an info message.</zoo-feedback>
</div>

## Attributes

| **Name** | **Description**            | **Default** | **Optional** |
| :------- | :------------------------- | :---------- | :----------: |
| `type`   | `info`, `error`, `success` | `info`      |   &#10003;   |

## CSS Variables

| **Name**               | **Description**                  |
| :--------------------- | :------------------------------- |
| `--primary-ultralight` | background when `type="success"` |
| `--primary-mid`        | icon color when `type="success"` |
| `--info-ultralight`    | background when `type="info"`    |
| `--info-mid`           | icon color when `type="info"`    |
| `--warning-ultralight` | background when `type="error"`   |
| `--warning-mid`        | icon color when `type="error"`   |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |
