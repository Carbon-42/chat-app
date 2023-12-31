<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Carbon-42/chat-app">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">CHIT CHAT</h3>

  <p align="center">
    <!-- project_description -->
    <br />
    <a href="https://github.com/Carbon-42/chat-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Carbon-42/chat-app">View Demo</a>
    ·
    <a href="https://github.com/Carbon-42/chat-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Carbon-42/chat-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
<div align='center'><img src='./assets/screenshot.png' style='max-width: 50%;'>
</div>
The Chit Chat app for mobile devices uses React Native. The app will
provide users with a chat interface and options to share images and their
location.

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `carbon-42`, `chat-app`, `twitter_handle`, `brad-richardson-6`, `email_client`, `email`, `CHIT CHAT`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React_Native][React_Native.js]][React_Native-url]
- [Expo][Expo-url]
- [Firebase][Firebase-url]
- [Gifted Chat][Gifted Chat-url]
<!-- - [![Svelte][Svelte.dev]][Svelte-url]
- [![Laravel][Laravel.com]][Laravel-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js LTS release
  ```sh
  visit https://nodejs.org/en/download
  ```
- GIT
  ```sh
  visit https://git-scm.com/
  ```
- Watchmen
  ```sh
  visit https://facebook.github.io/watchman/docs/install#buildinstall
  ```
- Expo
  ```sh
  visit https://docs.expo.dev/get-started/installation/
  ```
- Firebase
  ```sh
  visit https://firebase.google.com/
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/carbon-42/chat-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your firebase API in `app.js`
   ```js
   const firebaseConfig = {"ENTER YOUR API"};
   ```
4. Create a Firestore Database
   ```
   https://firebase.google.com/docs/database
   ```
5. Create a Firestore Cloud Storage
   ```
   https://firebase.google.com/docs/storage
   ```
6. Run the app

```sh
npm start
```

Test the app using Expo Go on your phone or run an emulator on your machine.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ## User Stories -->

## User Stories

1. As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
   friends and family.
   <br>
   <br>
2. As a user, I want to be able to send messages to my friends and family members to exchange
   the latest news.
   <br>
   <br>
3. As a user, I want to send images to my friends to show them what I’m currently doing.
   <br>
   <br>
4. As a user, I want to share my location with my friends to show them where I am.
   <br>
   <br>
5. As a user, I want to be able to read my messages offline so I can reread conversations at any
   time.
   <br>
   <br>
6. As a user with a visual impairment, I want to use a chat app that is compatible with a screen
   reader so that I can engage with a chat interface.

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
  > A page where users can enter their name and choose a background color for the chat screen
        before joining the chat.
- [ ] Feature 2
  > A page displaying the conversation, as well as an input field and submit button.
- [ ] Feature 3
  > The chat provides users with two additional communication features: sending images
        and location data.
- [ ] Feature 4
  > Data gets stored online and offline.

See the [open issues](https://github.com/carbon-42/chat-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->
<!--
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTACT -->

<!-- ## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/carbon-42/chat-app](https://github.com/carbon-42/chat-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []() -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/carbon-42/chat-app.svg?style=for-the-badge
[contributors-url]: https://github.com/carbon-42/chat-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/carbon-42/chat-app.svg?style=for-the-badge
[forks-url]: https://github.com/carbon-42/chat-app/network/members
[stars-shield]: https://img.shields.io/github/stars/carbon-42/chat-app.svg?style=for-the-badge
[stars-url]: https://github.com/carbon-42/chat-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/carbon-42/chat-app.svg?style=for-the-badge
[issues-url]: https://github.com/carbon-42/chat-app/issues
[license-shield]: https://img.shields.io/github/license/carbon-42/chat-app.svg?style=for-the-badge
[license-url]: https://github.com/carbon-42/chat-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/brad-richardson-6
[product-screenshot]: assets/screenshot.png
[React_Native.js]: https://img.shields.io/badge/React_Native.js-000000?style=for-the-badge&logo=React_Nativedotjs&logoColor=white
[React_Native-url]: https://reactnative.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Expo-url]: https://docs.expo.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Firebase-url]: https://firebase.google.com/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Gifted Chat-url]: https://github.com/FaridSafi/react-native-gifted-chat
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
