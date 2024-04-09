// Function to initialize the dashboard
function init() {
    // Reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use D3 to load your `samples.json` file
    d3.json("samples.json").then((data) => {
        // Use the list of sample names to populate the select options
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // Use the first sample from the list to build the initial plots and metadata display
        const firstSample = sampleNames[0];
        buildMetadata(firstSample);
        buildCharts(firstSample);
    });
}

// Function to build metadata display
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        var result = metadata.filter(sampleObj => sampleObj.id == sample)[0];
        // Use d3 to select the panel for sample metadata and clear it
        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");

        // Use `Object.entries` and forEach to add each key and value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

// Function to build charts (Placeholder)
function buildCharts(sample) {
    // Implement chart building logic here
    // This will involve fetching the data again and filtering it for the selected sample
    // You can use Plotly to create Bar and Bubble charts based on the sample data
    console.log(`Build charts for sample ${sample}`);
}

// Function to handle change event when a new sample is selected
function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Initialize the dashboard
init();
