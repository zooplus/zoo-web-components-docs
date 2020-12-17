# [Select](#select)

Select component which provides styles for slotted **`<select>...</select>`**

***

## Example usage

```HTML
<zoo-select>
	<label for="zoo-select" slot="label">Label</label>
	<select id="zoo-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-select>
```

The above will render to:

<zoo-select>
	<label for="zoo-select" slot="label">Label</label>
	<select id="zoo-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-select>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**        | **Description**                                        | **Default** | **Optional** |
| :-------------- | :----------------------------------------------------- | :---------- | :----------: |
| `labelposition` | `top`, `left`                                          | `top`       |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not | `null`      |   &#10003;   |
| `loading`       | flag which indicates whether to show loader            | `null`      |   &#10003;   |

> `invalid` and `loading` attributes should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**          | **Description**        |
| :---------------- | :--------------------- |
| `--primary-light` | refer to `zoo-link`    |
| `--primary-mid`   | refer to `zoo-link`    |
| `--primary-dark`  | refer to `zoo-link`    |
| `--warning-mid`   | color of error message |

## Slots

| **Name** | **Description**                                                              | **Optional** |
| :------- | :--------------------------------------------------------------------------- | :----------: |
| `select` | `<select id="zoo-select" slot="select">...</select>`                         |   &#10005;   |
| `label`  | `<label for="zoo-select">Label</label>`                                      |   &#10003;   |
| `input`  | `<slot name="input"></slot>` can be used for composition of select and input |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                      |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present   |   &#10003;   |
| `link`   | accepts `a`                                                                  |   &#10003;   |
