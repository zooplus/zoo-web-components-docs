# Tooltip

Tooltip component.

***

## Example usage:
	<zoo-button>
		<button type="button">
			Button
			<zoo-tooltip position="bottom" text="Tooltip text"></zoo-tooltip>
		</button>
	</zoo-button>

The above will render to:

<zoo-button>
	<button type="button">
		Button
		<zoo-tooltip position="bottom" text="Tooltip text"></zoo-tooltip>
	</button>
</zoo-button>

## Attributes
|     **Name**    |           **Description**                                          | **Type** | **Default** | **Optional** | 
| :------------- | :-----------------------------------------------------------------|:--------|:-----------|:-----------:|
| `position`      | `top`, `right`, `bottom`, `left`                                   | text     | `top`       |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `text`          | text to be displayed inside tooltip                                | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>

## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :--------------: | :---------------------------------|:-----------:|
|                  | arbitrary content which will replace `text` attribute| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
