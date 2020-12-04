# frameworkless-jamstack

[![GitHub](https://img.shields.io/github/license/honatas/frameworkless-jamstack?style=plastic)](https://github.com/Honatas/frameworkless-jamstack/blob/master/LICENSE)
[![typescript](https://img.shields.io/badge/made%20with-Typescript-blue?style=plastic)](https://www.typescriptlang.org/)
[![coffee](https://img.shields.io/badge/buy%20me%20a-coffee-brown?style=plastic)](https://ko-fi.com/honatas)

Proof of concept - you can create SPA frontends without a Virtual DOM framework (Angular, React, etc).

## Live

[https://frameworkless-jamstack.web.app](https://frameworkless-jamstack.web.app)

## But Why ?

Most of the time, all web applications we are making are actually master-detail pages for CRUDs, not home brokers. Data doesn't change in real-time and you don't need "blazing fast" rendering, just normal DOM speed is more than enough. Data binding and Virtual DOM rendering are overkill in these cases, taking up machine resources (memory, cpu) you'll not exactly take much advantage of.  

## So what, get back to old-times vanilla ?

Of course not. Typescript is here to stay. Also, the concepts of SPA (Single Page Applications) and having a bundled single javascript file are too good to be left aside. So the proposal here is to get all of these without resorting to any overcomplex Virtual DOM framework.  

## Then how ?

There are innumerous ways to achieve this, given the vast options of libraries to choose from. However, putting them all together does not go effortless, and this is where just booting up a project using a well-known framework comes handy. The problem here though, is that bundled with the frameworks come some functionality we do not desire. Also, such frameworks tend to be opinionated, taking off your freedom of coding.  

In this proof of concept I have tried to use non opinionated libraries as much as possible. Also, have in mind that this is not a one size fits all project, it is much of a starting point upon which to build your own applications and have freedom to include and/or remove any functionality as you seem fit.  

First of all: we need a build tool, because transpiling and bundling a whole project on the command line can be complicated. I've chosen [Gulp](https://gulpjs.com/), not only because it is imperative and unopinionated, but also because it is highly pluggable and offers a vast amount of plugins - including a hot-reload development server called [gulp-connect](https://www.npmjs.com/package/gulp-connect) - and, if we need something else, we can create our own plugins. This was not required though.  

Second: we need [Typescript](https://www.typescriptlang.org/) because, well ... thing is, if you don't love Typescript, it is because you don't know it yet.  

And third: we need a template engine, because our pages have to be dynamic. [Jinja2](https://jinja.palletsprojects.com) is the best template engine out there, but sadly for us it was written in Python. [Nunjucks](https://mozilla.github.io/nunjucks/) is the best attempt to port it to javascript, but apparently the project is unfinished and unmaintained. So in the end I have chosen [Handlebars](https://handlebarsjs.com/) much because of its popularity. It is not as good as Jinja but it can get the work done.  

Finally, to spice things up a bit, I've added [Tailwind CSS](https://tailwindcss.com/) to the jam. We could go with only normal css, but having all this power and not taking advantage of a css preprocessor ([PostCSS](https://postcss.org/) in this case) just seemed wrong.  

## So how does it work ?

Soon... (work in progress)  

## References

[Frameworkless](https://www.frameworklessmovement.org/)  
[Jamstack](https://jamstack.org)  
