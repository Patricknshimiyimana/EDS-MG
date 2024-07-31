export default function decorate(block) {
    
    const sectionDiv = block.querySelector(':scope > div').parentNode;
    
    const homeContent = block.querySelector(':scope > div > div').innerHTML;

    const content = `<div class="home-container">
        <div class="home-left-column">
            ${homeContent}
        </div>
        <div class="home-right-column">
            <!-- This div is for the logo in the bottom right corner -->
        </div>
    </div>`

    sectionDiv.innerHTML = content;
}
  