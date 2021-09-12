- BUG #1: POST /auth/login should only log in with a correct username and password
  The call to authenticate should be asynchronous and include await.
  Otherwise, the method does not wait for the promise to resolve so no error is thrown when username and password don't authenticate

- BUG #2: GET /users incorrectly returns email and phone number data
  Should only return username, first_name, and last_name
  Fixed in the model by modifying the getAll method

- BUG #3: PATCH /[username] should allow user themselves to patch user data
  Currently only allows admin access
  Fixed by removing ensureAdmin middlesware

- BUG #4: PATCH /[username] should only allow user to change fields first_name, last_name, phone, email

- BUG #5: DELETE /users/[username] should return a 404 error if user not found
  The call to the delete method should include await
  Otherwise, the method does not wait for the promise to resolve so no error is thrown when the user isn't found

- BUG #6: middleware authUser threw an error if the request body was empty
  There should be no error with no token
  Fixed by first checking if the request body was empty 