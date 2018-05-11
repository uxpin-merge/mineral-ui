module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/library/Avatar/Avatar.js',
          'src/library/Button/Button.js',
          'src/library/Checkbox/!(__tests__)/*.js',
          'src/library/Dropdown/Dropdown.js',
          'src/library/Form/!(__tests__)/*.js',
          'src/library/Link/Link.js',
          'src/library/Menu/Menu.js',
          'src/library/Menu/MenuDivider.js',
          'src/library/Menu/MenuItem.js',
          'src/library/Menu/MenuGroup.js',
          'src/library/Popover/Popover.js',
          'src/library/Radio/Radio.js',
          'src/library/Radio/RadioGroup.js',
          'src/library/Select/Select.js',
          'src/library/Text/Text.js',
          'src/library/TextArea/TextArea.js',
          'src/library/TextInput/TextInput.js',
          'src/library/themes/ThemeProvider.js',
          'src/library/Tooltip/Tooltip.js',
        ]
      },
      {
        name: 'Card',
        include: 'src/library/Card/!(__tests__)/*.js'
      },
      {
        name: 'Icons',
        include: 'src/library/Icon/!(index).js'
      },
      {
        name: 'Layout',
        include: [
          'src/library/Box/Box.js',
          'src/library/Flex/!(__tests__)/*.js',
          'src/library/Grid/Grid.js',
          'src/library/Grid/GridItem.js',
          'src/library/StartEnd/StartEnd.js',
        ]
      }
    ]
  }
};