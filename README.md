# API_Explorer
Web based API explorer similar to postman

Application Structure:

Actions - Payloads of information that send data from your application to your store. 
          They are the only source of information for the store. 

Components - Search - manages all the components used for API Search Configuration.
             Result - manages all components used to display the result of your API search.

Constants -  Folder containing all the different actionTypes that I use in my Application

Reducers - Describe how the application's state changes in response to actions.

Sagas - Redux-Saga is a library that aims to make side effects (i.e. asynchronous things like data 
        fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.
        The mental model is that a saga is like a separate thread in your application that's solely responsible for 
        side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled 
        from the main application with normal redux actions, it has access to the full redux application state and it can 
        dispatch redux actions as well.
        In this project I used Redux-Saga's to handle my API calls with axios. 
        
        Index - Combines and calls all of my Watcher Saga's
        Watcher - Watches for the RESPONSE action and then calls getResponseData(Response_Saga).
        Response_Saga - Makes an axios request based on the users specifications. Then dispatches an action to the reducers
                        based on response of the axios request.
        

Store - Store handles the state of the entire application. Configured my store to include my rootReducer and rootSaga.


