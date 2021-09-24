<p>I received this project as a take-home assignment and decided to use it as an opportunity to practice and learn new technologies. </p>

Unlike my previous React applications which were built using class components, this was built primarily using functional components and React Hooks. At first there was a little bit of a learning curve trying to figure out how to do things like ```componentDidMount()``` using ```useEffect()``` After adjusting, I quickly began to appreciate how much time I was able to save avoiding boilerplate code like

```JavaScript
import React from 'react';

class CoolComponent extends React.Component {
      constructor(props) {
           super(props)
      }
      
      componentDidMount(){};
      
      render() {
            return( <div> haha I'm a div </div> )
      }
  }
 ``` 
 
<p>I also parsed a local JSON for the first time, usually I only work with JSON that had been retrieved from an external API.</p>

<p>Another really cool thing I learned how to do with this project was deploying a full React app to github pages using the [Github Pages](https://www.npmjs.com/package/gh-pages) dev dependency. This [guide](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) was super helpful.</p> 

<p>At the end of the day, I had a ton of fun brushing up on old skills, learning new ones, and building a game from scratch.>/p>

### [Check it out!](https://john-c-20.github.io/crossword)
