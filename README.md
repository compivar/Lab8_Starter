# Lab 8 - Starter

Isaac Varela

Partner: None

Question 1: Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.<br>
Answer: Within a Github action that runs whenever code is pushed.
- One reason for this is because the test is automated, so you would not need to manually run them locally before pushing code. If the code fails the automated code, then the GitHub action will not push the code until the tests are passed, so you will never risk pushing faulty code.

- Another reason for this is because you want to test as you develop your project, not until the endn of your project. If you run the tests until all development is completed, you will have to deal with all the errors at the end of your project, which would be very stressfull.

Question 2: Would you use an end to end test to check if a function is returning the correct output?<br>
Answer: No, returning the correct output is not a UI concern.<br>
Question 3: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.<br>
Answer: Yes, you would use a unit test to test the "message" feature of a messaging application because writing and sending a message is one feature of the messaging application. You are isolating this single feature and testing whether sending a message works or not.<br>
Question 4:  Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.<br>
Answer: Yes, you would use a unit test to test the "max message length" feature of a messaging application because this is just a single feature of the application. You want to test if this single feature works as intended.
