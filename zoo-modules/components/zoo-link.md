# [Link](#link)

Link wrapper component which provides styles for **`<a></a>`**

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

| **Name**          | **Default** |
| :---------------- | :---------: |
| `--primary-light` |  `#66B100`  |
| `--primary-mid`   |  `#3C9700`  |
| `--primary-dark`  |  `#286400`  |
| `--warning-dark`  |  `#BD161C`  |

## Slots

| **Name** | **Description**                                                             | **Optional** |
| :------- | :-------------------------------------------------------------------------- | :----------: |
| `pre`    | will be rendered before link text, for example: `<svg slot="pre">...</svg>` |   &#10003;   |
| `anchor` | `<a>` element                                                               |   &#10005;   |
| `post`   | will be rendered after link text, for example: `<svg slot="post">...</svg>` |   &#10003;   |
