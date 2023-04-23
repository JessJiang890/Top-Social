//牢记 import这个是个模块化的语法
import './index.css';

import { renderProfile, renderCards } from './js/render';

window.onload = async () => {
  await renderProfile();
  await renderCards();
};
