# Navigation

Container component which provides styles for slotted content.

***

## Example usage:
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
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--primary-light`      |    `#66B100`   |
| `--primary-mid`        |    `#3C9700`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :--------------: | :---------------------------------|:-----------:|
|                  | arbitrary content                  | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
