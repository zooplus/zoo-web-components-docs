# [Quantity Control](#quantity-control)

Input component which provides styles for slotted **`<input type="number"/>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-quantity-control')">open sandbox</button>
</zoo-button>
<template id="zoo-quantity-control-template">
	<form>
		<zoo-checkbox highlighted>
			<input id="zoo-invalid-quantity-control-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
			<label for="zoo-invalid-quantity-control-id" slot="label">Invalid</label>
		</zoo-checkbox>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Label slot</label>
			<textarea slot="input" data-type="slot" data-slotname="label"><label slot="label" for="quantity-control-sandbox-id">Label</label></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Info slot</label>
			<textarea slot="input" data-type="slot" data-slotname="info"><span slot="info">Info</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Error slot</label>
			<textarea slot="input" data-type="slot" data-slotname="error"><span slot="error">Error message</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Decrease slot</label>
			<textarea slot="input" data-type="slot" data-slotname="decrease"><button type="button" slot="decrease" title="decrease">
	<svg height="18" width="18"><line y1="9" x1="0" x2="18" y2="9"></line></svg>
</button></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Increase slot</label>
			<textarea slot="input" data-type="slot" data-slotname="increase"><button type="button" slot="increase" title="increase">
	<svg height="18" width="18">
		<line y1="0" x1="9" x2="9" y2="18"></line>
		<line y1="9" x1="0" x2="18" y2="9"></line>
	</svg>
</button></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-quantity-control>
	<button type="button" slot="decrease" title="decrease">
		<svg height="18" width="18"><line y1="9" x1="0" x2="18" y2="9"></line></svg>
	</button>
	<label for="quantity-control-sandbox-id" slot="label">Label</label>
	<input id="quantity-control-sandbox-id" slot="input" readonly placeholder="0" type="number" step="50"/>
	<button type="button" slot="increase" title="increase">
		<svg height="18" width="18">
			<line y1="0" x1="9" x2="9" y2="18"></line>
			<line y1="9" x1="0" x2="18" y2="9"></line>
		</svg>
	</button>
	<span slot="info">Info</span>
	<span slot="error">Error message</span>
</zoo-quantity-control>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

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

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**  | **Description**                                        | **Optional** |
| :-------- | :----------------------------------------------------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not |   &#10003;   |

> `invalid` attribute should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

|    **Name**     | **Description**                    |
| :-------------: | :--------------------------------- |
| `--primary-mid` | background color of slotted button |

## Slots

| **Name**   | **Description**                                                                            | **Optional** |
| :--------- | :----------------------------------------------------------------------------------------- | :----------: |
| `input`    | `<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>` |   &#10005;   |
| `label`    | `<label for="input-id" slot="label">An example input</label>`                              |   &#10003;   |
| `info`     | accepts any element, foe example `span`                                                    |   &#10003;   |
| `error`    | accepts any element that shows when `invalid` attribute is present                         |   &#10003;   |
| `increase` | accepts any element that should act as a button for increase                               |   &#10003;   |
| `decrease` | accepts any element that should act as a button for decrease                               |   &#10003;   |
