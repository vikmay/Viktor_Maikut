const parentBlocks = document.getElementsByClassName("parent-block");

for (let i = 0; i < parentBlocks.length; i++) {
    const button = document.createElement('button');
    button.style.width = "85%";
    button.style.height = "15%";
    button.style.marginBottom = "10%";
    button.textContent = 'Save';
    button.style.cursor = "pointer";
    button.style.backgroundImage = "yellow";
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = 'yellow';
    });
    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = '';
    });
    button.onclick = function () { alert("Button is clicked") };
    parentBlocks[i].appendChild(button);
}; 