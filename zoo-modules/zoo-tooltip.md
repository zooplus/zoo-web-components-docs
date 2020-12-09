# [Tooltip](#tooltip)

Tooltip component.

***

## Example usage

```HTML
<zoo-button>
	<button type="button">
		Button
		<zoo-tooltip position="bottom">Tooltip text</zoo-tooltip>
	</button>
</zoo-button>
```

The above will render to:

<zoo-button>
	<button type="button">
		Button
		<zoo-tooltip position="bottom">Tooltip text</zoo-tooltip>
	</button>
</zoo-button>

## Attributes

| **Name**   | **Description**                  | **Type** | **Default** | **Optional** |
| :--------- | :------------------------------- | :------- | :---------- | :----------: |
| `position` | `top`, `right`, `bottom`, `left` | text     | `top`       |   &#10003;   |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |
