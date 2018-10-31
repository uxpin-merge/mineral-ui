## Import Syntax

```javascript
import Tabs, { Tab } from 'mineral-ui/Tabs';
```

### Basic Usage  
Place Tab components within Tabs to allow users to navigate related content in the same space. Use label to briefly describe the related content for users of assistive technologies.
 
> Note
> All of the following examples apply a height in order to prevent shifting of the layout when Tabs contains content of different lengths.


```javascript
<Tabs defaultSelectedTabIndex={1} label="Minerals" height="7.75em">
  <Tab title="Malachite">
    <Text>{content.malachite}</Text>
  </Tab>
  <Tab title="Fluorite">
    <Text>{content.fluorite}</Text>
  </Tab>
  <Tab title="Magnetite">
    <Text>{content.magnetite}</Text>
  </Tab>
</Tabs>
```
