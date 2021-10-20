# Chainalysis
Chainalysis Assessment 

![Chainalysis ](https://user-images.githubusercontent.com/69137547/138091128-d8be4928-258f-41a7-a6f3-9177222a7ec6.png)

Zoomed out picture of application.


# Build Application
Clone git repository. Then in the Chainalysis folder run npm install and then cd into client folder and run npm install.

# Run Application
In the Chainalysis folder type npm start to start the server at http://locahost:3001.
Then cd into client folder and type npm start to load the frontend. 
This should open a browser on http://locahost:3000 and display the application.
To load new prices refresh the screen.

# Questionnare:
1.Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

  The sub-optimal choices I made in my implementation due to limited time are creating similar routes in the backend, using redundant api calls in the frontend 
  and not creating classes for the backend.
  
2.Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)

  I think the components I created were a little over-desinged because I could have just made one component for each subsection and written all the code there, but it 
  helps with readability and reusability. The use of useEffect hook was over-designed because it calls the api functions multiple times, but it would be better suited if
  it had a refresh button.
  
3.If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

  I would have used Redux to help with calling the api function in the frontend and would have created classes in the backend to remove redudant code.
  
4.What are some other enhancements you would have made, if you had more time to do this implementation

  Some enchancements I would have made if I had more time to do this implementation is create an interval that would refresh the page by itself using the useEffect hook every
  minute. Created classes to remove redundant code in the backend server. Used Redux to help with organizing the api calls in the frontend. Added more styles to the frontend page.
  
