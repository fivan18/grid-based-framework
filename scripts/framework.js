function getSelectorItemsToClear(cellsPerItem, maxItems, cssClass) {
    let itemsPerRow = 12 / cellsPerItem;
    let i = itemsPerRow + 1;
    let selector = "";
    while (i <= maxItems) {
        if (selector === "") {
            selector += `.row .${cssClass}:nth-child(${i})`;
        } else {
            selector += `,.row .${cssClass}:nth-child(${i})`;
        }
        i = i + itemsPerRow;
    }
    return selector;
}

function clearItems(cssClass, maxItems) {
    let breakPoint = parseInt(cssClass.split("-")[1]);
    let size = window.innerWidth;
    if (size >= breakPoint) {
        // items to reset
        Array.from(document.querySelectorAll(`.row .${cssClass}.clear-both`)).
            forEach(element => {
                element.classList.remove("clear-both");
            });

        // items to clear
        Array.from(document.querySelectorAll(
            getSelectorItemsToClear(parseInt(cssClass.split("-")[2]), maxItems, cssClass))).
                forEach(element => {
                    element.classList.add("clear-both");
                });
    }
}