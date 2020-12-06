# [Quantity Control](#quantity-control)

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
	<zoo-quantity-control>
		<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
		<label for="number-input" slot="label">Label</label>
	</zoo-quantity-control>
```

The above will render to:

<zoo-quantity-control>
	<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
	<label for="number-input" slot="label">Label</label>
</zoo-quantity-control>

## Attributes

| **Name**           | **Description**                                              | **Type** | **Default** | **Optional** |
| :----------------- | :----------------------------------------------------------- | :------- | :---------- | :----------: |
| `invalid`          | flag which indicates whether the input is valid or not       | boolean  | `false`     |   &#10003;   |
| `decreasedisabled` | flag which indicates whether the increase should be disabled | boolean  | `false`     |   &#10003;   |
| `increasedisabled` | flag which indicates whether the increase should be disabled | boolean  | `false`     |   &#10003;   |

## CSS Variables

|    **Name**     | **Default** |
| :-------------: | :---------: |
| `--primary-mid` |  `#3C9700`  |
## Slots

| **Name** | **Description**                                                                            | **Optional** |
| :------- | :----------------------------------------------------------------------------------------- | :----------: |
| `input`  | `<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>` |   &#10005;   |
| `label`  | `<label for="input-id" slot="label">An example input</label>`                              |   &#10003;   |
| `info`   | accepts `zoo-input-info`                                                                   |   &#10003;   |
| `error`  | accepts `zoo-input-error` element that shows when `invalid` attribute is present           |   &#10003;   |
