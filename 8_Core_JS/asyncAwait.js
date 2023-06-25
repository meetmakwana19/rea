function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "This is the fetched data";
            resolve(data);
        }, 2000);
    });
}

async function processData() {
    try {
        console.log("Fetching data...", data);
        var data = await fetchData(); // Pause execution until fetchData() Promise resolves

        console.log("Processing data...");
        const processedData = data.toUpperCase(); // Perform some processing

        console.log("Processed data:", processedData);
    } catch (error) {
        console.error("Error:", error);
    }
}
processData()