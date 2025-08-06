function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content); // Content width in pixels
  const paddingWidth = parseFloat(padding) * 2; // Padding on both sides
  const borderWidth = parseFloat(border) * 2; // Border on both sides
  return contentWidth + paddingWidth + borderWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // Expect 74
console.log(getElementWidth("60px", "12px", "8px")); // Expect 100
console.log(getElementWidth("200px", "0px", "0px")); // Expect 200
