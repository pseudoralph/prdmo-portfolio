# Vignette Portfolio

#### Personal project created in React

#### Ralph Perdomo. February 15, 2019

## Description

Vignette is a riff on a blog—a sort of mashup between a blog post and a snapchat. The purpose of a vignette is to create a piece of written content that exists on screen for a brief moment. In order to read a vignette, a user must interact with his or her computer or mobile device. This is done by scrolling the mouse/trackpad or swiping left or right. This will then reveal a message and slowly make that message disapper.

## Details

Hierarchical overview:

![Project hierarchy](https://github.com/pseudoralph/prdmo-portfolio/blob/master/src/components/assets/component-tree.jpg)

- app.jsx
  - header
    - (effect: hover)
  - (ROUTER)
    - about (/)
    - vignette (/vignette)
      - (effect: vignetteEffect)
    - (404-not-found)

## Setup

- clone this repository using `git clone https://github.com/pseudoralph/prdmo-portfolio`
- navigate to the newly-downloaded repo and install dependencies using: `npm install`
- launch dev environment using `npm run start`
- navigate to `localhost:8080`

This site is also accessible at [http://prdmo.s3-website-us-west-2.amazonaws.com/#/](http://prdmo.s3-website-us-west-2.amazonaws.com/#/)

## Technologies Used

JS, React 16.8, HammerJS 2.0.8

## Objectives

- [x] Previous objectives are met.

- [x] Commit history clearly depicts eight solid hours of work.

- [x] README includes an accurate representation of the application's component tree.

- [x] Project was submitted by the Friday deadline.

- [x] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using the correct terminology.

- [x] Best practices for state are followed (stateful components and method binding are used only when necessary, and state is lifted efficiently).

- [x] Development environment is fully-functional, including Babel transpiling, Webpack module bundling, a development server with hot module replacement, and linting.

### License

MIT License

Copyright (c) 2019, Ralph Perdomo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
