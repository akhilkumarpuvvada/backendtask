API DEPLOYED URLs : The following are the URLs that are deployed in the cloud Heroku 


*FOR INDEX 
http://chemovatorbackendmain.herokuapp.com/

The URL above shows whether server is running or not

*TO GET ALL DATA FROM JSON 
http://chemovatorbackendmain.herokuapp.com/getAllData

The URl above displays the all the data in the Chemical_type.json file


*TO GET NUMBER OF RECORDS IN JSON FILE
http://chemovatorbackendmain.herokuapp.com/getRecordsCount

The URL above  displays the number of objects in the chemical-type.json file



*TO GET RECORDS USING PATENT TITLE 
http://chemovatorbackendmain.herokuapp.com/getChemicalDetailsTitle/PATENT_TITLE

The URl above displays the number of objects related to that patent_title 

Eg: To get the data click on the URl go to your favorite browser and replace PATENT_TITLE in the URL with PATENT_TITLE in the chemical_type.json file 

 eg: http://chemovatorbackendmain.herokuapp.com/getChemicalDetailsTitle/ANTIOXIDATIVE%20PREPARATIONS


*TO GET RECORDS USING CHEMICAL TYPE
http://chemovatorbackendmain.herokuapp.com/getChemicalDetailsChem/CHEMICAL_TYPE

The URl above displays the number of objects related to that CHEMICAL_TYPE

Eg: To get the data click on the URl go to your favorite browser and replace CHEMICAL_TYPE in the URL with CHEMICAL_TYPE in the chemical_type.json file 
 eg: http://chemovatorbackendmain.herokuapp.com/getChemicalDetailsChem/Antioxidant


*TO GET RECORDS USING PATENT NO 
http://chemovatorbackendmain.herokuapp.com/getPatentDataPatentNo/PATENT_NO

The URl above displays the number of objects related to that PATENT_NO

Eg: To get the data click on the URl go to your favorite browser and replace PATENT_NO in the URL with PATENT_NO in the chemical_type.json file  

eg: http://chemovatorbackendmain.herokuapp.com/getPatentDataPatentNo/US2005158396


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

Open the browser and enter  http://localhost:3001/ in your browser and it shows the whether API is running or not.


Next, to verify the Whether APIs is are getting data
*http://localhost:3001/getRecordsCount       // To get the number of objects in the data file.

*http://localhost:3001/getChemicalDetailsTitle/PATENT_TITLE    // Replace PATENT_TITLE with patent title in the data file.

*http://localhost:3001/getChemicalDetailsChem/CHEMICAL_TYPE    // Replace CHEMICAL_TYPE  with chemical type with chemical type in the data file

*http://localhost:3001/getPatentDataPatentNo/PATENT_NO      // Replace PATENT_NO with patent no in the data file.











