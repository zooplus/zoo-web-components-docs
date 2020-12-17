# [Toggle Switch](#toggle-switch)

Input component which provides styles for slotted **`<input type="checkbox"/>`**

***

## Example usage

```HTML
<zoo-toggle-switch>
	<input id="input-toggle" slot="input" type="checkbox"/>
	<label for="input-toggle" slot="label">Toggle switch</label>
</zoo-toggle-switch>
```

The above will render to:

<zoo-toggle-switch>
	<input id="input-toggle" slot="input" type="checkbox"/>
	<label for="input-toggle" slot="label">Toggle switch</label>
</zoo-toggle-switch>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## CSS Variables

| **Name**        | **Description**           |
| :-------------- | :------------------------ |
| `--primary-mid` | color of clickable toggle |

## Slots

| **Name** | **Description**                                                            | **Optional** |
| :------- | :------------------------------------------------------------------------- | :----------: |
| `input`  | `<input id="input-id" slot="input" type="checkbox"/>`                      |   &#10005;   |
| `label`  | `<label for="input-id" slot="label">An example input</label>`              |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
