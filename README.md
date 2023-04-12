# ReactJS Components

Repository of components that I created in several projects and seemed interesting to me. I encourage you to use and share your observations.
each component includes a readme file with explanations and instructions to make it easy to use.

## Installation
```sh
npm i @tehaque/react.js-components
```
current stable version: v1.0.15

## Usage
### Parallax
This component will work for uniform images divided into several planes. Specifically, it is created to evoke the impression of depth. Should be used on full width of page as a background. It will usually require styling, as it's mostly about showing the component working in react rather than putting a ready-made style to the component. A basic style is created to make it work properly. 

### For the component to work properly:
* import like any Component:
```sh
import {Parallax} from '@tehaque/react.js-components';
```
* import images (or just pass it straight to table)
 ```sh
  import B1 from './image1.png';
  .
  import B4 from './image4.png';
  ```
  * create one state with your images and depth you want (for example):
  ```sh
    const [images, setImages] = useState([[B4, 0.05],[B3, 0.1],[B2, 0.2],[B1, 0.25]]);
  ```
* pass it to Component:
```sh
  <Parallax images={images}/>
```
### Additional instructions

* It is required to manually divide the image into several parts (necessarily save as PNG), import them as B4, B3 etc.
* Optionally, you can add a background image and several objects.
* You can change the depth value for each image which will change the speed at which it moves.
* Images are first imported and then added to the image state with depth, which gives you the ability to dynamically change them. 


Below is a picture showing an example of a mountain landscape divided into 4 elements:

![image](https://user-images.githubusercontent.com/82551359/228567429-f993ca49-9709-436e-b665-6ea5d559dd2b.png)
