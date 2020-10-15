console.log("This is npm practise nodetut6");
/* Notes 
1. npm helps by providing packages.
2. "npm init" command initialize this folder as a node packges and creates a package.jason file.
Now whenever we install any package through npm in this folder then node will automatically add the dependencies 
in package.jsonfile like npm install express , npm install slugify etc

3. we can install lower version of packages also like npm install slugify@1.3.5  (1.3.5= major.minor.patch)
(software 1.0.0 
 bug fixed 1.0.1
 new version which include new feature alog with old feature - 1.1.0
 new functions biulded and old functions removed, major changes so 2.0.0      )

4.Also we can remove dependency from package.json file by uninstalling package like npm uninstall express.

5.Node Modules - This folder contains all the project related modules which can be used with the help of
require keyword in this project.This folder will be created whenever we install npm and
it will contain dependecies of dependecies of dependecies.

6.Package = This are files which someone else have written and  we are using in our project.

7. Dev dependencies - Adding nodemon utility in dev dependency (nodemon : It restarts the server
     automatically whenever our code is updated, it is command line utility).

7. Dev dependecies are different from Production dependecies.

if we our going in production environment and deploying the code in our server then nodemon will not be used
as it is added in dev dependencies.

8. We can use nodemon utility from any where in any project by installing it globally 
using command: " npm i nodemon --global "

9.npm dependencies sign means

slugify ^1.4.5 (^ : tullu) : it means exactly npm will install 1.4.5 version 
slugify ~2.0.2 (tild sign) : so if new patch came then it will accept new patch and install latest version.
slugify >1.4.4 (greater then sign) then it will install latest version above 1.4.4

10. to check version:  npm view slugify version.

POSTMAN
postman is a app which takes the get, post, put, delete request and give the response inside this app only.
profit  - no need to feth api or no need to wirte javascript node application.
we can directly see the what is response of one link/ URL in POSTMAN.

example dog.ceo for GET request and jsonplaceholder for POST request.
*/
