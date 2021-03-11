# [Grid](#grid)

Grid component.

***

## Example usage

```HTML
<div style="margin: 30px;box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)">
	<zoo-grid currentpage="3" maxpages="20" reorderable stickyheader>
		<zoo-grid-header slot="headercell" sortable="true" sortableproperty="createdDate">Created date</zoo-grid-header>
		<zoo-grid-header slot="headercell" sortable="true" sortableproperty="minWeight">Min weight</zoo-grid-header>
		<zoo-grid-header slot="headercell">Price</zoo-grid-header>

		<div slot="row"><div>2020-05-05</div><div>30 kg</div><div>20 EUR</div></div>
		<div slot="row"><div>2020-05-10</div><div>23 kg</div><div>15 EUR</div></div>
		<div slot="row"><div>2020-05-15</div><div>10 kg</div><div>5 EUR</div></div>

		<zoo-select labelposition="left" slot="pagesizeselector">
			<label for="grid-page-size" slot="label">Page Size</label>
			<select id="grid-page-size" slot="select">
				<option selected>5</option>
				<option>10</option>
				<option>25</option>
			</select>
		</zoo-select>
	</zoo-grid>
</div>
```

The above will render to:

<div style="margin: 30px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)">
	<zoo-grid currentpage="3" maxpages="20" reorderable stickyheader>
		<zoo-grid-header slot="headercell" sortable="true" sortableproperty="createdDate">Created date</zoo-grid-header>
		<zoo-grid-header slot="headercell" sortable="true" sortableproperty="minWeight">Min weight</zoo-grid-header>
		<zoo-grid-header slot="headercell">Price</zoo-grid-header>
		<div slot="row"><div>2020-05-05</div><div>30 kg</div><div>20 EUR</div></div>
		<div slot="row"><div>2020-05-10</div><div>23 kg</div><div>15 EUR</div></div>
		<div slot="row">
			<div>2020-05-15</div><div>10 kg</div><div>5 EUR</div>
		</div>
		<zoo-select labelposition="left" slot="pagesizeselector">
			<label for="grid-page-size" slot="label">Page Size</label>
			<select id="grid-page-size" slot="select">
				<option selected>5</option>
				<option>10</option>
				<option>25</option>
			</select>
		</zoo-select>
	</zoo-grid>
</div>

## Attributes

| **Name**        | **Description**                                                            | **Optional** |
| :-------------- | :------------------------------------------------------------------------- | :----------: |
| loading         | flag which indicates whether to show loader inside grid                    |   &#10003;   |
| stickyheader    | flag which indicates whether grid's header should be sticky when scrolling |   &#10003;   |
| resizable       | flag which indicates whether grid columns should be resizable              |   &#10003;   |
| reorderable     | flag which indicates whether grid's column should be reorderable           |   &#10003;   |
| currentpage     | current page that the user is on, mandatory only when using paginator      |   &#10003;   |
| maxpages        | maximum number of pages, mandatory only when using paginator               |   &#10003;   |
| prev-page-title | title for previous page button for a11y                                    |   &#10003;   |
| next-page-title | title for next page button for a11y                                        |   &#10003;   |

> `loading`, `stickyheader`, `resizable` and `reorderable` attributes should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS variables

| **Name**              | **Description**                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------- |
| `--warning-dark`      | user for text color for `norecords` slot                                               |
| `--grid-column-sizes` | sizes of each column, for example: `repeat(var(--grid-column-num), minmax(50px, 1fr))` |

> By default, grid will calculate number of headers supplied via slot,
> and apply `repeat(var(--grid-column-num), minmax(50px, 1fr))` css rule
> to header and each row; If you want to change some of widths of some columns
> you can set `--grid-column-sizes` css custom property on `zoo-grid`
> to change width of columns, for example: `--grid-column-sizes: 150px repeat(9, minmax(50px, 1fr)) !important;`
> to force first column to be 150px wide.
> However, when `resizable` attribute is supplied, grid will set column widths automatically on element level,
> so `--grid-column-sizes` will not work, to force width of any column use the following css:

```CSS
 zoo-grid div[column="1"] {
	min-width: 150px;
 }
```

## Slots

| **Name**         | **Description**                                                            | **Optional** |
| :--------------- | :------------------------------------------------------------------------- | :----------: |
| headercell       | `<zoo-grid-header slot="headercell">Header</zoo-grid-header>`              |   &#10005;   |
| row              | arbitrary content                                                          |   &#10003;   |
| pagesizeselector | arbitrary content                                                          |   &#10003;   |
| norecords        | arbitrary content, whether to show it or not must be handled by the client |   &#10003;   |
| footer-content   | arbitrary content, shown on the same line as pagination                    |   &#10003;   |

### zoo-grid-header attributes

> `sortable` attribute should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

| **Name**           | **Description**                                       | **Optional**                          |
| :----------------- | :---------------------------------------------------- | :------------------------------------ |
| `sortable`         | flag, which indicates whether this column is sortable | &#10003;                              |
| `sortableproperty` | string that will be emitted when user changes sorting | &#10003; - when `sortable` is not set |
| `sort-title`       | title for sort icon for a11y                          | &#10003;                              |
| `swap-title`       | title for swap icon for a11y                          | &#10003;                              |

## Events

| **Name**     | **Description**             | **Event Content**                                              |
| :----------- | :-------------------------- | :------------------------------------------------------------- |
| `sortChange` | output event, on `zoo-grid` | `{detail: { property: $propertyName, direction: $direction }}` |

- `propertyName` - name of property passed to header via `sortableproperty` attribute;
- `direction` - either `desc`, `asc`;

> When `direction` becomes undefined, whole `detail` object emitted in the event is undefined. 

| **Name**     | **Description**                             | **Event Content**                       |
| :----------- | :------------------------------------------ | :-------------------------------------- |
| `pageChange` | output event, whenever current page changes | `{detail: { pageNumber: $pageNumber }}` |
