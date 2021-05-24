# [Input Tag](#input-tag)

Component which provides styles for slotted **`<input/>`**. Selected values are stored in slotted **`<select>`**.

## Example usage

```HTML
<zoo-input-tag>
	<label for="input-tag" slot="label">Tag input</label>
	<input id="input-tag" slot="input" placeholder="Type a tag name"/>
	<span slot="info">Start typing to see available tags. Tag filtering should be done on client side by listening on 'input' event on slotted input.</span>
	<span slot="error">At least one tag should be selected!</span>
	<select slot="select" multiple required>
		<option value="Dog"></option>
		<option value="Cat"></option>
		<option value="Bird"></option>
		<option value="Aquatic"></option>
	</select>
	<zoo-input-tag-option slot="tag-option" id="dog-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Dog" tabindex="0">
			<span slot="content">Dog</span>
		</zoo-tag>
		<span slot="description">The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated descendant of the wolf.</span>
	</zoo-input-tag-option>
	<zoo-input-tag-option slot="tag-option" id="cat-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Cat" tabindex="0">
			<span slot="content">Cat</span>
		</zoo-tag>
		<span slot="description">The cat (Felis catus) is a domestic species of small carnivorous mammal.</span>
	</zoo-input-tag-option>
	<zoo-input-tag-option slot="tag-option" id="aquatic-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Aquatic" tabindex="0">
			<span slot="content">Aquatic</span>
		</zoo-tag>
		<span slot="description">An aquatic animal is an animal, either vertebrate or invertebrate, which lives in the water for most or all of its lifetime.</span>
	</zoo-input-tag-option>
	<zoo-input-tag-option slot="tag-option" id="bird-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Bird" tabindex="0">
			<span slot="content">Bird</span>
		</zoo-tag>
		<span slot="description">Birds are a group of warm-blooded vertebrates constituting the class Aves /ˈeɪviːz/, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.</span>
	</zoo-input-tag-option>
	<span slot="no-results">no results</span>
</zoo-input-tag>
```

The above will render to:

<zoo-input-tag>
	<label for="input-tag" slot="label">Tag input</label>
	<input id="input-tag" slot="input" placeholder="Type a tag name"/>
	<span slot="info">Start typing to see available tags. Tag filtering should be done on client side by listening on 'input' event on slotted input.</span>
	<span slot="error">At least one tag should be selected!</span>
	<select slot="select" multiple required>
		<option value="Dog"></option>
		<option value="Cat"></option>
		<option value="Bird"></option>
		<option value="Aquatic"></option>
	</select>
	<zoo-input-tag-option slot="tag-option" id="dog-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Dog" tabindex="0">
			<span slot="content">Dog</span>
		</zoo-tag>
		<span slot="description">The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated descendant of the wolf.</span>
	</zoo-input-tag-option>
	<zoo-input-tag-option slot="tag-option" id="cat-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Cat" tabindex="0">
			<span slot="content">Cat</span>
		</zoo-tag>
		<span slot="description">The cat (Felis catus) is a domestic species of small carnivorous mammal.</span>
	</zoo-input-tag-option>
	<zoo-input-tag-option slot="tag-option" id="aquatic-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Aquatic" tabindex="0">
			<span slot="content">Aquatic</span>
		</zoo-tag>
		<span slot="description">An aquatic animal is an animal, either vertebrate or invertebrate, which lives in the water for most or all of its lifetime.</span>
	</zoo-input-tag-option>
	<zoo-input-tag-option slot="tag-option" id="bird-tag">
		<zoo-tag slot="tag" type="cloud" data-value="Bird" tabindex="0">
			<span slot="content">Bird</span>
		</zoo-tag>
		<span slot="description">Birds are a group of warm-blooded vertebrates constituting the class Aves /ˈeɪviːz/, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.</span>
	</zoo-input-tag-option>
	<span slot="no-results">no results</span>
</zoo-input-tag>

> Note: `id` and `for` attributes on native elements are optional when you do not care about accessibility.

## Attributes

| **Name**  | **Description**                                        | **Optional** |
| :-------- | :----------------------------------------------------- | :----------: |
| `invalid` | flag which indicates whether the input is valid or not |   &#10003;   |

> `invalid` attribute should be used as a [boolean](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes) attribute.

## CSS Variables

| **Name**          | **Description**        |
| :---------------- | :--------------------- |
| `--primary-light` | refer to `zoo-link`    |
| `--primary-mid`   | refer to `zoo-link`    |
| `--primary-dark`  | refer to `zoo-link`    |
| `--warning-mid`   | color of error message |

## Slots

| **Name**     | **Description**                                                            | **Optional** |
| :----------- | :------------------------------------------------------------------------- | :----------: |
| `input`      | name of the slot for input                                                 |   &#10005;   |
| `select`     | slot for select which will hold state of selected options                  |   &#10005;   |
| `tag-option` | slot for `zoo-input-tag-option` element.                                   |   &#10005;   |
| `no-results` | slot for arbitrary content when no options are matched element.            |   &#10005;   |
| `label`      | name of the slot for label                                                 |   &#10003;   |
| `info`       | accepts any element, foe example `span`                                    |   &#10003;   |
| `error`      | accepts any element element that shows when `invalid` attribute is present |   &#10003;   |

## Dependencies

- `zoo-input-tag-option`
- `zoo-cross-icon`
