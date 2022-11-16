# Lab 8 - Starter

Question 1: Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Answer: Within a Github action that runs whenever code is pushed.

<ul>
    <li>One reason for this is because the test is automated, so you would not need to manually run them locally before pushing code. If the code fails the automated code, then the GitHub action will not push the code until the tests are passed, so you will never risk pushing faulty code.
    <li>
    <li>Another reason for this is because you want to test as you develop your project, not until the endn of your project. If you run the tests until all development is completed, you will have to deal with all the errors at the end of your project, which would be very stressfull.
    <li>
<ul>
