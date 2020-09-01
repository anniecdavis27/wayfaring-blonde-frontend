import React from 'react';
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
    return (
      <div className="App">
        <Header />
        {props.children}
        <Footer />
      </div>
    );
  }
  
  export default Layout;