# [Input](#input)

Input component which provides styles for slotted **`<input type="text"/>`**

***

## Example usage

	<zoo-input>
		<input id="input-type-text" slot="input" type="text" placeholder="input"/>
		<label for="input-type-text" slot="label">Input type text</label>
		<span slot="info">Additional helpful information for our users</span>
		<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
	</zoo-input>

The above will render to:

<zoo-input>
	<input id="input-type-text" slot="input" type="text" placeholder="input"/>
	<label for="input-type-text" slot="label">Input type text</label>
	<span slot="info">Additional helpful information for our users</span>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-input>

## Attributes

| **Name**  | **Description**                                        | **Type** | **Default** | **Optional** |
| :-------- | :----------------------------------------------------- | :------- | :---------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not | boolean  | `null`      |   &#10003;   |

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------: |
| `--primary-light` |  `#66B100`  |
| `--primary-mid`   |  `#3C9700`  |
| `--primary-dark`  |  `#286400`  |
| `--warning-mid`   |  `#ED1C24`  |

## Slots

| **Name** | **Description**                                                                | **Optional** |
| :------- | :----------------------------------------------------------------------------- | :----------: |
| `input`  | name of the slot for input                                                     |   &#10005;   |
| `label`  | name of the slot for label                                                     |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                        |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present     |   &#10003;   |
| `link`   | accepts `a`                                                                    |   &#10003;   |