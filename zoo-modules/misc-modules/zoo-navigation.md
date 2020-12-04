# Navigation

Container component which provides styles for slotted content.

***

## Example usage

```HTML
<zoo-navigation>
	<div>
		<zoo-link type="negative">
			<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
		</zoo-link>
		<zoo-link type="negative">
			<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
		</zoo-link>
	</div>
</zoo-navigation>
```

The above will render to:

<zoo-navigation>
	<div>
		<zoo-link type="negative">
			<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
		</zoo-link>
		<zoo-link type="negative">
			<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
		</zoo-link>
	</div>
</zoo-navigation>

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------: |
| `--primary-light` |  `#66B100`  |
| `--primary-mid`   |  `#3C9700`  |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10005;   |
