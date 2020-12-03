# Quantity Control

Input component which provides styles for slotted **`<input type="number"/>`**

***

> Webkit based browsers (Chrome/Safari) do not support hiding native number scroll on `input type="number"`,
> when supplying such input for this component remember to add:

```CSS
input::-webkit-outer-spin-button, zoo-quantity-control input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}
```

## Example usage

```HTML
	<zoo-quantity-control infotext="Additional helpful information for our users" >
		<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
		<label for="number-input" slot="label">Label</label>
	</zoo-quantity-control>
```

The above will render to:

<zoo-quantity-control infotext="Additional helpful information for our users" >
	<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
	<label for="number-input" slot="label">Label</label>
</zoo-quantity-control>

## Attributes

| **Name**           | **Description**                                                    | **Type** | **Default** | **Optional** |
| :----------------- | :----------------------------------------------------------------- | :------- | :---------- | :----------: |
| `labeltext`        | text to be presented as a label                                    | text     |             |   &#10003;   |
| `invalid`          | flag which indicates whether the input is valid or not             | boolean  | `false`     |   &#10003;   |
| `inputerrormsg`    | text that should be displayed when `valid` is set to `falsy` value | text     |             |   &#10003;   |
| `infotext`         | text that should be displayed as additional info below the input   | text     |             |   &#10003;   |
| `decreasedisabled` | flag which indicates whether the increase should be disabled       | boolean  | `false`     |   &#10003;   |
| `increasedisabled` | flag which indicates whether the increase should be disabled       | boolean  | `false`     |   &#10003;   |

## CSS Variables

|    **Name**     | **Default** |
| :-------------: | :---------: |
| `--primary-mid` |  `#3C9700`  |
## Slots

| **Name** | **Description**                                                                            | **Optional** |
| :------- | :----------------------------------------------------------------------------------------- | :----------: |
| `input`  | `<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>` |   &#65794;   |
| `label`  | `<label for="input-id" slot="label">An example input</label>`                              |   &#10003;   |
