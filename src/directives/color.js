/* eslint-disable */

export default {
  bind(el, bindings, vnode) {
    // console.log('bindings', bindings);
    // console.log('vnode', vnode);

    const delay = bindings.modifiers['delay'] ? 3000 : 0;

    setTimeout(() => {
      el.style[bindings.arg] = bindings.value;
    }, delay);

    console.log('color directive: bind');
  },
  inserted(el, bindings, vnode) {
    console.log('color directive: inserted');
  },
  update(el, bindings, vnode, oldVnode) {
    console.log('color directive: update');
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('color directive: componentUpdated');
  },
  unbind() {
    console.log('color directive: unbind', arguments);
  },
};
