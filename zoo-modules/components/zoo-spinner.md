# [Spinner](#spinner)

Spinner svg.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-spinner')">open sandbox</button>
</zoo-button>
<template id="zoo-spinner-template">
	<form>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<div style="position: relative; height: 100px; width: auto">
	<zoo-spinner></zoo-spinner>
</div>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

> Spinner has `position: absolute`, you have to place it inside an element with `position: relative`.

## Example usage

```HTML
<div style="position: relative; height: 100px; width: auto">
	<zoo-spinner></zoo-spinner>
</div>
```

## Rendered

<div style="position: relative; height: 100px; width: auto">
	<zoo-spinner></zoo-spinner>
</div>

## CSS Variables

|    **Name**     | **Description**  |
| :-------------: | :--------------- |
| `--primary-mid` | color of spinner |
