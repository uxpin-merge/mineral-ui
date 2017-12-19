# Menu

## Data-Driven

```javascript
(() => {
  function IconDanger() {
      return (
        <Icon>
          <g>
            <path d="M3.94 19.49h16.118a1 1 0 0 0 .866-1.498l-8.06-13.99a.996.996 0 0 0-1.732-.001L3.074 17.993a.998.998 0 0 0 .867 1.499zM12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.503h-2v-5h2v5z"/>
          </g>
        </Icon>
      );
    }
  
  const data = [
    {
      items: [
        {
          text: 'Menu item with onClick',
          onClick: event => { console.log(event); }
        },
        {
          text: 'Menu item',
          secondaryText: 'Secondary text'
        }
      ]
    },
    {
      title: 'Group Title',
      items: [
        {
          text: 'Icon at start',
          iconStart: <IconDanger />
        },
        {
          text: 'Icon at end',
          iconEnd: <IconDanger />
        },
        {
          divider: true
        },
        {
          text: 'Danger variant',
          variant: 'danger' // 'danger' | 'success' | 'warning'
        },
        {
          text: 'Disabled menu item',
          disabled: true,
          onClick: () => { console.log('onClick is not triggered for disabled items'); }
        }
      ]
    }
  ];

  return (
    <div>
      <Menu data={data} />
    </div>
  );
})();
```
