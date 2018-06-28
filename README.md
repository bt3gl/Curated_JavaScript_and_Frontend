# 🦄 Everything React 🦄 

A repository to learn [React](https://reactjs.org/). It goes together with a series of posts I am starting at [my blog](http://singularity.sh/).

***This is still in construction so Stay Tuned! <3***



--------

## Tutorials

### React in 5 minutes

1. Install Node.js and Yarn.

```
$ brew install node
$ brew install yarn
```

2. Install [create-react-app](https://github.com/facebook/create-react-app). This awesome framework abstracts away all the complexity of implementing [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), a dev server, a production build process, and other critical things.

3. Create Your App

```
$ yarn create react-app <your-app-name>
```

 4. Run it!

```
$ cd <your-app-name>
$ yarn start
```

5. You now have your app running at `http://localhost:3000/ `! The components of your app are the following:

* `node_modules`: holds all the third-party code, such as React.
* `public`: where our static assets go, like our favicon. It also keeps the project's HTML file. Because React is all JavaScript, you only really need the HTML file to update the <head> (title and meta tags).
* `src` is where our application actually lives. I’d recommend exploring all these files, to get a sense of how they work together.

6. Go to `src` and edit `src/App.js` to add things you want React to render:

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          HELLO THERE!
          <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

You will see the additions instantly updated in your browser at `http://localhost:3000/ `.

#### Voilà! Dat's it? Yes, datzit! <3

## References to get Started

* [React Tutorial](https://reactjs.org/tutorial/tutorial.html).
* [30 Days of React](https://www.fullstackreact.com/30-days-of-react/).
* [The Road to Learn React](https://www.robinwieruch.de/the-road-to-learn-react/.)

----


## License

When making a reference to my work, please use my [website](http://bt3gl.github.io/index.html).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
