import React, { Component } from 'react'
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';



export default class Home extends Component {


    state = {
        Data: '',
        Error: '',
        isLoaded: false,
    }

    componentDidMount = () => {
        this.getBooks();
    }


    getBooks() {

        axios({
            method: "GET",
            url: "/books",
        })
            .then((response) => {
                const { data } = response;
                this.setState({ Error: data.Error, Data: data.data, isLoaded: true})
               
            })
            .catch((error) => {

                this.setState({ Error: error, Data: [], isLoaded: false })
                console.log("error", error);
            });
    }
    


    render() {

        const { Error, Data, isLoaded } = this.state;

        return (
            <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
              
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                        
                            {Error &&
                                <div className="alert alert-danger">
                                    <p><em><strong>Error:</strong></em> <b>{Error}</b> </p>
                                </div>
                            }

                            { !isLoaded && <center><CircularProgress color="secondary" /></center> }
                            
                            
                            { Data && Data.map((book, index) => (
                                
                               
                                    <div key={index} className="listings-container compact-list-layout margin-top-35 ">
                                        <a href={`/${book.bookId}`} className="listing with-apply-button">
                                            <div className="listing-details">
                                    
                                                <div className="listing-description">
                                                    <h3 className="listing-title">{book.name}</h3>
                                                    {/* Job Listing Footer */}
                                                    <div className="listing-footer">
                                                        <ul>
                                                            <li> Author:  {book.authors[0]}</li>
                                                            <li> Comment: {book.commentCount}</li>
                                                           
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                             
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
