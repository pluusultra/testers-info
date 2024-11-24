const test = document.querySelector('.test')
const items = document.querySelectorAll('.text')
const noResult = document.querySelector('.nothing')
let debounceTimer;

import {itemsArray} from './items.js'

test.addEventListener('keyup', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterItems, 200)
});

const filterItems = () => {
    const query = test.value.toLowerCase();
    items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = query.length === 0 || text.includes(query) ? 'block' : 'none'
        if (query.length > 0 && !text.includes(query)) {
            noResult.classList.add('text_visible')
        }
    })
}

