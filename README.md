# ReactJS Components

[![npm version](https://img.shields.io/npm/v/@tehaque/react.js-components.svg)](https://www.npmjs.com/package/@tehaque/react.js-components)
[![npm downloads](https://img.shields.io/npm/dt/@tehaque/react.js-components.svg)](https://www.npmjs.com/package/@tehaque/react.js-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub contributors](https://img.shields.io/github/contributors/TEHAQUE/ReactJS-Components.svg)](https://github.com/TEHAQUE/ReactJS-Components/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/TEHAQUE/ReactJS-Components.svg?style=social&label=Star&maxAge=2592000)](https://github.com/TEHAQUE/ReactJS-Components/stargazers)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@tehaque/react.js-components.svg)](https://www.npmjs.com/package/@tehaque/react.js-components)
[![Last commit](https://img.shields.io/github/last-commit/TEHAQUE/ReactJS-Components.svg)](https://github.com/TEHAQUE/ReactJS-Components/commits/master)
[![Issues](https://img.shields.io/github/issues-raw/TEHAQUE/ReactJS-Components.svg)](https://github.com/TEHAQUE/ReactJS-Components/issues)
[![Closed issues](https://img.shields.io/github/issues-closed-raw/TEHAQUE/ReactJS-Components.svg)](https://github.com/TEHAQUE/ReactJS-Components/issues?q=is%3Aissue+is%3Aclosed)

# Description

Repository of components that I created in several projects and seemed interesting to me. I encourage you to use and share your observations.
each component includes a readme file with explanations and instructions to make it easy to use. They are created in a simple way and accompanied by an extensive point-by-point manual.

## Installation
```sh
npm i @tehaque/react.js-components
```
current stable version: v1.0.16

## Contents
* [Parallax](#parallax)
* [Slider with depth](#slider-with-timer)

---

# Parallax
This component will work for uniform images divided into several planes. Specifically, it is created to evoke the impression of depth. Should be used on full width of page as a background. It will usually require styling, as it's mostly about showing the component working in react rather than putting a ready-made style to the component. A basic style is created to make it work properly. 

### For the component to work properly:
* import like any Component:
```javascript
import {Parallax} from '@tehaque/react.js-components';
```
* import images (or just pass it straight to table)
 ```javascript
  import B1 from './image1.png';
  .
  import B4 from './image4.png';
  ```
  * create one state with your images and depth you want (for example):
  ```javascript
    const [images, setImages] = useState([[B4, 0.05],[B3, 0.1],[B2, 0.2],[B1, 0.25]]);
  ```
* pass it to Component:
```javascript
  <Parallax images={images}/>
```
### Additional instructions

* It is required to manually divide the image into several parts (necessarily save as PNG), import them as B4, B3 etc.
* Optionally, you can add a background image and several objects.
* You can change the depth value for each image which will change the speed at which it moves.
* Images are first imported and then added to the image state with depth, which gives you the ability to dynamically change them. 


Below is a picture showing an example of a mountain landscape divided into 4 elements:

![image](https://user-images.githubusercontent.com/82551359/228567429-f993ca49-9709-436e-b665-6ea5d559dd2b.png)


# Slider with timer

A simple slider that changes the photo every 20 seconds. Slider can be dynamically changed by the user to any slide by clicking on the button. You can add many photos, buttons to change will be created automatically.
You can also add fields such as title or description to the [sliderList](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/slider.jsx#L5) table and place them somewhere on the page, similarly to [photos in a slider](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/slider.jsx#L53).

### For the component to work properly:
* import like any Component:
```javascript
import {Slider} from '@tehaque/react.js-components';
```
* create one variable or state (for example):
```javascript
 const sliderList = [
    {
      id: 0,
      img: 'https://picsum.photos/1920/1080?random=1'
    },
    {
      id: 1,
      img: 'https://picsum.photos/1920/1080?random=2'
    }]
 ```
* pass it to Component:
```javascript
  <Slider sliderList={sliderList}/>
```
### Additional instructions

* It is required to style the elements, because the base style I created may not work in some projects. it all depends on where you will be using it and what your project requires.
* If you change [slide display time](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/slider.jsx#L37), don't forget to change the ***aniamtion-duration*** value in the [animate](https://github.com/TEHAQUE/ReactJS-Components/blob/c7c571d8856b02401260069b4a693458ec47930e/slider%20with%20timer/styl.css#L40) class to the time you want the slide to last.

***

## Source files are in the version branch

