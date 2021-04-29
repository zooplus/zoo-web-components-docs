# [Date Range](#date-range)

Date range component which provides styles for slotted **`<input type="date"/>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-date-range')">open sandbox</button>
</zoo-button>
<template id="zoo-date-range-template">
	<form>
		<zoo-checkbox highlighted>
			<input id="zoo-invalid-date-range-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
			<label for="zoo-invalid-date-range-id" slot="label">Invalid</label>
		</zoo-checkbox>
		<zoo-input>
			<label slot="label">--primary-light CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-light">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">--primary-dark CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--primary-dark">
		</zoo-input>
		<zoo-input>
			<label slot="label">--warning-mid CSS Custom Property</label>
			<input slot="input" type="color" data-type="css" data-cssname="--warning-mid">
		</zoo-input>
		<zoo-input>
			<label slot="label">Legend slot</label>
			<textarea slot="input" data-type="slot" data-slotname="label"><label slot="label" for="sandbox-input-id">Input type text</label></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Link slot</label>
			<textarea slot="input" data-type="slot" data-slotname="link"><a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Info slot</label>
			<textarea slot="input" data-type="slot" data-slotname="info"><span slot="info">Info</span></textarea>
		</zoo-input>
		<zoo-input>
			<label slot="label">Error slot</label>
			<textarea slot="input" data-type="slot" data-slotname="error"><span slot="error">Error message</span></textarea>
		</zoo-input>
		<h3>Rendered output</h3>
		<output>
<zoo-date-range>
	<label slot="label">Input date range</label>
	<input slot="date-from" type="date"/>
	<input slot="date-to" type="date"/>
	<span slot="info">Additional helpful information for our users</span>
	<span slot="error">Date range is invalid!</span>
</zoo-date-range>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-date-range>
	<label slot="label">Input date range</label>
	<input slot="date-from" type="date"/>
	<input slot="date-to" type="date"/>
	<span slot="info">Additional helpful information for our users</span>
	<span slot="error">Date range is invalid!</span>
</zoo-date-range>
```

The above will render to:

<zoo-date-range>
	<label slot="label">Input date range</label>
	<input slot="date-from" type="date"/>
	<input slot="date-to" type="date"/>
	<span slot="info">Additional helpful information for our users</span>
	<span slot="error">Date range is invalid!</span>
</zoo-date-range>

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

| **Name**     | **Description**                                                            | **Optional** |
| :----------- | :------------------------------------------------------------------------- | :----------: |
| `date-from`  | name of the slot for input date-from                                       |   &#10005;   |
| `date-to`    | name of the slot for input date-to                                         |   &#10005;   |
| `label`      | name of the slot for label                                                 |   &#10003;   |
| `info`       | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`      | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |

## Dependencies

- `zoo-input`
