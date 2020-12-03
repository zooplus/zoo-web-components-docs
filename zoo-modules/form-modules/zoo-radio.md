# Radio

Radio component which provides styles for **`<input type="radio"/>`** and associated **`<label></label>`**

***

## Example usage:
	<zoo-radio infotext="Additional Information" labeltext="Label">
		<input type="radio" id="contactChoice1" name="contact" value="email">
		<label for="contactChoice1">Email</label>
		<input type="radio" id="contactChoice2" name="contact" value="phone">
		<label for="contactChoice2">Phone</label>
		<input type="radio" id="contactChoice3" name="contact" value="mail">
		<label for="contactChoice3">Mail</label>
	</zoo-radio>

The above will render to:

<zoo-radio infotext="Additional Information" labeltext="Label">
	<input type="radio" id="contactChoice1" name="contact" value="email"/>
	<label for="contactChoice1">Email</label>
	<input type="radio" id="contactChoice2" name="contact" value="phone"/>
	<label for="contactChoice2">Phone</label>
	<input type="radio" id="contactChoice3" name="contact" value="mail"/>
	<label for="contactChoice3">Mail</label>
</zoo-radio>

## Attributes
|     **Name**    |           **Description**                                          | **Type** | **Default** | **Optional** | 
| :------------- | :-----------------------------------------------------------------|:--------|:-----------|:-----------:|
| `labeltext`     | text to be presented on the top of inputs                          | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `invalid`       | flag which indicates whether the input is valid or not             | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|`inputerrormsg`  | text that should be displayed when `valid` is set to `falsy` value | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `infotext`    | text that should be displayed as additional info below the input   | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--primary-mid`        |    `#3C9700`   |
| `--warning-mid`        |    `#ED1C24`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :--------------: | :---------------------------------|:-----------:|
|                  | arbitrary amount of `input type="radio"` and labels for them| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
