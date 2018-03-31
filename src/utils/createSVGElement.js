import { createElement } from 'react';

export default function createSVGElement(tree = {}, key) {
  const { name, attrs, childs } = tree;

  const children = childs ? childs.map(createSVGElement) : null;
  return name ? createElement(name, { key, ...attrs }, children) : null;
}
