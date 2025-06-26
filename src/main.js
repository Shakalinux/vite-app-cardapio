import './style.css';
import { renderMenuItems } from './menuRender.js';
import { setupFormSubmission } from './form.js';
import { menuItems , beverageItems} from './menuData.js';


const allItems = [...menuItems, ...beverageItems];


document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems(allItems, 'menu-container');


    setupFormSubmission();
});