# [Searchable Select](#searchable-select)

Select component which provides styles for slotted **`<select>...</select>`**

<zoo-button class="sandbox-btn">
	<button type="button" onclick="openSandbox('zoo-select')">open sandbox</button>
</zoo-button>
<template id="zoo-select-template">
	<form>
		<fieldset>
			<legend>Attributes, CSS Custom Properties and slots</legend>
			<zoo-checkbox highlighted>
				<input id="zoo-invalid-select-checkbox-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="invalid" data-attrboolean="true"/>
				<label for="zoo-invalid-select-checkbox-id" slot="label">Invalid</label>
			</zoo-checkbox>
			<zoo-checkbox highlighted>
				<input id="zoo-loading-select-checkbox-id" slot="checkbox" type="checkbox" data-type="attr" data-attrname="loading" data-attrboolean="true"/>
				<label for="zoo-loading-select-checkbox-id" slot="label">Loading</label>
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
				<label slot="label">--warning-dark CSS Custom Property</label>
				<input slot="input" type="color" data-type="css" data-cssname="--warning-dark">
			</zoo-input>
			<zoo-input>
				<label slot="label">--warning-mid CSS Custom Property</label>
				<input slot="input" type="color" data-type="css" data-cssname="--warning-mid">
			</zoo-input>
			<zoo-input>
				<label slot="label">Label slot</label>
				<textarea slot="input" data-type="slot" data-slotname="legend"><label slot="legend">Label</label></textarea>
			</zoo-input>
			<zoo-input>
				<label slot="label">Info slot</label>
				<textarea slot="input" data-type="slot" data-slotname="info"><span slot="info">Info</span></textarea>
			</zoo-input>
			<zoo-input>
				<label slot="label">Error slot</label>
				<textarea slot="input" data-type="slot" data-slotname="error"><span slot="error">Error</span></textarea>
			</zoo-input>
			<zoo-input>
				<label slot="label">Link slot</label>
				<textarea slot="input" data-type="slot" data-slotname="link"><a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a></textarea>
			</zoo-input>
		</fieldset>
		<h3>Rendered output</h3>
		<output>
<zoo-searchable-select>
	<label slot="legend">Label</label>
	<select slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<a slot="link" href="https://zooplus.github.io/zoo-web-components/" target="about:blank">Forgotten your password?</a>
	<input slot="input" type="text" placeholder="Select options"/>
	<span slot="info">Info</span>
	<span slot="error">Error</span>
</zoo-searchable-select>
		</output>
		<h3>HTML code</h3>
		<pre class=" language-html"><code></code></pre>
	</form>
</template>

***

## Example usage

```HTML
<zoo-searchable-select>
	<span slot="legend">Searchable select legend</span>

	<label slot="selectlabel" for="searchable-select">Searchable select</label>
	<select id="searchable-select" slot="select">
		<option value="" selected="" disabled="">Please choose an option</option>
		<option value="dog">Dog</option>
		<option value="cat">Cat</option>
		<option value="smallPet">Small Pet</option>
		<option value="aquatic">Aquatic</option>
	</select>

	<label for="inserted-input" slot="inputlabel">Searchable input</label>
	<input id="inserted-input" slot="input" type="text" placeholder="Select options"/>
</zoo-searchable-select>
```

The above will render to:

<zoo-searchable-select>
	<span slot="legend">Searchable select legend</span>
	<label slot="selectlabel" for="some-searchable-select-id">Searchable select</label>
	<select id="some-searchable-select-id" slot="select">
		<option value="" selected="" disabled="">Please choose an option</option>
		<option value="dog">Dog</option>
		<option value="cat">Cat</option>
		<option value="smallPet">Small Pet</option>
		<option value="aquatic">Aquatic</option>
	</select>
	<label for="inserted-input" slot="inputlabel">Searchable input</label>
	<input id="inserted-input" slot="input" type="text" placeholder="Select options"/>
</zoo-searchable-select>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.  
> `inputlabel` and `selectlabel` slots are optional as well, since they are used only by screen readers.

## Attributes

| **Name**  | **Description**                                                             | **Optional** |
| :-------- | :-------------------------------------------------------------------------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not                      |   &#10003;   |
| `loading` | flag which indicates whether to show loader inside slotted `select` element |   &#10003;   |

> `invalid` and `loading` attributes should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## Slots

| **Name**      | **Description**                                                            | **Optional** |
| :------------ | :------------------------------------------------------------------------- | :----------: |
| `legend`      | name of the slot for legend                                                |   &#10005;   |
| `select`      | `<select slot="select">...</select>`                                       |   &#10005;   |
| `input`       | `<input slot="input" type="text" placeholder="Select multiple options"/>`  |   &#10005;   |
| `info`        | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`       | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |
| `link`        | accepts `a`                                                                |   &#10003;   |
| `inputlabel`  | name of the slot for select label                                          |   &#10005;   |
| `selectlabel` | name of the slot for input label                                           |   &#10005;   |
