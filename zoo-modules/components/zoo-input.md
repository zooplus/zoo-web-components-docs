# [Input](#input)

Input component which provides styles for slotted **`<input type="text"/>`**

***

## Example usage

```HTML
<zoo-input>
	<label for="input-type-text" slot="label">Input type text</label>
	<input id="input-type-text" slot="input" type="text" placeholder="input"/>
	<span slot="info">Additional helpful information for our users</span>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-input>
```

The above will render to:

<zoo-input>
	<label for="input-type-text" slot="label">Input type text</label>
	<input id="input-type-text" slot="input" type="text" placeholder="input"/>
	<span slot="info">Additional helpful information for our users</span>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
</zoo-input>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**  | **Description**                                        | **Optional** |
| :-------- | :----------------------------------------------------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not |   &#10003;   |

> `invalid` attribute should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**          | **Description**        |
| :---------------- | :--------------------- |
| `--primary-light` | refer to `zoo-link`    |
| `--primary-mid`   | refer to `zoo-link`    |
| `--primary-dark`  | refer to `zoo-link`    |
| `--warning-mid`   | color of error message |

## Slots

| **Name** | **Description**                                                            | **Optional** |
| :------- | :------------------------------------------------------------------------- | :----------: |
| `input`  | name of the slot for input                                                 |   &#10005;   |
| `label`  | name of the slot for label                                                 |   &#10003;   |
| `info`   | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`  | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
| `link`   | accepts `a`                                                                |   &#10003;   |
