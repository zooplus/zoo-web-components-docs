# [Grid Header](#grid-header)

Grid header component.

***

## Example usage

```HTML
<zoo-grid-header slot="headercell" sortable="true" sortableproperty="createdDate">Created date</zoo-grid-header>
```

## Attributes

> `sortable` attribute should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

| **Name**           | **Description**                                       | **Optional**                          |
| :----------------- | :---------------------------------------------------- | :------------------------------------ |
| `sortable`         | flag, which indicates whether this column is sortable | &#10003;                              |
| `sortableproperty` | string that will be emitted when user changes sorting | &#10003; - when `sortable` is not set |
| `sort-title`       | title for sort icon for a11y                          | &#10003;                              |
| `swap-title`       | title for swap icon for a11y                          | &#10003;                              |

## Slots

| **Name** | **Description**   | **Optional** |
| :------- | :---------------- | :----------: |
|          | Arbitrary content |   &#10005;   |

## Dependencies

- `zoo-grid`
- `zoo-arrow-icon`
