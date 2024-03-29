# Password Generator

### Purpose:
The purpose of this project was to use java script to generate a password.

### How to use:
Press generate password.

 ![image](https://user-images.githubusercontent.com/105831699/173973075-8baeff11-968d-4a33-bc79-3b2f7cc34132.png)

Select password length, must be at least 8 and no more than 128.

![image](https://user-images.githubusercontent.com/105831699/173973303-cb0ba78d-03f4-4b7c-b07e-9afc1e7441cc.png)

Select if upper case letters should be included.
 
 ![image](https://user-images.githubusercontent.com/105831699/173973361-e2780dc7-e721-4a26-b63b-bcb760e1ee99.png)

Select if lower case letters should be included.

https://github.com/strossouw/password-generator/blob/main/assets/images/Picture4.png?raw=true
 
Select if numbers should be included.

![image](https://user-images.githubusercontent.com/105831699/173973453-4705c049-b797-4e9c-b731-8610cf42f4c6.png)
 
Select is special characters should be included.

![image](https://user-images.githubusercontent.com/105831699/173973623-e7a422bd-d993-4105-932f-c5f15f81e267.png)
 
The password will display in the window.

![image](https://user-images.githubusercontent.com/105831699/173973680-ed2503b0-88a7-4d35-99cc-6b6cf5548b68.png)

 

## How it works:

User prompt will first check that the password meets the length requirements, between 8 and 128. It will also verify that the input is a number. If it does not pass the verification if statements, it will return to the beginning for a new input.

The next set of user prompts will verify which items to include in the password.
The options are: Upper Case Letters, Lower Case Letters, Numbers and Special Characters. 

After the prompts have verified which items to include, each type will randomly generate through the array. The random arrays will then generate through another random array to fill the password length.
The output will then switch to a string and pass to the output.
