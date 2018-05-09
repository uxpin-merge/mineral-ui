module.exports = {
  components: {
    categories: [
      {
        name: 'Uncategorized',
        include: [
          'src/library/Button/Button.js',
          'src/library/Card/Card.js',
          'src/library/Dropdown/Dropdown.js',
          'src/library/Link/Link.js',
          'src/library/Menu/Menu.js',
          'src/library/Popover/Popover.js',
          'src/library/Portal/Portal.js',
          'src/library/TextInput/TextInput.js',
        ]
      },
      {
        name: 'Icons',
        include: 'src/library/Icon/!(index).js'
      }
    ]
  }
};
