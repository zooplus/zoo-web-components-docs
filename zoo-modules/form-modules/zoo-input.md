# Input

Input component which provides styles for slotted **`<input type="text"/>`**

***

## Example usage

	<zoo-input linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
		<input id="input-type-text" slot="inputelement" type="text" placeholder="input"/>
		<label for="input-type-text" slot="inputlabel">Input type text</label>
	</zoo-input>

The above will render to:

<zoo-input linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
	<input id="input-type-text" slot="inputelement" type="text" placeholder="input"/>
	<label for="input-type-text" slot="inputlabel">Input type text</label>
</zoo-input>

## Attributes

| **Name**        | **Description**                                                    | **Type** | **Default**   | **Optional** |
| :-------------- | :----------------------------------------------------------------- | :------- | :------------ | :----------: |
| `labeltext`     | text to be presented as a label                                    | text     |               |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not             | boolean  | `false`       |   &#10003;   |
| `inputerrormsg` | text that should be displayed when `valid` is set to `falsy` value | text     |               |   &#10003;   |
| `infotext`      | text that should be displayed as additional info below the input   | text     |               |   &#10003;   |
| `linktext`      | what text to present as a link text                                | text     |               |   &#10003;   |
| `linkhref`      | where the link should lead                                         | link     |               |   &#10003;   |
| `linktarget`    | target of the anchor link                                          | text     | `about:blank` |   &#10003;   |

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------: |
| `--primary-light` |  `#66B100`  |
| `--primary-mid`   |  `#3C9700`  |
| `--primary-dark`  |  `#286400`  |
| `--warning-mid`   |  `#ED1C24`  |

## Slots

| **Name**       | **Description**                                                                | **Optional** |
| :------------- | :----------------------------------------------------------------------------- | :----------: |
| `inputelement` | name of the slot for input                                                     |   &#10005;   |
| `inputlabel`   | name of the slot for label                                                     |   &#10003;   |
| `button`       | button that can be injected aside from input for composition of these elements |   &#10003;   |
