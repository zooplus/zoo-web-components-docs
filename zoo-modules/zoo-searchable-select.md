# [Searchable Select](#searchable-select)

Select component which provides styles for slotted **`<select>...</select>`**

***

## Example usage

```HTML
<zoo-searchable-select>
	<span slot="legend">Searchable multiple select legend</span>

	<select id="searchable-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label slot="selectlabel" for="searchable-select">Searchable select</label>

	<input id="inserted-input" slot="input" type="text" placeholder="Select multiple options"/>
	<label for="inserted-input" slot="inputlabel">Searchable multiple input</label>
</zoo-searchable-select>
```

The above will render to:

<zoo-searchable-select>
	<span slot="legend">Searchable multiple select legend</span>
	<select id="searchable-select" slot="select">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label slot="selectlabel" for="searchable-select">Searchable select</label>
	<input id="inserted-input" slot="input" type="text" placeholder="Select multiple options"/>
	<label for="inserted-input" slot="inputlabel">Searchable multiple input</label>
</zoo-searchable-select>

## Attributes

| **Name**  | **Description**                                                             | **Type** | **Optional** |
| :-------- | :-------------------------------------------------------------------------- | :------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not                      | boolean  |   &#10003;   |
| `loading` | flag which indicates whether to show loader inside slotted `select` element | boolean  |   &#10003;   |

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
