# Input

Input component which provides styles for slotted **`<input type="text"/>`**

***

## Example usage:
	<zoo-input linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
		<input id="input-type-text" slot="inputelement" type="text" placeholder="input"/>
		<label for="input-type-text" slot="inputlabel">Input type text</label>
	</zoo-input>

The above will render to:

<zoo-input linktext="Forgotten your password?" linkhref="https://zooplus.github.io/zoo-web-components/">
	<input id="input-type-text" slot="inputelement" type="text" placeholder="input"/>
	<label for="input-type-text" slot="inputlabel">Input type text</label>
</zoo-input>

## Attributes
|     **Name**    |           **Description**                                          | **Type** | **Default** | **Optional** | 
| :------------- | :-----------------------------------------------------------------|:--------|:-----------|:-----------:|
| `labeltext`     | text to be presented as a label                                    | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `invalid`       | flag which indicates whether the input is valid or not             | boolean  |   `false`   |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|`inputerrormsg`  | text that should be displayed when `valid` is set to `falsy` value | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `infotext`    | text that should be displayed as additional info below the input   | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linktext`    | what text to present as a link text                                | text     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linkhref`    | where the link should lead                                         | link     |             |   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
|   `linktarget`  | target of the anchor link                                          | text     |`about:blank`|   <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
## CSS Variables
|        **Name**        |   **Default**  |
| :-------------------- |:--------------:|
| `--primary-light`      |    `#66B100`   |
| `--primary-mid`        |    `#3C9700`   |
| `--primary-dark`       |    `#286400`   |
| `--warning-mid`        |    `#ED1C24`   |
## Slots
|      **Name**    |           **Description**          | **Optional** | 
| :-------------- | :---------------------------------|:-----------:|
| `inputelement`   | `<input id="input-id" slot="inputelement" type="text/>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/></svg>
| `inputlabel`     | `<label for="input-id" slot="inputlabel">An example input</label>`| <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
| `button`         | `<zoo-button slot="button"><button type="button">Lorem Ipsum</button></zoo-button>` can be injected aside from input for composition of these elements | <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
