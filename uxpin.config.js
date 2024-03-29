module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/library/Avatar/Avatar.js',
          'src/library/Button/Button.js',
          'src/library/ButtonGroup/ButtonGroup.js',
          'src/library/Checkbox/!(__tests__)/*.js',
          'src/library/Dropdown/Dropdown.js',
          'src/library/Form/!(__tests__)/*.js',
          'src/library/Link/Link.js',
          'src/library/Menu/!(__tests__)/*.js',
          'src/library/Popover/Popover.js',
          'src/library/Radio/!(__tests__)/*.js',
          'src/library/Pagination/Pagination.js',
          'src/library/Select/Select.js',
          'src/library/Text/Text.js',
          'src/library/Table/Table.js',
          'src/library/Tabs/Tabs/Tabs.js',
          'src/library/Tabs/Tab/Tab.js',
          'src/library/TextArea/TextArea.js',
          'src/library/TextInput/TextInput.js',
          'src/library/Tooltip/Tooltip.js'
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
          'src/library/Grid/!(__tests__)/*.js',
          'src/library/StartEnd/StartEnd.js'
        ]
      }
    ],
    wrapper: 'src/library/themes/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: "Mineral UI"
};
