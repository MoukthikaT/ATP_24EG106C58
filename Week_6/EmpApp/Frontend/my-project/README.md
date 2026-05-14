
FETCH & AXIOS

GET
PUT request using fetch
    fetch(endpoint,{
        method:"POST",
        headers:{"Content-Type":application/json},
        body:JSON.stringify(resource)
    })



AXIOS:
POST request using Axios
    axios.post(endpoint,resource)




# State Management
    sharing state + keeping state sync across the application

    BY using:
    - Context API - small apps
    - Redux / Zustand - Large apps


# Context API
    - Create context object(pipeline)
    - Add state to context obj(add water to pipeline)
    - set this context provider to a parent
    - Consume Context from components


# Issues with Context
- Context with useState hook is a best and simple state management mechanism for small applications.
    But it creates unnecessary re-rendering issues when multiple state is part of a context.
- To overcome this unnecessary re-rendering issue, create multiple contexts and make sure each
    context have a single state.      
- When the application size is huge, then maintanence of multiple contexts will become an issue.
    For such large applications, advanced state management tools like redux / zustand can be used.