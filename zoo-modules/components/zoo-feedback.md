# [Feedback](#feedback)

Container component which provides a styled container with preset icon.

***

## Example usage

```HTML
<div style="height: 50px; width: auto">
	<zoo-feedback>
		This is an info message.
	</zoo-feedback>
</div>
```

### Rendered

<div style="height: 50px; width: auto">
	<zoo-feedback>This is an info message.</zoo-feedback>
</div>

## Attributes

| **Name** | **Description**            | **Default** | **Optional** |
| :------- | :------------------------- | :---------- | :----------: |
| `type`   | `info`, `error`, `success` | `info`      |   &#10003;   |

## CSS Variables

| **Name**               | **Description**                  |
| :--------------------- | :------------------------------- |
| `--primary-ultralight` | background when `type="success"` |
| `--primary-mid`        | icon color when `type="success"` |
| `--info-ultralight`    | background when `type="info"`    |
| `--info-mid`           | icon color when `type="info"`    |
| `--warning-ultralight` | background when `type="error"`   |
| `--warning-mid`        | icon color when `type="error"`   |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |
