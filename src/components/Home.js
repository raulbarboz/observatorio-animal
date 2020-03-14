import React from 'react';
import Nav from './Nav';
import HomeContent from './HomeContent';

class Home extends React.Component {
  render(){
    return(
      <div className="container">
        <Nav />
        <HomeContent />
        <img className="img-home" src='https://firebasestorage.googleapis.com/v0/b/observatorio-animal.appspot.com/o/art.png?alt=media&token=7c3e8f56-5265-41d1-bb58-ddbba6c7ae37' />
      </div>
    )
  }
}

export default Home;
