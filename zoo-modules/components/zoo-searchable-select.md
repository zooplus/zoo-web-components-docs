# [Searchable Select](#searchable-select)

Select component which provides styles for slotted **`<select>...</select>`**

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

## Attributes

> `invalid` and `loading` attributes should be used as boolean attributes, meaning that when attribute is present and has non-null value it is true, false otherwise.

| **Name**  | **Description**                                                             | **Optional** |
| :-------- | :-------------------------------------------------------------------------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not                      |   &#10003;   |
| `loading` | flag which indicates whether to show loader inside slotted `select` element |   &#10003;   |

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
