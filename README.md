# belly_button_challenge

Belly Button Challenge Data Analysis
This repository contains code for analyzing data from the Belly Button Challenge. The data is stored in a JSON file (samples.json). The code utilizes D3.js for data manipulation and Plotly for data visualization.

Setup
Ensure you have the necessary libraries installed:

bash
Copy code
npm install d3@latest plotly@latest
Usage
Clone this repository to your local machine.
Open index.html in your preferred web browser.
Description
The index.html file contains JavaScript code to fetch and analyze the Belly Button Challenge data. Here's a breakdown of what each function does:

init(): Initializes the webpage by populating the dropdown menu with sample names and building initial plots.
buildMetadata(sample): Populates metadata information based on the selected sample.
buildBarChart(sample): Builds a bar chart showing the top 10 Operational Taxonomic Units (OTUs) present in the selected sample.
buildBubbleChart(sample): Builds a bubble chart displaying all OTUs present in the selected sample.
buildGaugeChart(sample): Builds a gauge chart representing the belly button washing frequency for the selected sample.
optionChanged(value): Event handler for dropdown menu selection change. Calls all functions to update plots based on the selected sample.
How to Run
To run this code, follow these steps:

Set the url variable to the path of your samples.json file.
Ensure your directory structure matches the one specified in the url variable.
Open index.html in a web browser.
Note
This code assumes the structure of the samples.json file matches the expected format. Any changes to the structure may require corresponding adjustments in the code.





