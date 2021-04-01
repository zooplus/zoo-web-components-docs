# [Grid Row](#grid-row)

Grid row component.

***

## Example usage

```HTML
<zoo-grid-row slot="row">
    <div slot="row-details">
        <div>Valid</div>
        <div>2020-05-10</div>
        <div>Grid Row Expand</div>
        <div>
            <button type="button" class="expander">Expand</button>
        </div>
    </div>
    <div slot="row-content" expanded>
        <div>Content</div>
    </div>
</zoo-grid-row>

<zoo-grid-row slot="row">
    <div slot="row-details">
        <div>Valid</div>
        <div>2020-05-20</div>
        <div>Grid Row No Expand</div>
        <div></div>
    </div>
</zoo-grid-row>
```

> zoo-grid-row is special component that allows to define row with additional expandable content. 
> slot="row-content" can be omitted and then zoo-grid-row works just like a standard `<div slot="row">...</div>`
>
> If slot="row-content" is defined, then expand action should be defined to be able to expand additional content.
> To expand row-content add expanded attribute to `<div slot="row-content"></div>`, like in example above.
> expanded attribute should be controlled by client code (button click, row click etc.)

## Attributes

| **Name**   | **Description**                                                          | **Optional** |
| :--------- | :----------------------------------------------------------------------- | :----------: |
| `expanded` | slot="row-content" flag, that indicates if extra content will be visible |   &#10003;   |

## Slots

| **Name** | **Description**   | **Optional** |
| :------- | :---------------- | :----------: |
|          | Arbitrary content |   &#10005;   |
