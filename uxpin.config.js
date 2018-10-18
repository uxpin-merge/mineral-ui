module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/library/Menu/!(__tests__)/*.js',
          'src/library/Avatar/Avatar.js',
          'src/library/Button/Button.js',
          'src/library/Checkbox/!(__tests__)/*.js'
        ]
      }
    ]
  }
};

/*
{
  name: 'General',
  include: [
    
    
    'src/library/Dropdown/Dropdown.js',
    'src/library/Form/!(__tests__)/*.js',
    'src/library/Link/Link.js',
    'src/library/Menu/!(__tests__)/*.js',
    'src/library/Popover/Popover.js',
    'src/library/Radio/!(__tests__)/*.js',
    'src/library/Select/Select.js',
    'src/library/Text/Text.js',
    'src/library/TextArea/TextArea.js',
    'src/library/TextInput/TextInput.js',
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
    'src/library/Grid/!(__tests__)/*.js',
    'src/library/StartEnd/StartEnd.js',
  ]
}
*/
