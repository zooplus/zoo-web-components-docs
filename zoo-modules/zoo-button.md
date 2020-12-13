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
|  `size`  | small, medium              | `small`     |   &#10003;   |

## CSS Variables

| **Name**            | **Default** |
| :------------------ | :---------- |
| `--primary-light`   | `#66B100`   |
| `--primary-mid`     | `#3C9700`   |
| `--primary-dark`    | `#286400`   |
| `--secondary-light` | `#FF8800`   |
| `--secondary-mid`   | `#FF6200`   |
| `--secondary-dark`  | `#CC4E00`   |

## Slots

| **Name** | **Description**                                  | **Optional** |
| :------: | :----------------------------------------------- | :----------: |
|          | `<button>` element with arbitrary content inside |   &#10005;   |
