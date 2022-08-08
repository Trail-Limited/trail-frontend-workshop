/**
 * This semantic z-index stragety is based on the technique described in this
 * article: https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/
 */

const base = 0;
const above = 1; // use this for all values above the base
const below = -1; // and this for all values below the base

const loadingSkeleton = above + base;
const tableHeader = above + loadingSkeleton;
const navigation = above + base;
const footer = above + base;
const modal = above + navigation;
const popup = above + modal;
const scrollBar = above + popup;

module.exports = {
  navigation,
  tableHeader,
  footer,
  modal,
  popup,
  auto: 'auto',
  scrollBar,
};
