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
	<button type="button" slot="decrease" title="decrease">
		<svg height="18" width="18"><line y1="9" x1="0" x2="18" y2="9"></line></svg>
	</button>
	<label for="number-input" slot="label">Label</label>
	<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
	<button type="button" slot="increase" title="increase">
		<svg height="18" width="18">
			<line y1="0" x1="9" x2="9" y2="18"></line>
			<line y1="9" x1="0" x2="18" y2="9"></line>
		</svg>
	</button>
</zoo-quantity-control>
```

The above will render to:

<zoo-quantity-control>
	<button type="button" slot="decrease" title="decrease">
		<svg height="18" width="18"><line y1="9" x1="0" x2="18" y2="9"></line></svg>
	</button>
	<label for="number-input" slot="label">Label</label>
	<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
	<button type="button" slot="increase" title="increase">
		<svg height="18" width="18">
			<line y1="0" x1="9" x2="9" y2="18"></line>
			<line y1="9" x1="0" x2="18" y2="9"></line>
		</svg>
	</button>
</zoo-quantity-control>

## Attributes

> `invalid` attribute should be used as boolean attribute, meaning that when attribute is present and has non-null value it is true, false otherwise.

| **Name**  | **Description**                                        | **Optional** |
| :-------- | :----------------------------------------------------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not |   &#10003;   |

## CSS Variables

|    **Name**     | **Default** |
| :-------------: | :---------: |
| `--primary-mid` |  `#3C9700`  |

## Slots

| **Name**   | **Description**                                                                            | **Optional** |
| :--------- | :----------------------------------------------------------------------------------------- | :----------: |
| `input`    | `<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>` |   &#10005;   |
| `label`    | `<label for="input-id" slot="label">An example input</label>`                              |   &#10003;   |
| `info`     | accepts any element, foe example `span`                                                    |   &#10003;   |
| `error`    | accepts any element that shows when `invalid` attribute is present                         |   &#10003;   |
| `increase` | accepts any element that should act as a button for increase                               |   &#10003;   |
| `decrease` | accepts any element that should act as a button for decrease                               |   &#10003;   |
