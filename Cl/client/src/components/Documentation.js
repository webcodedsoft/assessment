import React, { Component } from 'react'

export default class Documentation extends Component {
    render() {
        return (
            <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">

                            <section id="partials">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3><i className="icon icon-folder5" /> Documentation</h3>
                                        <hr />
                                        <p>
                                            This documentation will help you familiarise yourself with the API and how to consume the different resources that are available. 
                                            The documentation provides all information needed to get started and it also has educational examples for all resources.
                                        </p>
                                        

                                        <h3>Endpoint</h3>
                                        <pre><code>https://php-assessment-webcoded.herokuapp.com/api</code></pre>

                                        <br />

                                        <h3>Endpoint Request & Methods</h3>
                                        <table className="table table-bordered table-striped">
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><code>GET</code></th>
                                                    <th scope="row"><code>/books</code></th>
                                                    <td>Basic HTML meta tags and everything that could be in </td>
                                                    <td><code>https://php-assessment-webcoded.herokuapp.com/api/books</code></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><code>GET</code></th>
                                                    <th scope="row"><code>/characters</code></th>
                                                    <td>Body &amp; wrapper close</td>
                                                    <td><code>https://php-assessment-webcoded.herokuapp.com/api/characters</code></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><code>GET</code></th>
                                                    <th scope="row"><code>/book-characters</code></th>
                                                    <td>Main Navigation or menu</td>
                                                    <td><code>https://php-assessment-webcoded.herokuapp.com/api/book-characters/1</code></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><code>POST</code></th>
                                                    <th scope="row"><code>/create-comment</code></th>
                                                    <td>Responsible for site pre header</td>
                                                    <td>Form Body <code>bookId, Comment </code></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><code>GET</code></th>
                                                    <th scope="row"><code>/get-comment</code></th>
                                                    <td>Pass bookId as parameter to the endpoint to get comments on the book</td>
                                                    <td><code>https://php-assessment-webcoded.herokuapp.com/api/get-comment/1</code></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <br/>
                                        <h3>Books</h3>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>url</td>
                                                    <td>string</td>
                                                    <td>The hypermedia URL of this resource</td>
                                                </tr>
                                                <tr>
                                                    <td>name</td>
                                                    <td>string</td>
                                                    <td>The name of this book</td>
                                                </tr>
                                                <tr>
                                                    <td>authors</td>
                                                    <td>array of strings</td>
                                                    <td>An array of names of the authors that wrote this book.</td>
                                                </tr>
                                                <tr>
                                                    <td>commentCount</td>
                                                    <td>integer</td>
                                                    <td>The number of comments under each book.</td>
                                                </tr>
                                                <tr>
                                                    <td>released</td>
                                                    <td>date</td>
                                                    <td>The date (ISO 8601) when this book was released.</td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>

                                        <code>
                                            <pre>

                                            </pre>
                                        </code>



                                        <h3>Characters</h3>
                                        <p>A Character is an individual within the Ice And Fire universe.</p>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>name</td>
                                                    <td>string</td>
                                                    <td>The name of this character</td>
                                                </tr>
                                                <tr>
                                                    <td>gender</td>
                                                    <td>string</td>
                                                    <td>The gender of this character.</td>
                                                </tr>
                                                <tr>
                                                    <td>culture</td>
                                                    <td>string</td>
                                                    <td>The culture that this character belongs to.</td>
                                                </tr>
                                                <tr>
                                                    <td>born</td>
                                                    <td>string</td>
                                                    <td>Textual representation of when and where this character was born.</td>
                                                </tr>
                                                <tr>
                                                    <td>died</td>
                                                    <td>string</td>
                                                    <td>Textual representation of when and where this character died.</td>
                                                </tr>
                                                <tr>
                                                    <td>titles</td>
                                                    <td>array of strings</td>
                                                    <td>The titles that this character holds.</td>
                                                </tr>
                                                <tr>
                                                    <td>aliases</td>
                                                    <td>array of strings</td>
                                                    <td>The aliases that this character goes by.</td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        
                                        <code>
                                            <pre>

                                            </pre>
                                        </code>


                                        <br/>
                                        <h3>Filtering Characters</h3>
                                        <p>You can also include filter parameters in your request to the characters endpoint by including parameters in the query string.</p>
                                        
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <th>Result</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>gender</td>
                                                    <td>string</td>
                                                    <td>Characters with the given gender are included in the response.</td>
                                                </tr>
                                            </tbody>
                                        </table>



                                        <h3>Book Characters</h3>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>name</td>
                                                    <td>string</td>
                                                    <td>The name of this character</td>
                                                </tr>
                                                <tr>
                                                    <td>gender</td>
                                                    <td>string</td>
                                                    <td>The gender of this character.</td>
                                                </tr>
                                                <tr>
                                                    <td>culture</td>
                                                    <td>string</td>
                                                    <td>The culture that this character belongs to.</td>
                                                </tr>
                                                <tr>
                                                    <td>born</td>
                                                    <td>string</td>
                                                    <td>Textual representation of when and where this character was born.</td>
                                                </tr>
                                                <tr>
                                                    <td>died</td>
                                                    <td>string</td>
                                                    <td>Textual representation of when and where this character died.</td>
                                                </tr>
                                                <tr>
                                                    <td>titles</td>
                                                    <td>array of strings</td>
                                                    <td>The titles that this character holds.</td>
                                                </tr>
                                                <tr>
                                                    <td>aliases</td>
                                                    <td>array of strings</td>
                                                    <td>The aliases that this character goes by.</td>
                                                </tr>

                                            </tbody>
                                        </table>


                                        <code>
                                            <pre>

                                            </pre>
                                        </code>


                                        <br />
                                        <h3>Filtering Book Characters</h3>
                                        <p>You can also include filter parameters in your request to the book characters endpoint by including parameters in the query string.</p>

                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Parameter</th>
                                                    <th>Type</th>
                                                    <th>Result</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>bookId</td>
                                                    <td>integer</td>
                                                    <td>Getting book characters with the given ID are included in the response.</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </section>


                            {/* <div>
                                <h3>Installing gulp 4 globally</h3>
                                <p>You will need to remove your current gulp global package before installing v4 in order to
                                        do an upgrade.</p>
                                <div className="alert alert-info">
                                    <p><em><strong>Note:</strong> The <code>$</code> shows the command is to be run on the
                                            command line and shouldn’t be typed</em></p>
                                </div>
                                <pre className=" language-bash"><code className=" language-bash">$ npm <span className="token function">rm</span> -g gulp{"\n"}$ npm <span className="token function">install</span> -g gulp-cli</code></pre>
                                <p>This command removes your current global package and installs v4 from the gulp-cli 4.0
                                        branch.</p>
                                <p>Make sure you don't get any errors from the first command before you type the second.
                                        Depending on your set-up, you may need to run them with <code>sudo</code>.</p>
                                <p>To verify what version you have installed globally, you can run the below command (and
                                        should see a similar output)</p>
                                <pre className="“” language-git"><code className=" language-git">$ gulp -v{"\n"}CLI version 1.2.1</code></pre>
                                <br />
                            </div>
 */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
