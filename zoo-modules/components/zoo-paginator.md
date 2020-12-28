# [Paginator](#paginator)

Paginator component.

***

## Example

```HTML
<zoo-paginator currentpage="1" maxpages="10"></zoo-paginator>
```

The above will render to:

<zoo-paginator currentpage="1" maxpages="10"></zoo-paginator>

## Attributes

| **Name**      | **Description**         | **Optional** |
| :------------ | :---------------------- | :----------: |
| `currentpage` | current active page     |   &#10003;   |
| `maxpages`    | number of the last page |   &#10003;   |

## CSS Variables

| **Name**               | **Description**                     |
| :--------------------- | :---------------------------------- |
| `--primary-ultralight` | used as background for active page  |
| `--primary-mid`        | used as text color for page numbers |

## Slots

| **Name**           | **Description**                                                                                            | **Optional** |
| :----------------- | :--------------------------------------------------------------------------------------------------------- | :----------: |
| `pagesizeselector` | element that should allow used to set page size, it is just presentational slot, it does not handle events |   &#10005;   |

## Events

| **Name**     | **Description**                       | **Event Content**                       |
| :----------- | :------------------------------------ | :-------------------------------------- |
| `pageChange` | output event whenever page is changed | `{detail: { pageNumber: $pageNumber }}` |
