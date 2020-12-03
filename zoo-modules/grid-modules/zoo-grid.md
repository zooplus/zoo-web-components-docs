# Grid

Grid component.

***

## Example usage:
	<div style="margin: 30px; box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)">
		<zoo-grid currentpage="3" maxpages="20" reorderable stickyheader>
			<zoo-grid-header slot="headercell" sortable="true" sortableproperty="createdDate">Created date</zoo-grid-header>
			<zoo-grid-header slot="headercell" sortable="true" sortableproperty="minWeight">Min weight</zoo-grid-header>
			<zoo-grid-header slot="headercell">Price</zoo-grid-header>

			<div slot="row"><div>2020-05-05</div><div>30 kg</div><div>20 EUR</div></div>
			<div slot="row"><div>2020-05-10</div><div>23 kg</div><div>15 EUR</div></div>
			<div slot="row"><div>2020-05-15</div><div>10 kg</div><div>5 EUR</div></div>

			<div slot="pagesizeselector">
				<zoo-select labelposition="left">
					<select id="grid-page-size" slot="selectelement">
						<option selected>5</option>
						<option>10</option>
						<option>25</option>
					</select>
					<label for="grid-page-size" slot="selectlabel">Page Size</label>
				</zoo-select>
			</div>
		</zoo-grid>
	</div>

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
<div slot="pagesizeselector">
	<zoo-select labelposition="left">
		<select id="grid-page-size" slot="selectelement">
			<option selected>5</option>
			<option>10</option>
			<option>25</option>
		</select>
		<label for="grid-page-size" slot="selectlabel">Page Size</label>
	</zoo-select>
</div>
</zoo-grid>
</div>

## Attributes
|   **Name**    |           **Description**                                                      | **Type** | **Default** | **Optional** |
| :----------- | :-----------------------------------------------------------------------------|:--------|:-----------|:-----------:|
| `loading`     | flag which indicates whether to show loader inside grid                        | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `stickyheader`| flag which indicates whether grid's header should be sticky when scrolling     | boolean (`present` or `absent`)  | |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `resizable`   | flag which indicates whether grid columns should be resizable                  | boolean (`present` or `absent`)  | |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `reorderable` | flag which indicates whether grid's column should be reorderable               | boolean (`present` or `absent`)  | |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `currentpage` | current page that the user is on, mandatory only when using paginator          | number   |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `maxpages`    | maximum number of pages, mandatory only when using paginator                   | number   |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>


## CSS variables
|        **Name**        |                        **Default**                       |
| :-------------------- |:--------------------------------------------------------|
| `--warning-dark`       |    `#BD161C`  										    |
| `--grid-column-sizes`  |    `repeat(var(--grid-column-num), minmax(50px, 1fr))`   |

> By default, grid will calculate number of headers supplied via slot, and apply `repeat(var(--grid-column-num), minmax(50px, 1fr))` css rule to header and each row; If you want to change some of widths of some columns you can set `--grid-column-sizes` css custom property on `zoo-grid` to change width of columns, for example: `--grid-column-sizes: 150px repeat(9, minmax(50px, 1fr)) !important;` to force first column to be 150px wide.      
> However, when `resizable` attribute is supplied, grid will set column widths automatically on element level, so `--grid-column-sizes` will not work, to force width of any column use the following css:
> ```
> zoo-grid div[column="1"] {
>	min-width: 150px;
> }
> ```

## Slots
|      **Name**     |           **Description**          | **Optional** | 
| :--------------- | :---------------------------------|:-----------:|
| `headercell`      | `<zoo-grid-header slot="headercell">Header</zoo-grid-header>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `row`             | arbitrary content | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `paginator`       | arbitrary content, default is: `<zoo-grid-paginator><slot name="pagesizeselector"></slot></zoo-grid-paginator>` | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `pagesizeselector`| arbitrary content, mandatory when `paginator` slot is filled | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `norecords`       | arbitrary content, whether to show it or not must be handled by the client | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>

### zoo-grid-header attributes
|       **Name**     |           **Description**                      | **Type** | **Default** | **Optional** |
| :---------------- | :---------------------------------------------:|:--------|:-----------|:-----------:|
| `sortable`         |                                                | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `sortableproperty` |                                                | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> - when `sortable` is not set

## Events

|       **Name**     |           **Description**                      | **Event Content** | 
| :---------------- | :---------------------------------------------|:-----------------|
| `sortChange`       |  output event, whenever user changes sorting the following object will be dispatched on `zoo-grid` | `{detail: { property: $propertyName, direction: $direction }}`
- `propertyName` - name of property passed to header via `sortableproperty` attribute;      
- `direction` - either `desc`, `asc` or `undefined`; 

|       **Name**     |           **Description**                      | **Event Content** | 
| :---------------- | :---------------------------------------------|:-----------------|
| `pageChange`       |  output event, whenever user changes current page the following object will be dispatched on `zoo-grid` | `{detail: { pageNumber: $pageNumber }}`
- `pageNumber` - number of the page user wants to go to
