import React from 'react';
import Header from "./modules/header";
import Content from "./modules/content";
import Footer from "./modules/footer";

var Main = React.createClass({
    render: function() {
        return (
            <div className = "main">
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(
    <Main />,
    document.getElementsByClassName("container")[0]
);

