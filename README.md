# Unite Us Coding Challenge

### 
### Dependencies
  1. Angular
  2. Bootstrap

### To Run
  * Download gist and open the HTML file in the browser.
  * The Mock API will also have to be running on port 49567

### Issues
  * Had a bit of trouble with the API, the get request work to send back a response to my post request.

  ~~~
    XMLHttpRequest cannot load http://localhost:49567/api/assistance-requests. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. The response had HTTP status code 404.
  ~~~
  * I can't run the api on the same port locally as the app to overcome the cookie issue. I am not sure if it is an issue with my code or that the API is not accepting post requests from other hosts.  
