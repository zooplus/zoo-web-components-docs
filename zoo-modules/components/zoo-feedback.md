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

| **Name**               | **Default** |
| :--------------------- | :---------- |
| `--primary-ultralight` | `#EBF4E5`   |
| `--primary-mid`        | `#3C9700`   |
| `--info-ultralight`    | `#ECF5FA`   |
| `--info-mid`           | `#459FD0`   |
| `--warning-ultralight` | `#FDE8E9`   |
| `--warning-mid`        | `#ED1C24`   |

## Slots

| **Name** | **Description**   | **Optional** |
| :------: | :---------------- | :----------: |
|          | arbitrary content |   &#10003;   |
