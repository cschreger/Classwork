import React from "react";
import Root from "../root";

const Header = (props) => {
    // return <Root />
    // return <p></p> 
    // return <p>Hello</p>
    // return props.tabInfo
        // const tabs = props.tabInfo.map ((tab, i) => {
        // return <article key={i}><ul><h1>{tab.title}</h1></ul>{tab.content}</article>
    // return this.props.tabInfo
    // const headrs = props.tabInfo.map((tab, i) => {
    //     return 
    //     <ul 
    //     key={i}
    //     onClick = {() => props.this.selectPane(i)}>
    //         <h1>{tab.title}</h1></ul>


    // })
        // });
    
}

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabsIndex: 0}

        this.selectPane = this.selectPane.bind(this);

        // this.tabInfo = [
        //     {
        //         title: "One",
        //         content: "I'm tab #1!"
        //     },
        //     {
        //         title: "Two",
        //         content: "I'm tab #2!"
        //     },
        //     {
        //         title: "Three",
        //         content: "Don't forget about me!"
        // }];
    };

    selectPane(i) {
        this.setState({tabsIndex: i})
    }



    render () {
        // const tabs = this.props.tabData.map ((tab, i) => {
        //     return <article key={i}><ul><h1>{tab.title}</h1></ul>{tab.content}</article>;

        // });
        return (
            <Header />
            // <Header 
            // tabData = {this.props.tabData}/>

        )
    };
};


export default Tabs;