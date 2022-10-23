var dropdown = (
  <Dropdown>
    A dropdown list
    <Menu>
      <MenuItem>Do Something</MenuItem>
      <MenuItem>Do Something Fun!</MenuItem>
      <MenuItem>Do Something Else</MenuItem>
    </Menu>
  </Dropdown>
);

var box = jsx`
  <${Box}>
    ${
      shouldShowAnswer(user)
        ? jsx`<${Answer} value=${false}>no</${Answer}>`
        : jsx`
        <${Box.Comment}>
         Text Content
        </${Box.Comment}>
      `
    }
  </${Box}>
`;

var box = (
  <Box>
    {shouldShowAnswer(user) ? (
      <Answer value={false}>no</Answer>
    ) : (
      <Box.Comment>Text Content</Box.Comment>
    )}
  </Box>
);
render(dropdown);
