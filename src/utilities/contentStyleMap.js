const styleMap = {
  ul: 'list-disc list-inside',
  ol: 'list-decimal list-inside',
}

const parseOptions = {
  replace: (node) => {
    const className = styleMap[node.name];

    if ( className && !node.attribs.className ) {
      node.attribs.className = className;

      return node
    }
  },
  trim: true,
}

export { styleMap, parseOptions };
