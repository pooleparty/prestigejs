import cloneDeep from 'lodash/cloneDeep';
import svgson from '../svgson.json';

const manifest = Object.freeze(svgson);

export default function getSVGFromManifest(title = '_placeholder') {
  const icon = manifest.filter(svg => svg.title === title)[0];
  return cloneDeep(icon) || getSVGFromManifest();
}
