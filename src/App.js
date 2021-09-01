
import './App.css';
import React from 'react';
import Navigator from './navigator';
import MoviesList from './containers/moviesList/moviesList';
import SideBar from './components/sideBar/sideBar';




class App extends React.Component {
  render(){
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navigator />
      {/* </BrowserRouter> */}
      {/* <MoviesList /> */}
    </div>
  );
  }
}

export default App;
