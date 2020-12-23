# [Link](#link)

Link wrapper component which provides styles for **`<a></a>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-link')">open sandbox</button>
</zoo-button>
<template id="zoo-link-template">
	<form>
		<zoo-select>
			<label slot="label">Type</label>
			<select slot="select" data-type="attr" data-attrname="type">
				<option value="">none</option>
				<option value="negative">negative</option>
				<option value="primary">primary</option>
				<option value="grey">grey</option>
				<option value="warning">warning</option>
			</select>
		</zoo-select>
		<zoo-select>
			<label slot="label">Size</label>
			<select slot="select" data-type="attr" data-attrname="size">
				<option value="">none</option>
				<option value="regular">regular</option>
				<option value="bold">bold</option>
				<option value="large">large</option>
			</select>
		</zoo-select>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">Pre slot</label>
			<textarea slot="input" data-type="slot" data-slotname="pre"><svg slot="pre" height="24" width="24" viewBox="0 0 25 25">
    <path d="M12 15.75a1.125 1.125 0 11.001 2.25A1.125 1.125 0 0112 15.75zm.75-2.25a.75.75 0 11-1.5 0V5.25a.75.75 0 111.5 0v8.25zm7.205-9.455l.53-.53c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0l-.53.53zm0 0l-.53.53c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85l.53-.53z"/>
</svg></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Achor slot</label>
			<textarea slot="input" data-type="slot" data-slotname="anchor"><a slot="anchor" style="text-align:center" href="https://zooplus.github.io/zoo-web-components/">Zoo web components</a></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Post slot</label>
			<textarea slot="input" data-type="slot" data-slotname="post"><svg slot="post" height="24" width="24" viewBox="0 -2 55 75">
	<path d="M30.7 53.3c-.8 3.7-1.4 5.6-2.6 7-2.5 2.4-5.6 1.8-8.1-.7a8.9 8.9 0 01-2.7-4.6s0-2.2-3-4.8c-2.6-3-4.8-3-4.8-3-2.7-.9-3.4-1.6-4.5-2.7-2.5-2.5-3.2-5.5-.7-8 1.3-1.3 3.2-1.8 7-2.7 0 0 7.2-1.8 11.8-1.5a10 10 0 015.7 2.6l.8.8s2.6 2.6 2.7 5.8c0 4.5-1.6 11.8-1.6 11.8z"/>
	<path class="fade-in" d="M14.5 28.8c2.8 1 6.4-1.7 8-6s.6-8.9-2.2-10-6.4 1.8-8 6.1c-1.6 4.4-.7 8.8 2.2 9.9z"/>
	<path class="fade-in fade-in--two" d="M26.1 26.2c2.7 2.6 8 1.4 12.2-2.7s5.2-9.5 2.6-12.1-8-1.4-12.1 2.6-5.3 9.6-2.7 12.2z"/>
	<path class="fade-in fade-in--three" d="M37.2 37.2c2.6 2.6 8 1.4 12-2.7s5.3-9.5 2.7-12S44 21 39.8 25c-4 4-5.3 9.5-2.6 12z"/>
	<path class="fade-in fade-in--four" d="M50.4 43c-1-2.8-5.4-3.8-9.8-2.2s-7 5.3-6 8c1 2.9 5.4 3.9 9.8 2.2s7-5.2 6-8z"/>
</svg></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-link>
	<svg slot="pre" height="24" width="24" viewBox="0 0 25 25">
		<path d="M12 15.75a1.125 1.125 0 11.001 2.25A1.125 1.125 0 0112 15.75zm.75-2.25a.75.75 0 11-1.5 0V5.25a.75.75 0 111.5 0v8.25zm7.205-9.455l.53-.53c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0l-.53.53zm0 0l-.53.53c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85l.53-.53z"/>
	</svg>
	<a slot="anchor" style="text-align:center" href="https://zooplus.github.io/zoo-web-components/">Zoo web components</a>
	<svg slot="post" height="24" width="24" viewBox="0 -2 55 75">
		<path d="M30.7 53.3c-.8 3.7-1.4 5.6-2.6 7-2.5 2.4-5.6 1.8-8.1-.7a8.9 8.9 0 01-2.7-4.6s0-2.2-3-4.8c-2.6-3-4.8-3-4.8-3-2.7-.9-3.4-1.6-4.5-2.7-2.5-2.5-3.2-5.5-.7-8 1.3-1.3 3.2-1.8 7-2.7 0 0 7.2-1.8 11.8-1.5a10 10 0 015.7 2.6l.8.8s2.6 2.6 2.7 5.8c0 4.5-1.6 11.8-1.6 11.8z"/>
		<path class="fade-in" d="M14.5 28.8c2.8 1 6.4-1.7 8-6s.6-8.9-2.2-10-6.4 1.8-8 6.1c-1.6 4.4-.7 8.8 2.2 9.9z"/>
		<path class="fade-in fade-in--two" d="M26.1 26.2c2.7 2.6 8 1.4 12.2-2.7s5.2-9.5 2.6-12.1-8-1.4-12.1 2.6-5.3 9.6-2.7 12.2z"/>
		<path class="fade-in fade-in--three" d="M37.2 37.2c2.6 2.6 8 1.4 12-2.7s5.3-9.5 2.7-12S44 21 39.8 25c-4 4-5.3 9.5-2.6 12z"/>
		<path class="fade-in fade-in--four" d="M50.4 43c-1-2.8-5.4-3.8-9.8-2.2s-7 5.3-6 8c1 2.9 5.4 3.9 9.8 2.2s7-5.2 6-8z"/>
	</svg>
</zoo-link>
		</output>
		<h3>HTML code</h3>
		<div style="height: 10px; width: auto">
			<pre class=" language-html"><code></code></pre>
		</div>
	</form>
</template>

***

## Example usage

```HTML
<div style="height: 10px; width: auto">
	<zoo-link>
		<a slot="anchor" href="https://zooplus.github.io/zoo-web-components/">Zoo web components</a>
	</zoo-link>
</div>
```

The above will render to:

<div style="height: 10px; width: auto">
	<zoo-link>
		<a slot="anchor" href="https://zooplus.github.io/zoo-web-components/">Zoo web components</a>
	</zoo-link>
</div>

## Attributes

| **Name** | **Description**                          | **Default** | **Optional** |
| :------- | :--------------------------------------- | :---------- | :----------: |
| `type`   | `negative`, `primary`, `grey`, `warning` | `negative`  |   &#10003;   |
| `size`   | `regular`, `bold`, `large`               | `regular`   |   &#10003;   |

## CSS Variables

| **Name**         | **Description**                            |
| :--------------- | :----------------------------------------- |
| `--primary-mid`  | link text color                            |
| `--primary-dark` | link text color on hover, focus and active |
| `--warning-dark` | link text when `type="warning"`            |

## Slots

| **Name** | **Description**                                                             | **Optional** |
| :------- | :-------------------------------------------------------------------------- | :----------: |
| `pre`    | will be rendered before link text, for example: `<svg slot="pre">...</svg>` |   &#10003;   |
| `anchor` | `<a>` element                                                               |   &#10005;   |
| `post`   | will be rendered after link text, for example: `<svg slot="post">...</svg>` |   &#10003;   |
