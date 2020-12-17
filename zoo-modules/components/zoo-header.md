# [Header](#header)

Container header component.

***

## Example usage

```HTML
<zoo-header>
	<img slot="img" alt="Zooplus logo" src="https://zooplus.github.io/zoo-web-components/logo.png"/>
	<h1 slot="headertext">Zooplus web components</h1>
	<zoo-button size="medium" style="margin-left: 50px">
		<button type="button">Zoo+ theme</button>
	</zoo-button>
</zoo-header>
```

The above will render to:

<zoo-header>
	<img slot="img" alt="Zooplus logo" src="https://zooplus.github.io/zoo-web-components/logo.png"/>
	<h1 slot="headertext">Zooplus web components</h1>
	<zoo-button size="medium" style="margin-left: 50px">
		<button type="button">Zoo+ theme</button>
	</zoo-button>
</zoo-header>

## CSS Variables

| **Name**        | **Description** |
| :-------------- | :---------- |
| `--primary-mid` | text color  |

## Slots

| **Name**     | **Description**                                                  | **Optional** |
| :----------- | :--------------------------------------------------------------- | :----------: |
| `img`        | logo image                                                       |   &#10003;   |
| `headertext` | slot for header text, replaces `headertext` attribute is defined |   &#10003;   |
|              | arbitrary content after first two slots                          |   &#10003;   |
