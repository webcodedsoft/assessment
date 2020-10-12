import React, { Component } from 'react'
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default class BookDetails extends Component {

    state = {
        characterDatas: '',
        Error: '',
        TotalSize: 0,
        isLoaded: false,
        bookName: '',
        bookId: '',
        Comment: ''
    }

    componentDidMount = () => {
        const { match } = this.props;
        this.getBookCharacters(match.params.bookId);
        this.getBookComments(match.params.bookId);
        this.setState({ bookId: match.params.bookId });
    }


    getBookCharacters(bookId) {

        axios({
            method: "GET",
            url: "/book-characters/"+bookId,
        })
            .then((response) => {
                const { data } = response;
               // console.log("response", response);
                this.setState({ Error: data.Error, characterDatas: data.data, bookName: data.bookName, TotalSize: data.TotalSize, isLoaded: true })

            })
            .catch((error) => {

                this.setState({ Error: error, Data: [], TotalSize: 0, isLoaded: false })
                // console.log("error", error);
            });
    }


    getBookComments(bookId) {

        axios({
            method: "GET",
            url: "/get-comment/" + bookId,
        })
            .then((response) => {
                const { data } = response;
                // console.log("response", response);
                this.setState({ Error: data.Error, commentDatas: data.data, TotalSize: data.TotalSize, isLoaded: true })

            })
            .catch((error) => {

                this.setState({ Error: error, Data: [], TotalSize: 0, isLoaded: false })
                // console.log("error", error);
            });
    }


    __handleChange = ({ currentTarget: input }) => {
        const { value } = input
        this.setState({ Comment: value });
    }



    __handleSubmit = async (e) => {
        e.preventDefault();

        const { bookId, Comment } = this.state;

        if (Comment.length < 1) {
            toast.warning(`Message: Please enter your comment`);
        } else {

            const formData = new FormData();
            formData.append("bookId", bookId);
            formData.append("Comment", Comment);
           

            axios.post("/create-comment", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then((response) => {
                toast.success(`Message: ${response.data.Message}`);
                this.setState({Comment: '' })
                this.getBookComments(this.state.bookId);
            })
            .catch(function (error) {
                
            });
            
        }



    }




    render() {

        const { Error, characterDatas, commentDatas, isLoaded, bookName, Comment } = this.state;
        
        return (
            <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">

                <ToastContainer
                    draggable={false}
                    transition={(Zoom, Bounce)}
                    autoClose={8000}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                
                            {Error &&
                                <div className="alert alert-danger">
                                    <p><em><strong>Error:</strong></em> <b>{Error}</b> </p>
                                </div>
                            }

                            
                            {!isLoaded && <center><CircularProgress color="secondary" /></center>}

                            <h3><b>{bookName} </b></h3>


                            {/* Section */}
                            <div className="section gray">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8">
                                            { characterDatas && characterDatas.length && 
                                                <>
                                                {/* Section Headline */}
                                                <div className="section-headline margin-top-60 margin-bottom-35">
                                                    <h4>Comments ({commentDatas && commentDatas.length})</h4>
                                                </div>
                                                
                                                {commentDatas && commentDatas.map((comment, index) => (
                                                    <div className="character-post" key={index}>
                                                        <div className="character-post-content">
                                                            <span className="character-post-date">{comment.createdAt}</span>
                                                            <h3>{comment.IpAddress}</h3>
                                                            <p>{comment.comment}</p>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                            
                                                
                                                {isLoaded &&
                                                    <>
                                                        <textarea name="comment" cols="30" rows="5" placeholder="Comment" onChange={this.__handleChange} defaultValue={Comment}></textarea>
                                                        <center>
                                                            <button className="button button-sliding-icon ripple-effect margin-bottom-40" type="button" form="add-comment" onClick={e => { this.__handleSubmit(e) }}>Add Comment </button>
                                                        </center>
                                                    </>
                                                }
                                                </>
                                            }

                                        </div>
                                        <div className="col-xl-4 col-lg-4 content-left-offset">
                                            <div className="sidebar-container margin-top-65">
                                        
                                                {/* Widget */}
                                                <div className="sidebar-widget">
                                                    { characterDatas && characterDatas.length && <h3>Book Characters</h3> }
                                                        <ul className="widget-tabs">
                                                        
                                                       
                                                        <div className="row">
                                                            <div className="sort-by">
                                                                <span>Filter by:</span>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="switch-container">
                                                                    <label className="switch"><input type="radio" /><span className="switch-button" />
                                                                        <span className="switch-text">Male</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="switch-container">
                                                                    <label className="switch"><input type="radio" /><span className="switch-button" />
                                                                        <span className="switch-text">Female</span></label>
                                                                </div>
                                                            </div>
                                                       </div>

                                                       <div className="notify-box margin-top-15">
                                                        <div className="sort-by">
                                                            <span>Sory by:</span>
                                                            <div className="btn-group bootstrap-select hide-tick open">
                                                            <select className="selectpicker hide-tick" tabIndex={-98}>
                                                                <option>Name</option>
                                                                <option>Gender</option>
                                                                <option>Age</option>
                                                            </select></div>
                                                        </div>
                                                        </div>


                                                            {characterDatas && characterDatas.map((character, index) => (
                                                                <li key={index}>
                                                                    <div className="widget-content">
                                                                        <div className="widget-text">
                                                                            <h5>{character.name}</h5>
                                                                            <span>{character.titles[0]}</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))
                                                            }
                                                        </ul>
                                                </div>
                                                {/* Widget / End*/}
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Spacer */}
                                    <div className="padding-top-40" />
                                {/* Spacer */}
                            </div>
                            {/* Section / End */}


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
