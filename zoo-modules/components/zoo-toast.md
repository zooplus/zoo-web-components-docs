# [Toast](#toast)

Container component which has fly-in/out animations. It can be controlled via exported functions.

***

## Example usage

```HTML
<zoo-toast>
    <span slot="content">This is an info message.</span>
</zoo-toast>
```

## Attributes

| **Name**  | **Description**                                       | **Default** | **Optional** |
| :-------- | :---------------------------------------------------- | :---------- | :----------: |
| `type`    | `info`, `error`, `success`                            | `info`      |   &#10003;   |
| `timeout` | how long the toast should be visible for (in seconds) | `3`         |   &#10003;   |

## CSS Variables

| **Name**               | **Description**                                 |
| :--------------------- | :---------------------------------------------- |
| `--info-ultralight`    | background color of toast when `type="info"`    |
| `--info-mid`           | icon color of toast when `type="info"`          |
| `--warning-ultralight` | background color of toast when `type="error"`   |
| `--warning-mid`        | icon color of toast when `type="error"`         |
| `--primary-ultralight` | background color of toast when `type="success"` |
| `--primary-mid`        | icon color of toast when `type="success"`       |

## Functions

| **Name** | **Description**               | **Example**                                    |
| :------- | :---------------------------- | :--------------------------------------------- |
| `show`   | `function` to show the toast. | `document.querySelector('#zoo-toast').show();` |
| `hide`   | `function` to hide the toast. | `document.querySelector('#zoo-toast').hide();` |

## Slots

| **Name**  | **Description**   | **Optional** |
| :-------- | :---------------- | :----------: |
| `content` | arbitrary content |   &#10003;   |