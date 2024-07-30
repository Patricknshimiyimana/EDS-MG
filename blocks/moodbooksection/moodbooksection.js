export default function decorate(block) {
    
    const sectionDiv = block.querySelector(':scope > div').parentNode;
    console.log("main element", sectionDiv.parentNode);

    const pictureElement = block.querySelector(':scope > div > div > picture')
    
    const containerDiv = sectionDiv.children[0];
    // console.log("container div", containerDiv)

    const rightColumnDiv = containerDiv.children[1].children[0];
    const imgEl = containerDiv.children[1].children[0].querySelector('img');
    imgEl.classList.add('inspiration-image')

    const leftColumnDiv = sectionDiv.children[1];
    
    const subtitleText = leftColumnDiv.children[0].children[0]
    const titleText = leftColumnDiv.children[0].children[1];

    const description = leftColumnDiv.children[1];

    const colorsDiv = sectionDiv.children[2];
    
    const colorImages = colorsDiv?.querySelector('div > p')
    
    const content = `<div class="container">
            <div class="left-column">
                <picture>
                    ${pictureElement.innerHTML}
                </picture>
                <h1>${subtitleText.innerHTML}</h1>
            </div>
            <div class="right-column">
                <div class="relaxed">${titleText.innerHTML} <div class="square"></div></div>
                <picture>
                   ${rightColumnDiv.innerHTML}
                </picture>
                ${description.innerHTML}
                <div class="color-options">
                    <!-- Add color option images as necessary -->
                    ${colorImages ? colorImages.innerHTML : ""}
                </div>
            </div>
        </div>`

    sectionDiv.innerHTML = content;
}
  