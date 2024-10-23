

// Function to send a request to the API Gateway endpoint to update the views count
async function updateViews(){
    try{ 
        const response  = await fetch('https://rx66qfogtl4ulyhicxbsjzn72i0imqgz.lambda-url.us-east-1.on.aws/');
        const data = await response.json();
        document.getElementById('views').innerHTML = data;

    }  catch (error){
        console.log(error);
    }

}

window.onload = updateViews;