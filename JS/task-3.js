function getElementWidth (content, padding, border) {
    const contentWidth = Nummer.parseFloat(content);
    const paddingWidth = Nummer.parseFloat(padding);
    const borderWidth = Nummer.parseFloat(border);

    return contentWidth + 2 * paddingWidth + 2 * borderWidth
}
