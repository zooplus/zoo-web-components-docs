# [Button](#button)

Button component which provides styles for **`<button></button>`**

***

## Example
```HTML
<zoo-button>
	<button type="button" disabled>Disabled :(</button>
</zoo-button>
```

The above will render to:

<zoo-button>
	<button type="button" disabled>Disabled :(</button>
</zoo-button>

## Attributes

| **Name** | **Description**            | **Default** | **Optional** |
| :------: | :------------------------- | :---------- | :----------: |
|  `type`  | primary, secondary, hollow | `primary`   |   &#10003;   |

## CSS Variables

| **Name**            | **Description**                                                                                    |
| :------------------ | :------------------------------------------------------------------------------------------------- |
| `--primary-light`   | used as right end of gradient                                                                      |
| `--primary-mid`     | used as left side of gradient, background on hover and focus and as text-color for `type="hollow"` |
| `--primary-dark`    | used for background when button is active                                                          |
| `--secondary-light` | same as `primary-light` for `type="secondary"`                                                     |
| `--secondary-mid`   | same as `primary-mid` for `type="secondary"`                                                       |
| `--secondary-dark`  | same as `primary-dark` for `type="secondary"`                                                      |

## Slots

| **Name** | **Description**                                  | **Optional** |
| :------: | :----------------------------------------------- | :----------: |
|          | `<button>` element with arbitrary content inside |   &#10005;   |
