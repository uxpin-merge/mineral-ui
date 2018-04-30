# Popover

## Title and Subtitle

Formatted titles render above any other content if provided. Subtitles are only be rendered if the title attribute is present.

```javascript
<div>
  <Popover
    content={<span>Some content</span>}
    placement="right"
    subtitle="Subtitle"
    title="Title"
    isOpen>
    <Button>Open Popover</Button>
  </Popover>
</div>
```
