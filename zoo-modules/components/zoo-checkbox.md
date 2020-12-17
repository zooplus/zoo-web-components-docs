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


> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**      | **Description**                                                | **Optional** |
| :------------ | :------------------------------------------------------------- | :----------: |
| `invalid`     | flag which indicates whether the input is valid or not         |   &#10003;   |
| `highlighted` | flag indicating whether the border around the input is visible |   &#10003;   |

> `invalid` and `highlighted` attributes should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**        | **Description**                                         |
| :-------------- | :------------------------------------------------------ |
| `--primary-mid` | used for all states                                     |
| `--warning-mid` | used for all states when `invalid` attribute is present |

## Slots

| **Name**   | **Description**                                                            | **Optional** |
| :--------- | :------------------------------------------------------------------------- | :----------: |
| `checkbox` | `<input id="checkbox-id" slot="checkbox" type="checkbox/>`                 |   &#10005;   |
| `label`    | `<label for="checkbox-id" slot="label">An example checkbox</label>`        |   &#10003;   |
| `info`     | accepts any element, for example `span`                                    |   &#10003;   |
| `error`    | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
