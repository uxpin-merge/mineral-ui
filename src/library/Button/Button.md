
## Import Syntax

```
import Button from 'mineral-ui/Button';
```

## Primary Buttons

Buttons trigger different actions around the page. Primary Buttons are used once per container, usually as the main call to action for the page. Overuse of primary buttons could make the interface feel too busy.

```javascript
<div>
  <Button primary>Default</Button>
  <Button variant="success" primary>Success</Button>
  <Button variant="warning" primary>Warning</Button>
  <Button variant="danger" primary>Danger</Button>
  <Button primary disabled>Disabled</Button>
</div>
```

## Default

Regular Buttons are good for secondary actions when grouped with another primary button. These Buttons are not impactful enough to represent the primary action in a container.

```javascript
<div>
  <Button>Default</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button disabled>Disabled</Button>
</div>
```

## Minimal

Use for less-important actions, or if there are a lot of other buttons on screen.

```javascript
<div>
  <Button minimal>Default</Button>
  <Button variant="success" minimal>Success</Button>
  <Button variant="warning" minimal>Warning</Button>
  <Button variant="danger" minimal>Danger</Button>
  <Button disabled minimal>Disabled</Button>
</div>
```

## Sizes

To provide hierarchy to actions on your page, change Button impact with the size attribute.

For a Button whose width is defined by its container, use `fullWidth`.

```javascript
<div>
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
  <Button>Large</Button>
  <Button size="jumbo">Jumbo</Button>
  <div>
  <Button fullWidth>Full Width</Button>
  </div>
</div>
```

## Link

Link with Button styling. See the Link component for more conventionally styled links.

```javascript
<Button element="a" href="#link">Link</Button>
```

## Truncation

Long button text is truncated when necessary.

```javascript
<div style={{width: '100px'}}>
  <Button>Supercalifragilisticexpialidocious</Button>
</div>
```

