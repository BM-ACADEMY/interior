import React from 'react';
class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    

                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#whatwedo'>What We Do</a></li>
                    <li><a href='#testimonial'>Testimonial</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#client'>Our Clients</a></li>
                </ul>
            </>
        );
    };
};

export default Navigation;