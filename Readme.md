# Installation dependencies
> npm i

# Start app
> npm run start

## Note
>> Change the env.js file to .env in your project and update the required field in it. 

# snyk - helps you find and fix known vulnerabilities in your dependencies

>> npm install -g snyk

To authenticate:

1) Run snyk auth from the CLI.

A browser tab opens, redirecting you to authenticate the CLI for use with your account.

2) Click Authenticate.

The authentication ends and you can go back to your terminal to continue working.

## Test for vulnerabilities
Once installed and authenticated, change directory into a folder containing a supported package manifest file (package.json, pom.xml, composer.lock, etc.) and run:

>> cd /my/project/
>> snyk test

## Monitor your project 
>> snyk monitor - this take snapshot of your current dependencies and you can view on snyk.io/monitor





