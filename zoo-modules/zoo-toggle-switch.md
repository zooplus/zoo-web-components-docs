# [Toggle Switch](#toggle-switch)

Input component which provides styles for slotted **`<input type="checkbox"/>`**

***

## Example usage

```HTML
<zoo-toggle-switch>
	<label for="input-toggle" slot="label">Toggle switch</label>
	<input id="input-toggle" slot="input" type="checkbox"/>
</zoo-toggle-switch>
```

The above will render to:

<zoo-toggle-switch>
	<label for="input-toggle" slot="label">Toggle switch</label>
	<input id="input-toggle" slot="input" type="checkbox"/>
</zoo-toggle-switch>

## CSS Variables

| **Name**        | **Default** |
| :-------------- | :---------: |
| `--primary-mid` |  `#3C9700`  |

## Slots

| **Name** | **Description**                                                            | **Optional** |
| :------- | :------------------------------------------------------------------------- | :----------: |
| `input`  | `<input id="input-id" slot="input" type="checkbox"/>`                      |   &#10005;   |
| `label`  | `<label for="input-id" slot="label">An example input</label>`              |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |