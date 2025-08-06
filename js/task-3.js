function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content); // Content width in pixels
  const paddingWidth = parseFloat(padding) * 2; // Padding on both sides
  const borderWidth = parseFloat(border) * 2; // Border on both sides
  return contentWidth + paddingWidth + borderWidth;
}
