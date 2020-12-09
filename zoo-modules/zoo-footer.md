# [Footer](#footer)

Container footer component.

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

| **Name**    | **Description**                              | **Type** | **Default** | **Optional** |
| :---------- | :------------------------------------------- | :------: | :---------: | :----------: |
| `copyright` | arbitrary text to show in bottom left corner |   text   |             |   &#10003;   |

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------: |
| `--primary-light` |  `#66B100`  |
| `--primary-mid`   |  `#3C9700`  |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |