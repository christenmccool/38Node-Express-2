### Conceptual Exercise

Answer the following questions below:

- What is a JWT?  
A JWT is a JSON Web Token. JWTS are used for authentication. They maintain session data (for example a username) on the client side. JWTs are created according to an open standard. A JWT consists of a header, the payload, and the signature.

- What is the signature portion of the JWT?  What does it do?  
The signuature is the encoded header and payload along with a secret key signed using the algorithm given in the header. Since the signature requires the server's key, it verifies that the sender is who it says it is. It also verifies that the data wasn't changed.

- If a JWT is intercepted, can the attacker see what's inside the payload?  
Yes, the attacker can see the payload. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
The user logs in with a username and password. The server validates the user using information from the database. If the user is validated, a token is generated which includes some of the user information in the payload. The token is returned in the response. The client stores the token in local storage. Everytime the client makes a request, it includes the token in the request. The server then verifies the token and uses the payload to determine access to routes.

- Compare and contrast unit, integration and end-to-end tests.  
Unit tests tests one small piece of code. Code is tested in isolation. Integration tests test how different parts of the application work together. End-to-end tests test an application's flow from start to end.

- What is a mock? What are some things you would mock?  
A mock replaces an object with a mock that simulates their behavior. You might mock an API response or a response that will be random in real life.

- What is continuous integration?  
Continuous integration is when small code changes are merged in frequently rather than big changes at the end.

- What is an environment variable and what are they used for?  
An environment variable is used when code changes based on the environment. For example, an environment variable can specify if you are testing or not, which would change which database to use. 

- What is TDD? What are some benefits and drawbacks?  
TDD is test-driven development. Tests are written first and then the code is written so that the tests will pass. 

- What is the value of using JSONSchema for validation?  
JSONSchema allows data to be validated before it gets into the database.

- What are some ways to decide which code to test?  
You should test the code which might go wrong. 

- What does `RETURNING` do in SQL? When would you use it?  
`RETURNING` returns data. It can be used when an action doesn't have return data, for example INSERT, UPDATE, or DELETE.

- What are some differences between Web Sockets and HTTP?  
  This was an optional portion of 36.4 which I skipped.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?  
  I like Express because I like the way middleware is used.