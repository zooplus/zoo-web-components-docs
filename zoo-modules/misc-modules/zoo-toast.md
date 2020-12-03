# Toast

Container component which has fly-in/out animations. It can be controlled via exported functions.

***

## Example usage 
    <zoo-toast id="zoo-toast" text="This is an info message."></zoo-toast>

## Attributes
|     **Name**    |           **Description**                                          | **Type** | **Default** | **Optional** | 
| :------------- | :-----------------------------------------------------------------|:--------|:-----------|:-----------:|
| `type`          | `info`, `error`, `success`                                         | text     | `info`      |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `text`          | text to be rendered in the toast box                               | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `timeout`       | how long the toast should be visible for (in seconds)              | number   |   `3`       |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--info-ultralight`    |    `#ECF5FA`   |
| `--info-mid`           |    `#459FD0`   |
| `--warning-ultralight` |    `#FDE8E9`   |
| `--warning-mid`        |    `#ED1C24`   |
| `--primary-ultralight` |    `#EBF4E5`   |
| `--primary-mid`        |    `#3C9700`   |
## Functions
|     **Name**    |           **Description**                                          | **Example** |
| :------------- | :-----------------------------------------------------------------|:--------|
| `show`          | `function` to show the toast. Multiple calls to this functions until the toast is hidden will be ignored | `document.querySelector('#zoo-toast').show();`     |
| `hide`          | `function` to hide the toast. Multiple calls to this functions until the toast is shown will be ignored | `document.querySelector('#zoo-toast').hide();`     |
