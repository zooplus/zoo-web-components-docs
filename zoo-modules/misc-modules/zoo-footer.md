# Footer

Container footer component.

***

## Example usage:
	<zoo-footer copyright="zooplus AG">
		<zoo-link type="negative">
			<a slot="anchor" href="https://github.com/zooplus/zoo-web-components">Github</a>
		</zoo-link>
		<zoo-link type="negative">
			<a slot="anchor" href="https://www.npmjs.com/package/@zooplus/zoo-web-components">NPM</a>
		</zoo-link>
	</zoo-footer> 

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
|   **Name**  |                 **Description**              | **Type** | **Default** | **Optional** |
| :--------- | :-------------------------------------------|:--------:|:-----------:|:-----------:|
| `copyright` | arbitrary text to show in bottom left corner | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--primary-light`      |    `#66B100`   |
| `--primary-mid`        |    `#3C9700`   |
## Slots
|     **Name**   |           **Description**          | **Optional** | 
| :------------: | :---------------------------------|:-----------:|
|                | arbitrary content                  | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
