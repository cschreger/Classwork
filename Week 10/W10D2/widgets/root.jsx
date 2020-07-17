import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Header from './frontend/tabs';

const Root = (props) => {

const {tabInfo} = [
    {
        title: "One",
        content: "I'm tab #1!"
    },
    {   
        title: "Two",
        content: "I'm tab #2!"
    },
    {
        title: "Three",
        content: "Don't forget about me!"   
    }];
    
 return (
     <div>

         <Clock />
         <Tabs />
         <Header />

         
     </div>
 );
}



export default Root;
