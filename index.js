let queryButton = document.getElementById("query-submit-button");

queryButton.addEventListener("click",(e)=>{
    // If the submit button is clicked, then get the query string
    let queryString = document.getElementById("query-text-box");

    console.log(queryString.value);
})