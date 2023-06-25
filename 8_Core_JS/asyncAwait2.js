async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async function fetchMultipleData() {
    const url1 = 'https://api.example.com/data1';
    const url2 = 'https://api.example.com/data2';
  
    console.log('Fetching data...');
    
    const data1 = await fetchData(url1); // Pause execution until data1 is fetched
    const data2 = await fetchData(url2); // Pause execution until data2 is fetched
    
    console.log('Data 1:', data1);
    console.log('Data 2:', data2);
  }
  
  fetchMultipleData();
  console.log('Other task...');
  