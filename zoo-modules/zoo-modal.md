# [Modal](#modal)

Container component which provides styles for modal and slotted content.
Modal visibility must be controlled by the client.

***

## Example usage

```HTML
<zoo-modal style="display: none">
	<span slot="header">Your basket contains licensed items</span>
	<div>
		<zoo-feedback>This is an info message. Only one coupon can be accepted with each order.</zoo-feedback>
		<br>
		<zoo-checkbox highlighted="true">
			<input id="chkbx" slot="checkbox" type="checkbox"/>
			<label for="chkbx" slot="label">I understand and confirm that ALL of the above statements are true</label>
		</zoo-checkbox>
		<br>
		<zoo-button style="margin: 0 auto" type="hollow">
			<span>Add to cart</span>
		</zoo-button>
	</div>
</zoo-modal>
```

## CSS Variables

| **Name**        | **Default** |
| :-------------- | :---------: |
| `--primary-mid` |  `#3C9700`  |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10005;   |
|  header  | arbitrary content |   &#10005;   |