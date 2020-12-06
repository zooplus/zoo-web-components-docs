# [Select](#select)

Select component which provides styles for slotted **`<select>...</select>`**

***

## Example usage

```HTML
<zoo-select>
	<select id="zoo-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label for="zoo-select" slot="label">Label</label>
	<zoo-link slot="link">
		<a slot="anchor" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
	</zoo-link>
</zoo-select>
```

The above will render to:

<zoo-select>
	<select slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label for="zoo-select" slot="label">Label</label>
	<zoo-link slot="link">
		<a slot="anchor" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
	</zoo-link>
</zoo-select>

## Attributes

| **Name**        | **Description**                                                             | **Type** | **Default** | **Optional** |
| :-------------- | :-------------------------------------------------------------------------- | :------- | :---------- | :----------: |
| `labelposition` | `top`, `left`                                                               | text     | `top`       |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not                      | boolean  | `null`      |   &#10003;   |
| `loading`       | flag which indicates whether to show loader inside slotted `select` element | boolean  |             |   &#10003;   |

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------- |
| `--primary-light` | `#66B100`   |
| `--primary-mid`   | `#3C9700`   |
| `--primary-dark`  | `#286400`   |
| `--warning-mid`   | `#ED1C24`   |

## Slots

| **Name** | **Description**                                                                  | **Optional** |
| :------- | :------------------------------------------------------------------------------- | :----------: |
| `select` | `<select id="zoo-select" slot="select">...</select>`                             |   &#10005;   |
| `label`  | `<label for="zoo-select">Label</label>`                                          |   &#10003;   |
| `input`  | `<slot name="input"></slot>` can be used for composition of select and input     |   &#10003;   |
| `info`   | accepts `zoo-input-info`                                                         |   &#10003;   |
| `error`  | accepts `zoo-input-error` element that shows when `invalid` attribute is present |   &#10003;   |
| `link`   | accepts `zoo-link`                                                               |   &#10003;   |