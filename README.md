## Password Generator Challenge
Module 3 assignment

## Purpose
Randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Built With:

* Java Script
* HTML
* CSS

## Website

https://jenniferfadare.github.io/password-generator/ 

## Acceptance Criteria

GIVEN I need a new, secure password

- [X] WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria

- [X] WHEN prompted for password criteria THEN I select which criteria to include in the password

    The user is asked to select 'ok' if they want the feature and 'cancel' if they don't with a simple window.confirm to minimize user error and input handeling.

- [X] WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
![image of step 2](assets/images/password-generator-step2)

- [X] WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
![image of step3](assets/images/password-generator-step3)

- [X] WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

In the userInput function, I decided to make an array called passwordPreference and defaulted the values of upperCase, lowerCase, specialChars, and numbers to false.  After testing for the password length, I ensured that the code would not continue if the values of the four attributes remained to be false.

- [X] WHEN all prompts are answered THEN a password is generated that matches the selected criteria


    This was the hardest part of the challenge and took me a while to understand that I was thinking about it too hard.  I achieved this part by creating a character bank and concatonating the possible word banks together, then using the random number feature to pick the position in the character bank array.

- [X] WHEN the password is generated THEN the password is either displayed in an alert or written to the page

![Image of step4](assets/images/password-generator-step4)

## Thought Process Through This Assignment

I find that my thought process when approaching solving a problem is linear.  The average coder probably puts the main parts in place then validates the information later, but i find that I think through the problem in order.  I'm going to try to do better on my next assignement.

I did comment out the code that came with the assignment because it confused me.  Now that I'm done i realize what it was for and I'll have to practice reading code that already exists.

## Contributions

It took me forever to complete this assignment because I was too prideful to admit that this little ol' assignement wasn't hard, but it truely got me.  When I finally tried it out, it took me two TA sessions and a tutor to get the light bulb.  Now I can finally let it go.

## Grading Requirements

- [X] Satisifies all the acceptance criteria

- [X] Application deployed at live URL

- [X] Application GitHub URL submitted

- [X] GitHub repository that contains application code

- [X] Application user experience is intuitive and easy to navigate

- [X] Application UI style is clean and polished

- [X] Application resembles the mock-up functionality provided

- [X] Repository has a unique name

- [X] Repository follows best practices for file structure and naming conventions

- [X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- [X] Repository contains quality README file with description, screenshot, and link to deployed application


:heart: Jennifer Fadare


