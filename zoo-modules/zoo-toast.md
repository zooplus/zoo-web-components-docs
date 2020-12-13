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

| **Name**               | **Default** |
| :--------------------- | :---------: |
| `--info-ultralight`    |  `#ECF5FA`  |
| `--info-mid`           |  `#459FD0`  |
| `--warning-ultralight` |  `#FDE8E9`  |
| `--warning-mid`        |  `#ED1C24`  |
| `--primary-ultralight` |  `#EBF4E5`  |
| `--primary-mid`        |  `#3C9700`  |

## Functions

| **Name** | **Description**               | **Example**                                    |
| :------- | :---------------------------- | :--------------------------------------------- |
| `show`   | `function` to show the toast. | `document.querySelector('#zoo-toast').show();` |
| `hide`   | `function` to hide the toast. | `document.querySelector('#zoo-toast').hide();` |

## Slots

| **Name**  | **Description**   | **Optional** |
| :-------- | :---------------- | :----------: |
| `content` | arbitrary content |   &#10003;   |