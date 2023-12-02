function menuToggle(id) {
    let sections = document.getElementsByClassName('main-section');
    console.log(`Sections list: ${sections}. Length of sections: ${sections.length}`);
    let selectedSection = document.querySelector('#' + id);
    console.log(`Selected section: ${selectedSection.id}`);
    Array.from(sections).forEach((section) => {
        section.classList.add('hidden');
        console.log(`Added class hidden for element: ${section}`);
    });
    selectedSection.classList.remove('hidden');
    console.log(`Removed hidden class from: ${selectedSection.id}`);
}

function expand(articleID, buttonID) {
    let element = document.getElementById(articleID);
    let displayStyle = element.style.display;
    let button = document.getElementById(buttonID);
    if (displayStyle === 'flex') { //Collapse article
        element.style.display = '-webkit-box';
        // Change button text        
        button.textContent = "Expand";
    } else { //Expand article
        //First it is necessary to collapse all expanded elements
        let allElements = document.getElementsByClassName('article-text-content');
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.display = '-webkit-box';
        }
        let allCollapseButtons = document.getElementsByClassName('article-expand-button');
        for (let k = 0; k < allCollapseButtons.length; k++) {
            allCollapseButtons[k].textContent = "Expand";
        }
        //Lastly - expand selected article
        element.style.display = 'flex'; // Show overlapping text
        // Change button text        
        button.textContent = "Collapse";
    }
}