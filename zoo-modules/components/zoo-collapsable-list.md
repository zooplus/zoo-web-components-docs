# [Collapsable List](#collapsable-list)

Container component which provides styles for slotted content.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-collapsable-list')">open sandbox</button>
</zoo-button>
<template id="zoo-collapsable-list-template">
	<form>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">Collapsable list item slot</label>
			<textarea slot="input" data-type="slot" data-slotname=""><zoo-collapsable-list-item>
	<span slot="header">Header1</span>
	<div slot="content">content</div>
</zoo-collapsable-list-item>
<zoo-collapsable-list-item>
	<span slot="header">Header1</span>
	<div slot="content">content</div>
</zoo-collapsable-list-item></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-collapsable-list>
	<zoo-collapsable-list-item>
		<span slot="header">Header1</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
	<zoo-collapsable-list-item>
		<span slot="header">Header2</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
</zoo-collapsable-list>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-collapsable-list>
	<zoo-collapsable-list-item>
		<span slot="header">Header1</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
	<zoo-collapsable-list-item>
		<span slot="header">Header2</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
</zoo-collapsable-list>
```

### Rendered

<zoo-collapsable-list>
	<zoo-collapsable-list-item>
		<span slot="header">Header1</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
	<zoo-collapsable-list-item>
		<span slot="header">Header2</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
</zoo-collapsable-list>

## CSS Variables

| **Name**         | **Description**                          |
| :--------------- | :--------------------------------------- |
| `--primary-mid`  | user for border and icon                 |
| `--primary-dark` | user for header text when item is active |

## Slots

| **Name**  | **Description**                                                                                  | **Optional** |
| :-------- | :----------------------------------------------------------------------------------------------- | :----------: |
|           | injected element must be `zoo-collapsable-list-item`, which accepts `header` and `content` slots |   &#10005;   |
| `header`  | arbitrary content                                                                                |   &#10005;   |
| `content` | arbitrary content                                                                                |   &#10005;   |
