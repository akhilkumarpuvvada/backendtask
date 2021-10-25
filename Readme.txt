API DEPLOYED URL :


*FOR INDEX 
http://chemovatorbackendmain.herokuapp.com/

*TO GET ALL DATA FROM JSON 
http://chemovatorbackendmain.herokuapp.com/getAllData


*TO GET NUMBER OF RECORDS IN JSON FILE
http://chemovatorbackendmain.herokuapp.com/getRecordsCount



*TO GET RECORDS USING PATENT TITLE 
http://chemovatorbackendmain.herokuapp.com/getChemicalDetailsTitle/PATENTNO


*TO GET RECORDS USING CHEMICAL TYPE
http://chemovatorbackendmain.herokuapp.com/getChemicalDetailsChem/CHEMICAL_TYPE


*TO GET RECORDS USING PATENT NO 
http://chemovatorbackendmain.herokuapp.com/getPatentDataPatentNo/PATENT_NO


***************************************************************************************************************

TO DEPLOY THE API TO YOU HEROKU 

1. CREATE A HEROKU ACCOUNT USING THE LINK BELOW:
https://signup.heroku.com/

2. THEN OPEN YOUR COMMAND LINE THEN PASTE THIS COMMAND
npm i -g heroku

3. THEN WRITE THE BELOW COMMAND IN YOUR COMMAND LINE TO LOGIN WITH HEROKU
heroku login

4. AFTER LOGGING IN SUCCESSFULLY TYPE COMMAND
heroku create yourappname

5. THEN TO DEPLOY THE API RUN THE FOLLOWING COMMANDS:

git add .
git commit -m "your comment "
git push heroku master


****************************************************************************************************************

TO  RUN THE PROJECT ON YOUR LOCALHOST 

Go to your project directory then open your Command line in directory and then  type:

npm start






