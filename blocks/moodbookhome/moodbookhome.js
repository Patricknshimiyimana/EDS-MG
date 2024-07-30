export default function decorate(block) {
    
    const sectionDiv = block.querySelector(':scope > div').parentNode;
    console.log("elementoo", sectionDiv.parentNode);
    
    const content = `<div class="container">
        <div class="left-column">
            <h1>KOHRO</h1>
            <h2>Italy</h2>
            <h3>
                NEW RELEASES<br>
                2024
            </h3>
        </div>
        <div class="right-column">
            <!-- This div is for the logo in the bottom right corner -->
        </div>
    </div>`

    sectionDiv.innerHTML = content;
}
  