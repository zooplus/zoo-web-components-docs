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

| **Name**   | **Description**                  | **Default** | **Optional** |
| :--------- | :------------------------------- | :---------- | :----------: |
| `position` | `top`, `right`, `bottom`, `left` | `top`       |   &#10003;   |

## CSS Variables

| **Name**                | **Description**                |
|:------------------------|:-------------------------------|
| `--zoo-tooltip-z-index` | z-index value, 9997 if not set |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |
