# [Button Group](#button-group)

Button group renders group of **`<zoo-button>`** components and it works like a tabs, where only one button can be in active state.

Set data-active attribute on one of **`<zoo-button>`** components to mark it as initially active.
***

## Example

```HTML
<zoo-button-group active-type="primary" inactive-type="transparent" style="width: max-content">
    <zoo-button>
        <button type="button">Status Pending</button>
    </zoo-button>
    <zoo-button data-active>
        <button type="button">Fulfilled</button>
    </zoo-button>
    <zoo-button>
        <button type="button">Status Failure</button>
    </zoo-button>
</zoo-button-group>
```

The above will render to:

<zoo-button-group active-type="primary" inactive-type="transparent" style="width: max-content">
    <zoo-button>
        <button type="button">Status Pending</button>
    </zoo-button>
    <zoo-button data-active>
        <button type="button">Fulfilled</button>
    </zoo-button>
    <zoo-button>
        <button type="button">Status Failure</button>
    </zoo-button>
</zoo-button-group>

## Attributes

| **Name**          | **Description**                                           | **Optional** |
| :---------------: | :-------------------------------------------------------- | :----------: |
|  `active-type`    | zoo-button type (primary, secondary, hollow, transparent) |  &#10005;    |
|  `inactive-type`  | zoo-button type (primary, secondary, hollow, transparent) |  &#10005;    |

## Slots

| **Name** | **Description**                                        | **Optional** |
| :------: | :----------------------------------------------------- | :----------: |
|          | `<zoo-button>` component with arbitrary content inside |   &#10005;   |
