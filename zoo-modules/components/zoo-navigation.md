# [Navigation](#navigation)

Container component which provides styles for slotted content.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-navigation')">open sandbox</button>
</zoo-button>
<template id="zoo-navigation-template">
	<form>
		<zoo-input>
			<label slot="label">--primary-light CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-light">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Slot</label>
			<textarea slot="input" data-type="slot" data-slotname=""><a href="https://github.com/zooplus/zoo-web-components">Github</a>
<a href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-navigation>
	<a href="https://github.com/zooplus/zoo-web-components">Github</a>
	<a href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
</zoo-navigation>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-navigation>
	<a href="https://github.com/zooplus/zoo-web-components">Github</a>
	<a href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
</zoo-navigation>
```

The above will render to:

<zoo-navigation>
	<a href="https://github.com/zooplus/zoo-web-components">Github</a>
	<a href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
</zoo-navigation>

## CSS Variables

| **Name**          | **Description**                  |
| :---------------- | :------------------------------- |
| `--primary-light` | right end of background gradient |
| `--primary-mid`   | left end of background gradient  |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10005;   |
