<p align="center">
  <img align=center src="https://uploads-ssl.webflow.com/625c465d6bcacb7190dc0063/63a4a44fc8c1bd2faaeffe83_gitfinder-logo.png" alt="Logo" height="100">
</p>

<h3 align="center">
GitFinder is a web application built as a part of Fyle Frontend Internship Challenge.
</h3>
<p align="center">
 It allows users to search for other  GitHub users by username and view their profile, including their repositories, followers, following, location.
</h4>
</br></br>
<img src="https://i.imgur.com/y4oV9VV.png" alt="colored line"  witdth="100px" align="left">
</br>

<p >Live Site :  https://gitfinder-7735d.web.app/ </p>

### Steps for setup and usage

### Featurese 🔥
- 📱`Responsive web` a pplication, built on modern web technologies such as `Angular` and `Tailwind CSS`.
- Utilizes the `GitHub API` to access data.
- Stores search `cache` to reduce `API requests` and provide faster access to data.
- Easy to use and `intuitive user interface`.


### Installation

- Go to Angular offical page and follow the instructions to install latest `Angular CLI`
- Download all the file from the repo and keep it in a folder
- Run command `npm install` or `yarn install` (yarn is prefered)
- Running the above command will install all the required dependicies to run the application
- Go to https://github.com/settings/developers and create a new OAuth App
- After successfull creation of app, copy the CLIENT_ID and CLIENT_SECERT 

### Modification

- Go to `github.service.ts` in  `./src/app/service`
- Replace the keys & save it. This would give access to more API requests.
```text
    private clientID = 'your client ID'
    private clientSecret = 'your client secret'
```
- Start the development server by running `ng serve` or `yarn start`

## 🔥 GitFinder is ready 😎 start searching💫

At this point GitFinder is basically ready visit `http://localhost:4200/` </br>
To use GitFinder, simply enter the username of any GitHub user into the search bar and hit enter. </br>
The application will then display the user's profile, including their repositories, followers, following, location, current working status, etc.

<img src="https://i.imgur.com/y4oV9VV.png" alt="colored line" align="center">

### Components

![image](https://user-images.githubusercontent.com/77300329/209218129-1d9d40ba-ec66-4026-bcc2-47f214508df4.png)

![gitfinder (1)](https://user-images.githubusercontent.com/77300329/209219661-894115b2-ab3b-496f-9eac-a0360d390cd1.png)

![gitfinder (2)](https://user-images.githubusercontent.com/77300329/209223018-8fd50ae1-baf0-45db-a880-66969666fc79.png)

<h3 align="center">💫 GitFinder. Made with ❤️ by <a href="https://github.com/othegagan/">Gagan Kumar</a> 🔥 </h3>
<p align="center"> 🤙 +91-9036644552 | <a href="mailto:hi@thegagan.awsapps.com">hi@thegagan.awsapps.com</a> 📫</p>
</center>
