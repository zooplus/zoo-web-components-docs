# Searchable Select

Select component which provides styles for slotted **`<select>...</select>`**

***

## Example usage

```HTML
<zoo-searchable-select labeltext="Label" infotext="Additional Information" 
	linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
	<select id="searchable-select" slot="selectelement">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label slot="selectlabel" for="searchable-select">Label</label>
</zoo-searchable-select>
```

The above will render to:

<zoo-searchable-select infotext="Additional Information" linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/" labeltext="Label">
	<select id="searchable-select" slot="selectelement">
		<option value="value1">Dog</option>
		<option value="value2">Cat</option>
		<option value="value3">Small Pet</option>
		<option value="value4">Aquatic</option>
	</select>
	<label slot="selectlabel" for="searchable-select">Label</label>
</zoo-searchable-select>

## Attributes

| **Name**        | **Description**                                                             | **Type** | **Default**   | **Optional** |
| :-------------- | :-------------------------------------------------------------------------- | :------- | :------------ | :----------: |
| `labeltext`     | text to be presented as a label                                             | text     |               |   &#10003;   |
| `invalid`       | flag which indicates whether the input is valid or not                      | boolean  | `false`       |   &#10003;   |
| `inputerrormsg` | text that should be displayed when `valid` is set to `falsy` value          | text     |               |   &#10003;   |
| `infotext`      | text that should be displayed as additional info below the input            | text     |               |   &#10003;   |
| `linktext`      | what text to present as a link text                                         | text     |               |   &#10003;   |
| `linkhref`      | where the link should lead                                                  | link     |               |   &#10003;   |
| `linktarget`    | target of the anchor link                                                   | text     | `about:blank` |   &#10003;   |
| `linktarget`    | target of the anchor link                                                   | text     | `about:blank` |   &#10003;   |
| `loading`       | flag which indicates whether to show loader inside slotted `select` element | boolean  |               |   &#10003;   |
| `placeholder`   | text that should be displayed as a placeholder                              | type     |               |   &#10003;   |

## Slots

| **Name**        | **Description**                             | **Optional** |
| :-------------- | :------------------------------------------ | :----------: |
| `selectelement` | `<select slot="selectelement">...</select>` |   &#10005;   |
