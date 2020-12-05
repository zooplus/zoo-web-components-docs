# Select

Select component which provides styles for slotted **`<select>...</select>`**

***

## Example usage

```HTML
<zoo-select infotext="Additional Information" linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
	<select id="zoo-select" slot="selectelement">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label for="zoo-select" slot="selectlabel">Label</label>
</zoo-select>
```

The above will render to:

<zoo-select infotext="Additional Information" linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
	<select slot="selectelement">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label for="zoo-select" slot="selectlabel">Label</label>
</zoo-select>

## Attributes

| **Name**        | **Description**                                                             | **Type** | **Default**   | **Optional** |
| :-------------- | :-------------------------------------------------------------------------- | :------- | :------------ | :----------: |
| `labelposition` | `top`, `left`                                                               | text     | `top`         |   &#10003;   |
| `labeltext`     | text to be presented as a label                                             | text     |               |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not                      | boolean  | `null`        |   &#10003;   |
| `inputerrormsg` | text that should be displayed when `valid` is set to `falsy` value          | text     |               |   &#10003;   |
| `infotext`      | text that should be displayed as additional info below the input            | text     |               |   &#10003;   |
| `linktext`      | what text to present as a link text                                         | text     |               |   &#10003;   |
| `linkhref`      | where the link should lead                                                  | link     |               |   &#10003;   |
| `linktarget`    | target of the anchor link                                                   | text     | `about:blank` |   &#10003;   |
| `linktarget`    | target of the anchor link                                                   | text     | `about:blank` |   &#10003;   |
| `loading`       | flag which indicates whether to show loader inside slotted `select` element | boolean  |               |   &#10003;   |

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------- |
| `--primary-light` | `#66B100`   |
| `--primary-mid`   | `#3C9700`   |
| `--primary-dark`  | `#286400`   |
| `--warning-mid`   | `#ED1C24`   |

## Slots

| **Name**        | **Description**                                                              | **Optional** |
| :-------------- | :--------------------------------------------------------------------------- | :----------: |
| `selectelement` | `<select id="zoo-select" slot="selectelement">...</select>`                  |   &#10005;   |
| `selectlabel`   | `<label for="zoo-select">Label</label>`                                      |   &#10003;   |
| `input`         | `<slot name="input"></slot>` can be used for composition of select and input |   &#10003;   |
