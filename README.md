## Introduction

In order to successfully run this project we have to follow below steps

* Install project dependencies: `npm i`
* To start the application: `npm start`
* To run the tests: `npm test`

These are the only commands you should have to worry about. Running `npm start` will start a local webserver and you can access the page from [http://localhost:8080](http://localhost:8080)

## Whats in this project?

The project consits a route which says Crud Operations With React and Crud Operations With React-Redux

## Crud Operations With React

These scenario contains the AddRecordsWithReact,ShowRecordsWithReact and TableRecordsContainer component


            # ShowRecordsWithReact
                    fetches with record from local json and shows on the UI page

            #TableRecordsContainer
                    contains the structure for table.

            # AddRecordsWithReact
                    This component contains the user form which stores the data in the "react-redux-form"
                            # To ADD the record:-
                            Filling the form and clicking the Add Button.

                            # To EDIT the record:-
                            Click on the radio button and click the edit button then we can edit it and add the edited records.

                            # To DELETE the record:-
                            click on the radio button and then the specific id record will be deleted.

## Crud Operations With React-Redux
These scenario contains the ShowRecordsWithReactRedux and TableRecordsContainerWithRedux component.It uses the React-Redux and Redux Saga.

        # ShowRecordsWithReactRedux
                This component fetches the record through API call and updates the UI layer.


# Testing the component

  `npm test` to test the component

        
      
        

