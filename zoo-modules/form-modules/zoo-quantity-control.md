# Quantity Control

Input component which provides styles for slotted **`<input type="number"/>`**

***

> Webkit based browsers (Chrome/Safari) do not support hiding native number scroll on `input type="number"`, when supplying such input for this component remember to add:
> ```
> input::-webkit-outer-spin-button, zoo-quantity-control input::-webkit-inner-spin-button {
>	-webkit-appearance: none;
> }
> ```

## Example usage:
	<zoo-quantity-control infotext="Additional helpful information for our users" >
		<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
		<label for="number-input" slot="label">Label</label>
	</zoo-quantity-control>

The above will render to:

<zoo-quantity-control infotext="Additional helpful information for our users" >
	<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>
	<label for="number-input" slot="label">Label</label>
</zoo-quantity-control>

## Attributes
|      **Name**     |           **Description**                                          | **Type** | **Default** | **Optional** | 
| :--------------- | :-----------------------------------------------------------------|:--------|:-----------|:-----------:|
| `labeltext`       | text to be presented as a label                                    | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `invalid`         | flag which indicates whether the input is valid or not             | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|`inputerrormsg`    | text that should be displayed when `valid` is set to `falsy` value | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `infotext`      | text that should be displayed as additional info below the input   | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `decreasedisabled`| flag which indicates whether the increase should be disabled       | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `increasedisabled`| flag which indicates whether the increase should be disabled       | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>

## CSS Variables
|        **Name**        |   **Default**  |
| :--------------------: |:--------------:|
| `--primary-mid`        |    `#3C9700`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :-------------- | :---------------------------------|:-----------:|
| `input`          | `<input id="number-input" slot="input" readonly placeholder="0" type="number" step="50"/>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `label`          | `<label for="input-id" slot="label">An example input</label>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
