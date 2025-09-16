document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("color");
    const customText = document.getElementById("custom-text");
    const createCustomSvgButton = document.getElementById("create-custom-svg");
    const customSvgContainer = document.getElementById("custom-svg-container");

    // Function to create custom hexagon SVG
    function createCustomHexagonSVG(text, id = Date.now(), color = 'white') {
        const svgNS = "http://www.w3.org/2000/svg";
        const svgWrapper = document.createElement("div");
        svgWrapper.classList.add("svg-wrapper");
        svgWrapper.setAttribute("data-id", id);
        svgWrapper.setAttribute("data-custom", "true");

        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");
        svg.setAttribute("viewBox", "0 0 100 100");

        const polygon = document.createElementNS(svgNS, "polygon");
        polygon.setAttribute("points", "50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5");
        polygon.setAttribute("class", "hexagon");
        polygon.style.fill = color;
        polygon.style.stroke = "black";
        polygon.style.strokeWidth = "1px";

        const textElement = document.createElementNS(svgNS, "text");
        textElement.setAttribute("x", "50%");
        textElement.setAttribute("y", "35%");
        textElement.setAttribute("text-anchor", "middle");
        textElement.setAttribute("fill", "black");
        textElement.setAttribute("font-size", "10");
        textElement.setAttribute("font-weight", "bold");
        
        
        // Split text into multiple lines if it exceeds a certain length
        const lines = wrapText(text, 12); // Adjust the number 12 to control line length
        lines.forEach((line, index) => {
            const tspan = document.createElementNS(svgNS, "tspan");
            tspan.setAttribute("x", "50%");
            tspan.setAttribute("dy", index === 0 ? "0" : "1.2em");
            tspan.textContent = line;
            textElement.appendChild(tspan);
        });


        /*
        const lines = text.split("\n");
        lines.forEach((line, index) => {
            const tspan = document.createElementNS(svgNS, "tspan");
            tspan.setAttribute("x", "50%");
            tspan.setAttribute("dy", index === 0 ? "0" : "1.2em");
            tspan.textContent = line;
            textElement.appendChild(tspan);
        });  */

        svg.appendChild(polygon);
        svg.appendChild(textElement);
        svgWrapper.appendChild(svg);

        // Event listener for color selection
        svgWrapper.addEventListener("click", handleCustomColorChange);

        // Event listener for deleting SVG on double-click
        svgWrapper.addEventListener("dblclick", () => {
            deleteCustomSvg(id);
            customSvgContainer.removeChild(svgWrapper);
        });

        return svgWrapper;
    }

    // Function to wrap text into multiple lines
    function wrapText(text, maxLineLength) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = '';

        words.forEach(word => {
            if (currentLine.length + word.length + 1 <= maxLineLength) {
                currentLine += (currentLine.length > 0 ? ' ' : '') + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        });

        if (currentLine.length > 0) {
            lines.push(currentLine);
        }

        return lines;
    }

    // Function to handle color change for custom SVGs
    function handleCustomColorChange(event) {
        const svgWrapper = event.currentTarget;
        const id = svgWrapper.getAttribute("data-id");
        const currentHexagon = svgWrapper.querySelector(".hexagon");
        const currentColor = currentHexagon.style.fill;

        if (currentColor && currentColor !== 'none') {
            currentHexagon.style.fill = 'none';
            updateLocalStorage(id, svgWrapper.querySelector("text").textContent, 'none');
        } else {
            const selectedColor = colorPicker.value;
            currentHexagon.style.fill = selectedColor;
            updateLocalStorage(id, svgWrapper.querySelector("text").textContent, selectedColor);
        }
    }

    // Function to handle color change for existing SVGs
    function handleExistingColorChange(event) {
        const svgWrapper = event.currentTarget;
        const id = svgWrapper.getAttribute("data-id");
        const currentHexagon = svgWrapper.querySelector(".hexagon");
        const currentColor = currentHexagon.style.fill;

        if (currentColor && currentColor !== 'none') {
            currentHexagon.style.fill = 'none';
            localStorage.removeItem(`${pageIdentifier}svg${id}Color`);
        } else {
            const selectedColor = colorPicker.value;
            currentHexagon.style.fill = selectedColor;
            localStorage.setItem(`${pageIdentifier}svg${id}Color`, selectedColor);
        }
    }

    // Function to save custom SVG data in localStorage
    function updateLocalStorage(id, text, color) {
        let svgData = JSON.parse(localStorage.getItem(`${pageIdentifier}customSVGs`)) || [];
        const index = svgData.findIndex(item => item.id === id);

        if (index !== -1) {
            svgData[index] = { id, text, color };
        } else {
            svgData.push({ id, text, color });
        }

        localStorage.setItem(`${pageIdentifier}customSVGs`, JSON.stringify(svgData));
    }

    // Function to delete custom SVG from localStorage
    function deleteCustomSvg(id) {
        let svgData = JSON.parse(localStorage.getItem(`${pageIdentifier}customSVGs`)) || [];
        svgData = svgData.filter(item => item.id !== id);
        localStorage.setItem(`${pageIdentifier}customSVGs`, JSON.stringify(svgData));
    }


    // Event listener for creating custom SVG
    createCustomSvgButton.addEventListener("click", () => {
        const text = customText.value.trim();
        if (text) {
            const customSvg = createCustomHexagonSVG(text);
            customSvgContainer.appendChild(customSvg); // Append new SVG to the end
            updateLocalStorage(customSvg.getAttribute("data-id"), text, 'white');
            resetInputFields();
        } else {
            alert("Please enter some text for the custom SVG.");
        }
    });

    // Function to reset input fields after creating SVG
    function resetInputFields() {
        customText.value = '';
    }

    // Function to load custom SVGs from localStorage
    function loadCustomSVGs() {
        const svgData = JSON.parse(localStorage.getItem(`${pageIdentifier}customSVGs`)) || [];
        svgData.forEach(({ id, text, color }) => {
            const customSvg = createCustomHexagonSVG(text, id, color);
            customSvgContainer.appendChild(customSvg);
        });
    }

    // Initial setup for existing SVGs
    const existingSvgWrappers = document.querySelectorAll(".svg-wrapper[data-custom='false']");
    existingSvgWrappers.forEach(wrapper => {
        const id = wrapper.getAttribute("data-id");
        const savedColor = localStorage.getItem(`${pageIdentifier}svg${id}Color`);
        if (savedColor) {
            wrapper.querySelector(".hexagon").style.fill = savedColor;
        }
        wrapper.addEventListener("click", handleExistingColorChange);
    });

    
    

    // Load custom SVGs on page load
    loadCustomSVGs();
});
