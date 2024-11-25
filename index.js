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
    let hasVisibleItems = false
    const query = test.value.toLowerCase();
    items.forEach((item) => {
        let text = item.textContent.toLowerCase();
        if (query.length === 0 || text.includes(query)) {
            item.style.display = 'block'
            hasVisibleItems = true;
        } else {
            item.style.display = 'none'
        }
    })
    if (query.length > 0 && !hasVisibleItems) {
        noResult.style.display = 'block'
    } else (
        noResult.style.display = 'none'
    )
}

