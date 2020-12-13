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
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-select>
```

The above will render to:

<zoo-select>
	<select id="zoo-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label for="zoo-select" slot="label">Label</label>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-select>

## Attributes

> `invalid` and `loading` attributes should be used as boolean attributes, meaning that when attribute is present and has non-null value it is true, false otherwise.

| **Name**        | **Description**                                        | **Default** | **Optional** |
| :-------------- | :----------------------------------------------------- | :---------- | :----------: |
| `labelposition` | `top`, `left`                                          | `top`       |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not | `null`      |   &#10003;   |
| `loading`       | flag which indicates whether to show loader            | `null`      |   &#10003;   |

## CSS Variables

| **Name**          | **Default** |
| :---------------- | :---------- |
| `--primary-light` | `#66B100`   |
| `--primary-mid`   | `#3C9700`   |
| `--primary-dark`  | `#286400`   |
| `--warning-mid`   | `#ED1C24`   |

## Slots

| **Name** | **Description**                                                              | **Optional** |
| :------- | :--------------------------------------------------------------------------- | :----------: |
| `select` | `<select id="zoo-select" slot="select">...</select>`                         |   &#10005;   |
| `label`  | `<label for="zoo-select">Label</label>`                                      |   &#10003;   |
| `input`  | `<slot name="input"></slot>` can be used for composition of select and input |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                      |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present   |   &#10003;   |
| `link`   | accepts `a`                                                                  |   &#10003;   |
