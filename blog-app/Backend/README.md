1. Generate package.json
      npm init -y

2. Create .env file
3. Create express app & assign PORT NUMBER
4. Connect to DB(install mongoose)\
5. Define Schemas and create Models
    - UserTypeSchema
        firstname
        lastname
        email
        password
        role
        profileImageUrl
        isUserActive

    - ArticleSchema
        - author
        - title
        - category
        - content
        - comments
        - isArticleActive

6. Implement APIs
7. Create common APIs for register, login, logout




### Status codes
// 200 -- success
// 201 -- created

// 400 series is for client side mistakes
// 400 -- bad request 
// 401 -- Unauthorised
// 404 -- Not found

// 500 -- server error


// 403 -- forbidden

### XSS
### CSRF


