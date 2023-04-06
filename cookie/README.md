
# Why cookie and session
1. Cookies are small text files that are stored on a user's computer by a website. 
> In summary, cookies are used to store user data on their computer, while sessions are used to store data on the server

## 1.Cookie in express js
  1. npm i cookie-parser
  2. app.use(cookieParser())
  3. set cookie
  ``` javascript
    res.cookie("username", "geekyshows")
    res.cookie("cart", 5)
    res.cookie("username", "geekyshows", {maxAge: 30000})
  ```
  4. get cookie
  ```javascript
   console.log(req.cookies.username)
  ```
  5. delate cookie
  ``` javascript
    res.clearCookie("username")
    res.clearCookie("cart");
  ```
  6. working
  ![](cookie.png)
  
  ![](session.png)