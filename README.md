# frameworkless-jamstack

[![GitHub](https://img.shields.io/github/license/honatas/frameworkless-jamstack?style=plastic)](https://github.com/Honatas/frameworkless-jamstack/blob/master/LICENSE)
[![Netlify](https://img.shields.io/netlify/54815c6d-a842-45d2-b589-4455b16b0303?style=plastic)](https://frameworkless-jamstack.netlify.app)
[![typescript](https://img.shields.io/badge/made%20with-Typescript-blue?style=plastic)](https://www.typescriptlang.org/)
[![coffee](https://img.shields.io/badge/buy%20me%20a-coffee-brown?style=plastic)](https://ko-fi.com/honatas)

Proof of concept - you can create Single Page Applications without a Virtual DOM framework (Angular, React, etc).

## Live

[https://frameworkless-jamstack.netlify.app](https://frameworkless-jamstack.netlify.app)

## But Why ?

Most of the time, all web applications we are making are actually master-detail pages for CRUDs, not home brokers. Data doesn't change in real-time and you don't need "blazing fast" rendering, just normal DOM speed is more than enough. Data binding and Virtual DOM rendering are overkill in these cases, taking up machine resources (memory, cpu) you'll not exactly take much advantage of.  

## So what, get back to old-times vanilla ?

Of course not. Typescript is here to stay. Also, the concepts of SPAs (Single Page Applications) and having a bundled single javascript file are too good to be left aside. So the proposal here is to get all of these, including a modern development environment, without resorting to any overcomplex Virtual DOM framework. As a side effect, you'll end up with a much smaller generated js/css, which in turn will make your website load faster.  

## Then how ?

Check out the [Live Demo](https://frameworkless-jamstack.netlify.app) for more information.  

## Building / Running

You need to have [NodeJS](https://nodejs.org) installed. Clone this project, navigate to its folder, then run **npm install** and **npm start**. Check the app running on your browser on [http://localhost:3001](http://localhost:3001).  

## References

[Frameworkless](https://www.frameworklessmovement.org/)  
[Jamstack](https://jamstack.org)  

## Contributions

Feel free to open an issue or add a pull request. Anytime. Really, I mean it.  

Also, if you like my work, I'll let you know that I love [coffee](https://ko-fi.com/honatas).  
