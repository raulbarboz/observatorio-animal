import React from 'react';
import Nav from './Nav';
import HomeContent from './HomeContent';

class Home extends React.Component {
  render(){
    return(
      <div className="container">
        <Nav />
        <HomeContent />
        <img className="img-home" src='https://firebasestorage.googleapis.com/v0/b/observatorio-animal.appspot.com/o/art.png?alt=media&token=035f92fc-ff48-4341-a4d6-7d0b2aff5d03' />
      </div>
    )
  }
}

export default Home;
