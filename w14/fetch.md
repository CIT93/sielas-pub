Fetch is a function used to send request to API
Fetch grabs data from url, thats where it gets its information from
Then, it returns a response object back to us
Ask, then you shall recieve
Have to set the request as a GET or POST
GET is the default value of the request
Fetch is an async operation

API requres a token, because some of the API's needs a limiter to how many times you can call them

Tracks who calls their API and how many times they call it

GET Request Parameters:
If your request is a GET, you can just input a url for the parameter with a "?" then the token

GET Request Header(s):
Must create a response object

Error Handling:
Although the call is successful, the promise was resolved instead of rejected
The reason why we don't end up in the catch block when there is an error is because making a successful trip to the API is considered a success even if the data is an error.
If the fetch operation fails, then it will go to the catch block.

POST Request:
How did we arrive at Fetch? It arrived in 2015. Native support for Fetch means we don't have to install additional software for usage.
XHR: In chrome devtools there is a filter for fetch/xhr
HTTP Request: request from a client to access a server
Why Fetch?:
- Whenever you can do something natively, you should instead of using third party
- No installation required
- Modern features
- Modern syntax (Promise)




