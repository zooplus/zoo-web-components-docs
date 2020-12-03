# Modal

Container component which provides styles for modal and slotted content.
Modal visibility must be controlled by the client.

***

## Example usage:
	<zoo-modal style="display: none" headertext="Header">
		<div>
			<zoo-feedback text="This is an info message. Only one coupon can be accepted with each order."></zoo-feedback>
			<br>
			<zoo-checkbox highlighted="true">
				<input id="chkbx" slot="checkboxelement" type="checkbox"/>
				<label for="chkbx" slot="checkboxlabel">I understand and confirm that ALL of the above statements are true</label>
			</zoo-checkbox>
			<br>
			<zoo-button style="margin: 0 auto" type="hollow">
				<span>Add to cart</span>
			</zoo-button>
		</div>
	</zoo-modal>

## Attributes
|   **Name**    |           **Description**                          | **Type** | **Default** | **Optional** |
| :----------- | :-------------------------------------------------|:--------|:-----------:|:-----------:|
| `headertext`  | text that should be displayed as modal header      | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--primary-mid`        |    `#3C9700`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :--------------: | :---------------------------------|:-----------:|
|                  | arbitrary content                  | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
