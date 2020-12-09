# [Collapsable List](#collapsable-list)

Container component which provides styles for slotted content.

***

## Example usage

```HTML
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
```

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

|     **Name**     | **Default** |
| :--------------: | :---------: |
| `--primary-mid`  |  `#3C9700`  |
| `--primary-dark` |  `#286400`  |

## Slots

| **Name**  | **Description**                                                                                  | **Optional** |
| :-------- | :----------------------------------------------------------------------------------------------- | :----------: |
|           | injected element must be `zoo-collapsable-list-item`, which accepts `header` and `content` slots |   &#10005;   |
| `header`  | arbitrary content                                                                                |   &#10005;   |
| `content` | arbitrary content                                                                                |   &#10005;   |