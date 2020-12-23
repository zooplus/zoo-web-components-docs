# [Header](#header)

Container header component.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-header')">open sandbox</button>
</zoo-button>
<template id="zoo-header-template">
	<form>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Img slot</label>
			<textarea slot="input" data-type="slot" data-slotname="img"><img slot="img" alt="Zooplus logo" src="https://zooplus.github.io/zoo-web-components/logo.png"/></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">headertext slot</label>
			<textarea slot="input" data-type="slot" data-slotname="headertext"><h1 slot="headertext">Zooplus web components</h1></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Unnamed slot</label>
			<textarea slot="input" data-type="slot" data-slotname=""><zoo-button style="margin-left: 50px">
	<button type="button">Zoo+ theme</button>
</zoo-button></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-header>
	<img slot="img" alt="Zooplus logo" src="https://zooplus.github.io/zoo-web-components/logo.png"/>
	<h1 slot="headertext">Zooplus web components</h1>
	<zoo-button style="margin-left: 50px">
		<button type="button">Zoo+ theme</button>
	</zoo-button>
</zoo-header>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-header>
	<img slot="img" alt="Zooplus logo" src="https://zooplus.github.io/zoo-web-components/logo.png"/>
	<h1 slot="headertext">Zooplus web components</h1>
	<zoo-button style="margin-left: 50px">
		<button type="button">Zoo+ theme</button>
	</zoo-button>
</zoo-header>
```

The above will render to:

<zoo-header>
	<img slot="img" alt="Zooplus logo" src="https://zooplus.github.io/zoo-web-components/logo.png"/>
	<h1 slot="headertext">Zooplus web components</h1>
	<zoo-button style="margin-left: 50px">
		<button type="button">Zoo+ theme</button>
	</zoo-button>
</zoo-header>

## CSS Variables

| **Name**        | **Description** |
| :-------------- | :---------- |
| `--primary-mid` | text color  |

## Slots

| **Name**     | **Description**                                                  | **Optional** |
| :----------- | :--------------------------------------------------------------- | :----------: |
| `img`        | logo image                                                       |   &#10003;   |
| `headertext` | slot for header text, replaces `headertext` attribute is defined |   &#10003;   |
|              | arbitrary content after first two slots                          |   &#10003;   |
