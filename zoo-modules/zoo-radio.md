# [Radio](#radio)

Radio component which provides styles for **`<input type="radio"/>`** and associated **`<label></label>`**

***

## Example usage

```HTML
<zoo-radio>
	<span slot="label">Radio group</span>

	<input type="radio" id="contactChoice1" name="contact" value="email">
	<label for="contactChoice1">Email</label>
	<input type="radio" id="contactChoice2" name="contact" value="phone">
	<label for="contactChoice2">Phone</label>
	<input type="radio" id="contactChoice3" name="contact" value="mail">
	<label for="contactChoice3">Mail</label>

	<span slot="info">Additional information</span>
</zoo-radio>
```

The above will render to:

<zoo-radio>
	<span slot="label">Radio group</span>
	<input type="radio" id="contactChoice1" name="contact" value="email"/>
	<label for="contactChoice1">Email</label>
	<input type="radio" id="contactChoice2" name="contact" value="phone"/>
	<label for="contactChoice2">Phone</label>
	<input type="radio" id="contactChoice3" name="contact" value="mail"/>
	<label for="contactChoice3">Mail</label>
	<span slot="info">Additional information</span>
</zoo-radio>

## Attributes

| **Name**  | **Description**                                        | **Type** | **Default** | **Optional** |
| :-------- | :----------------------------------------------------- | :------- | :---------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not | boolean  | `null`      |   &#10003;   |

## CSS Variables

| **Name**        | **Default** |
| :-------------- | :---------: |
| `--primary-mid` |  `#3C9700`  |
| `--warning-mid` |  `#ED1C24`  |

## Slots

| **Name** | **Description**                                                            | **Optional** |
| :------: | :------------------------------------------------------------------------- | :----------: |
|          | arbitrary amount of `input type="radio"` and labels for them               |   &#10005;   |
| `label`  | name of the slot for label                                                 |   &#10003;   |
|  `info`  | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
