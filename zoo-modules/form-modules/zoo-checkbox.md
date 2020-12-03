# Checkbox

Checkbox component which provides styles for **`<input type="checkbox"/>`**

***

## Example usage

	<zoo-checkbox highlighted>
		<input id="checkbox-id" slot="checkboxelement" type="checkbox"/>
		<label for="checkbox-id" slot="checkboxlabel">An example checkbox</label>
	</zoo-checkbox>

The above will render to:

<zoo-checkbox highlighted>
	<input id="checkbox-id" slot="checkboxelement" type="checkbox"/>
	<label htmlFor="checkbox-id" slot="checkboxlabel">An example checkbox</label>
</zoo-checkbox>

## Attributes

| **Name**        | **Description**                                                                 | **Type** | **Default** | **Optional** |
| :-------------- | :------------------------------------------------------------------------------ | :------- | :---------- | :----------: |
| `labeltext`     | text to be presented on the right side of the checkbox                          | text     |             |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not                          | boolean  | `false`     |   &#10003;   |
| `highlighted`   | flag indicating whether the outline around the input should be visible (border) | boolean  | `false`     |   &#10003;   |
| `inputerrormsg` | text that should be displayed when `valid` is set to `falsy` value              | text     |             |   &#10003;   |
| `infotext`      | text that should be displayed as additional info below the checkbox             | text     |             |   &#10003;   |

## CSS Variables

|    **Name**     | **Default** |
| :-------------: | :---------: |
| `--primary-mid` |  `#3C9700`  |
| `--warning-mid` |  `#FF6200`  |

## Slots

| **Name**          | **Description**                                                             | **Optional** |
| :---------------- | :-------------------------------------------------------------------------- | :----------: |
| `checkboxelement` | `<input id="checkbox-id" slot="checkboxelement" type="checkbox/>`           |   &#65794;   |
| `checkboxlabel`   | `<label for="checkbox-id" slot="checkboxlabel">An example checkbox</label>` |   &#10003;   |
