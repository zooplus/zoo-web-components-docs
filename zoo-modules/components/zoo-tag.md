# [Tag](#tag)

Tag component.

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-tag')">open sandbox</button>
</zoo-button>
<template id="zoo-tag-template">
	<form>
		<zoo-input>
			<label slot="label">--color CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--color">
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-tag type="info" style="--color: red">
	<span slot="content">Default info Default infoDefault infoDefault infoDefault infoDefault infoDefault</span>
</zoo-tag>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-tag type="info" style="--color: red">
	<span slot="content">Default info Default infoDefault infoDefault infoDefault infoDefault infoDefault</span>
</zoo-tag>
```

## Rendered

<zoo-tag type="info" style="--color: red">
	<span slot="content">Default info Default infoDefault infoDefault infoDefault infoDefault infoDefault</span>
</zoo-tag>

## Attributes

| **Name** | **Description** | **Optional** |
| :------: | :-------------- | :----------: |
|  `type`  | info, cloud     |   &#10005;   |

## CSS Variables

| **Name**  | **Description**                                  |
| :-------: | :----------------------------------------------- |
| `--color` | color of border and text of tag when type="info" |

## Slots

| **Name**  | **Description**                                                            | **Optional** |
| :-------- | :------------------------------------------------------------------------- | :----------: |
| `pre`     | will be rendered before tag text, for example: `<svg slot="pre">...</svg>` |   &#10003;   |
| `content` | content of the tag                                                         |   &#10005;   |
| `post`    | will be rendered after tag text, for example: `<svg slot="post">...</svg>` |   &#10003;   |
