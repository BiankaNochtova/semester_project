// index.js
document.addEventListener('DOMContentLoaded', () => {
    // This function will run after the document is fully loaded
    loadData();
  });
  
  function loadData() {
    fetch('data.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data loaded:', data);
        displayData(data);
      })
      .catch(error => {
        console.error('Could not load data:', error);
      });
  }
  
  function displayData(data) {
    // Here you would have code to display the data on the page
    // For now, let's just log the thrift shop names
    const shopNames = data.thrift_shops.map(shop => shop.name);
    console.log('Thrift shop names:', shopNames.join(', '));
  }
  