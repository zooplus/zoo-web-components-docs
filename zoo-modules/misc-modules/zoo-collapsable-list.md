# Collapsable List

Container component which provides styles for slotted content.

***

## Example usage:
	<zoo-collapsable-list>
		<zoo-collapsable-list-item>
			<span slot="header">Header1</span>
			<div slot="content">content</div>
		</zoo-collapsable-list-item>
		<zoo-collapsable-list-item>
			<span slot="header">Header2</span>
			<div slot="content">content</div>
		</zoo-collapsable-list-item>
	</zoo-collapsable-list>

### Rendered
<zoo-collapsable-list>
	<zoo-collapsable-list-item>
		<span slot="header">Header1</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
	<zoo-collapsable-list-item>
		<span slot="header">Header2</span>
		<div slot="content">content</div>
	</zoo-collapsable-list-item>
</zoo-collapsable-list>

## CSS Variables
|        **Name**        |   **Default**  |
| :--------------------: |:--------------:|
| `--primary-mid`        |    `#3C9700`   |
| `--primary-dark`       |    `#286400`   |
## Slots
|  **Name** |           **Description**          | **Optional** | 
| :------- | :---------------------------------|:-----------:|
|           | injected element must be `zoo-collapsable-list-item`, which accepts `header` and `content` slots| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `header`  | arbitrary content| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `content` | arbitrary content| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
