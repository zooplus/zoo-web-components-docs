# Checkbox

Checkbox component which provides styles for **`<input type="checkbox"/>`**

***

## Example usage:
	<zoo-checkbox highlighted>
		<input id="checkbox-id" slot="checkboxelement" type="checkbox"/>
		<label for="checkbox-id" slot="checkboxlabel">An example checkbox</label>
	</zoo-checkbox>

The above will render to:

<zoo-checkbox highlighted>
	<input id="checkbox-id" slot="checkboxelement" type="checkbox"/>
	<label htmlFor="checkbox-id" slot="checkboxlabel">An example checkbox</label>
</zoo-checkbox>

## Attributes
|   **Name**    |           **Description**                                                      | **Type** | **Default** | **Optional** |
| :----------- | :-----------------------------------------------------------------------------|:--------|:-----------|:-----------:|
| `labeltext`   | text to be presented on the right side of the checkbox                         | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `invalid`     | flag which indicates whether the input is valid or not                         | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `highlighted` |flag indicating whether the outline around the input should be visible (border) | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|`inputerrormsg`| text that should be displayed when `valid` is set to `falsy` value             | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `infotext`  | text that should be displayed as additional info below the checkbox            | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :--------------------: |:--------------:|
| `--primary-mid`        |    `#3C9700`   |
| `--warning-mid`        |    `#FF6200`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :-------------- | :---------------------------------|:-----------:|
| `checkboxelement`| `<input id="checkbox-id" slot="checkboxelement" type="checkbox/>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `checkboxlabel`  | `<label for="checkbox-id" slot="checkboxlabel">An example checkbox</label>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
