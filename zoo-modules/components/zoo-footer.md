# [Footer](#footer)

Container footer component.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-footer')">open sandbox</button>
</zoo-button>
<template id="zoo-footer-template">
	<form>
		<zoo-input>
			<label slot="label">Copyright attribute</label>
			<input slot="input" type="text" data-type="attr" data-attrname="copyright" value="zooplus AG">
		</zoo-input>
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
			<textarea slot="input" data-type="slot" data-slotname=""><zoo-link type="negative">
	<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
</zoo-link>
<zoo-link type="negative">
	<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
</zoo-link></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-footer copyright="zooplus AG">
	<zoo-link type="negative">
		<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
	</zoo-link>
	<zoo-link type="negative">
		<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
	</zoo-link>
</zoo-footer>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-footer copyright="zooplus AG">
	<zoo-link type="negative">
		<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
	</zoo-link>
	<zoo-link type="negative">
		<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
	</zoo-link>
</zoo-footer>
```

The above will render to:

<zoo-footer copyright="zooplus AG">
	<zoo-link type="negative">
		<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
	</zoo-link>
	<zoo-link type="negative">
		<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
	</zoo-link>
</zoo-footer>

## Attributes

| **Name**    | **Description**                              | **Optional** |
| :---------- | :------------------------------------------- | :----------: |
| `copyright` | arbitrary text to show in bottom left corner |   &#10003;   |

## CSS Variables

| **Name**          | **Description**                  |
| :---------------- | :------------------------------- |
| `--primary-light` | right end of background gradient |
| `--primary-mid`   | left end of background gradient  |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |
