/*
Copyright (c) 2024 Siddhi Manjrekar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const contentDisplay = document.getElementById('content-display');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const topic = this.getAttribute('data-topic');
            loadContent(topic);
        });
    });

    function loadContent(topic) {
        let content = '';

        switch(topic) {
            case 'introduction':
                content = `
                <p>
                    A MERN full stack developer is a professional who specializes in building web applications using the MERN stack. <br><br>
                    A MERN full stack developer is proficient in using MongoDB, Express.js, React.js, and Node.js to develop both the front-end and back-end components of web applications. 
                    They have expertise in handling data, designing user interfaces, managing server-side logic, and integrating various technologies to create modern and dynamic web applications.<br><br>
                    The MERN stack consists of four key technologies: <br>
                    <ol>
                        <li><strong>MongoDB:</strong> A NoSQL database that stores data in a JSON-like format, providing flexibility and scalability for web applications.</li><br>
                        <li><strong>Express.js:</strong> A web application framework for Node.js that simplifies the process of building server-side applications and APIs.</li><br>
                        <li><strong>React.js:</strong> A JavaScript library for building user interfaces, particularly for single-page applications (SPAs). It allows for efficient rendering and updating of UI components.</li><br>
                        <li><strong>Node.js:</strong> A JavaScript runtime environment that allows developers to run JavaScript code on the server-side, enabling the creation of scalable and real-time applications.</li><br>
                    </ol>

                    Select a topic from the sidebar to view the content.
                </p>`;
                break;
            case 'mongodb':
                content = `
                <h2>MongoDB</h2>
                <img src="mongodb.png" alt="MongoDB">
                <p>MongoDB is a NoSQL database that uses a document-oriented data model. It stores data in JSON-like documents, making it easy to work with and integrate into JavaScript applications. MongoDB is designed for high availability, horizontal scaling, and geographic distribution, making it suitable for modern web applications.</p>
                <p>Further details on MongoDB include:</p>
                <ul>
                    <li>Data Modeling in MongoDB</li>
                    <li>Aggregation Framework</li>
                    <li>Indexes and Performance Tuning</li>
                    <li>Replication and Sharding</li>
                </ul>`;
                break;
            case 'express':
                content = `
                <h2>Express.js</h2>
                <img src="express.png" alt="Express.js">
                <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It simplifies the process of building server-side applications and APIs with Node.js.</p>
                <p>Further details on Express.js include:</p>
                <ul>
                    <li>Routing</li>
                    <li>Middleware</li>
                    <li>Template Engines</li>
                    <li>Error Handling</li>
                </ul>`;
                break;
            case 'react':
                content = `
                <h2>React.js</h2>
                <img src="react.png" alt="React.js">
                <p>React.js is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies. It allows developers to create large web applications that can update and render efficiently in response to data changes.</p>
                <p>Further details on React.js include:</p>
                <ul>
                    <li>JSX</li>
                    <li>Components and Props</li>
                    <li>State and Lifecycle</li>
                    <li>Hooks</li>
                    <li>React Router</li>
                </ul>`;
                break;
            case 'node':
                content = `
                <h2>Node.js</h2>
                <img src="node.png" alt="Node.js">
                <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code, creating scalable network applications. Node.js is known for its event-driven, non-blocking I/O model, which makes it efficient and suitable for real-time applications.</p>
                <p>Further details on Node.js include:</p>
                <ul>
                    <li>Event Loop</li>
                    <li>Modules and NPM</li>
                    <li>File System</li>
                    <li>Streams and Buffers</li>
                </ul>`;
                break;
            default:
                content = '<p>Select a topic from the sidebar to view the content.</p>';
        }

        contentDisplay.innerHTML = content;
    }
});
