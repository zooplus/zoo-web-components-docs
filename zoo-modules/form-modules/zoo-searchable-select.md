# Searchable Select

Select component which provides styles for slotted **`<select>...</select>`**

***

## Example usage:
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
|     **Name**    |           **Description**                                          | **Type** | **Default** | **Optional** | 
| :------------- | :-----------------------------------------------------------------|:--------|:-----------|:-----------:|
| `labeltext`     | text to be presented as a label                                    | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `invalid`       | flag which indicates whether the input is valid or not             | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|`inputerrormsg`  | text that should be displayed when `valid` is set to `falsy` value | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `infotext`    | text that should be displayed as additional info below the input   | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linktext`    | what text to present as a link text                                | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linkhref`    | where the link should lead                                         | link     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linktarget`  | target of the anchor link                                          | text     |`about:blank`|   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linktarget`  | target of the anchor link                                          | text     |`about:blank`|   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `loading`     | flag which indicates whether to show loader inside slotted `select` element    | boolean     | |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `placeholder`   | text that should be displayed as a placeholder                     | type     | |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>

## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :-------------- | :---------------------------------|:-----------:|
| `selectelement`  | `<select slot="selectelement">...</select>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
