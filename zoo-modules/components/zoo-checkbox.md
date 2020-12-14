# [Checkbox](#checkbox)

Checkbox component which provides styles for **`<input type="checkbox"/>`**

***

## Example usage

```HTML
<zoo-checkbox highlighted>
	<input id="checkbox-id" slot="checkbox" type="checkbox"/>
	<label for="checkbox-id" slot="label">An example checkbox</label>
</zoo-checkbox>
```

The above will render to:

<zoo-checkbox highlighted>
	<input id="checkbox-id" slot="checkbox" type="checkbox"/>
	<label for="checkbox-id" slot="label">An example checkbox</label>
</zoo-checkbox>

## Attributes

> `invalid` and `highlighted` attributes should be used as boolean attributes, meaning that when attribute is present and has non-null value it is true, false otherwise.

| **Name**      | **Description**                                                | **Optional** |
| :------------ | :------------------------------------------------------------- | :----------: |
| `invalid`     | flag which indicates whether the input is valid or not         |   &#10003;   |
| `highlighted` | flag indicating whether the border around the input is visible |   &#10003;   |

## CSS Variables

|    **Name**     | **Default** |
| :-------------: | :---------: |
| `--primary-mid` |  `#3C9700`  |
| `--warning-mid` |  `#FF6200`  |

## Slots

| **Name**   | **Description**                                                            | **Optional** |
| :--------- | :------------------------------------------------------------------------- | :----------: |
| `checkbox` | `<input id="checkbox-id" slot="checkbox" type="checkbox/>`                 |   &#10005;   |
| `label`    | `<label for="checkbox-id" slot="label">An example checkbox</label>`        |   &#10003;   |
| `info`     | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`    | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
