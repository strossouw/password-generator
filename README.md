###### Password Generator

### Purpose:
The purpose of this project was to use java script to generate a password.

### How to use:
Press generate password.
 

Select password length, must be at least 8 and no more than 128.

 
Select if upper case letters should be included.
 
Select if lower case letters should be included.
 
Select if numbers should be included.
 
Select is special characters should be included.
 
The password will display in the window.
 

The method to achieve this:
User prompt will first check that the password meets the length requirements, between 8 and 128. It will also verify that the input is a number. If it does not pass the verification if statements, it will return to the beginning for a new input.
The next set of user prompts will verify which items to include in the password.
The options are: Upper Case Letters, Lower Case Letters, Numbers and Special Characters. 

After the prompts have verified which items to include, each type will randomly generate through the array. The random arrays will then generate through another random array to fill the password length.
The output will then switch to a string and pass to the output.
