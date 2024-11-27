import {itemsArray} from './items.js'

const inputSearch = document.querySelector('.test')
const noResult = document.querySelector('.nothing')
const template = document.querySelector('#template')
const itemsList = document.querySelector('tbody')

// Добавляем на сайт массив с информацией о каждом предмете
itemsArray.forEach((el) => {
    const itemElement = template.content.cloneNode(true)
    const itemContainer = itemElement.querySelector('.table-item')
    itemContainer.addEventListener('click', (e) => {
        let originalText = e.target.textContent;
        if (originalText !== 'Скопировано') {
            navigator.clipboard.writeText(e.target.textContent);
            e.target.classList.add('copied')
            e.target.textContent = 'Скопировано';
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.classList.remove('copied')
            }, 1000)
        } else {
            console.log('скопировано')
        }
    })
    let itemId = itemElement.querySelector('.item-id')
    let modelId = itemElement.querySelector('.model-id')
    let itemName = itemElement.querySelector('.item-name')

    itemId.textContent = el.id
    modelId.textContent = el.model
    itemName.textContent = el.name

    itemsList.append(itemElement)
})

const items = document.querySelectorAll('.table-item')
let debounceTimer;

inputSearch.addEventListener('keyup', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterItems, 300)
});

const filterItems = () => {
    let hasVisibleItems = false
    const query = inputSearch.value.toLowerCase();
    items.forEach((item) => {
        let text = item.textContent.toLowerCase();
        if (query.length === 0 || text.includes(query)) {
            hasVisibleItems = true;
            item.classList.remove('table-item_hide')
        } else {
            item.classList.add('table-item_hide')
        }
    })
    if (query.length > 0 && !hasVisibleItems) {
        noResult.classList.remove('nothing_hide')
    } else (
        noResult.classList.add('nothing_hide')
    )
}

