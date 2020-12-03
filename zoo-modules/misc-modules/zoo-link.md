# Link

Link wrapper component which provides styles for **`<a></a>`**

***

## Example usage:
	<div style="height: 10px; width: auto">
		<zoo-link type="primary">
			<a slot="anchor" href="https://zooplus.github.io/zoo-web-components/">Zoo web components</a>
		</zoo-link>
	</div>

The above will render to:

<div style="height: 10px; width: auto">
	<zoo-link type="primary">
		<a slot="anchor" href="https://zooplus.github.io/zoo-web-components/">Zoo web components</a>
	</zoo-link>
</div>

## Attributes
|   **Name**    |           **Description**                                                      | **Type** | **Default** | **Optional** |
| :----------- | :-----------------------------------------------------------------------------|:--------|:-----------|:-----------:|
| `type`        | `negative`, `primary`, `grey`, `warning`                                       | text     | `negative`  |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `size`        | `regular`, `bold`, `large`                                                     | text     |  `regular`  |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--primary-light`      |    `#66B100`   |
| `--primary-mid`        |    `#3C9700`   |
| `--primary-dark`       |    `#286400`   |
| `--warning-dark`       |    `#BD161C`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :-------------- | :---------------------------------|:-----------:|
| `pre`            | will be rendered before link text, for example: `<svg slot="pre">...</svg>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `anchor`         | `<a>` element | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `post`           | will be rendered after link text, for example: `<svg slot="post">...</svg>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>

