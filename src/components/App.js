import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyMemes from './MyMemes';
import MemeItem from './MemeItem';
import Masonry from 'react-masonry-css';
import '../style.css';



class App extends Component {

    constructor() {
        super();
        this.state = {
            memeLimit: 10,
            text0: '',
            text1: '',
        };
        this.loadMore = this.loadMore.bind(this);
        this.handleChangeText0 = this.handleChangeText0.bind(this)
        this.handleChangeText1 = this.handleChangeText1.bind(this)
    }

    loadMore() {
        this.setState({memeLimit: this.state.memeLimit + 10})
    }
    handleChangeText0 (event) {
        this.setState({text0: event.target.value})
        
    }
    handleChangeText1 (event) {
        this.setState({text1: event.target.value})
    
        
    }

    render() {
        return (

            <div className="App container">
                <h1 className='text-white'>Meme Generator</h1>
                <div>
                    <MyMemes />
                </div>
                <i className='text-white'>Write Some Text</i>
                <div className='col col-12'>
                    <input
                        onChange={this.handleChangeText0} type="text"
                        placeholder='Top Text'/>
                    <input
                        onChange={this.handleChangeText1} type="text"
                        placeholder='Bottom Text'/>
                </div>

              
                    

                <Masonry
                            breakpointCols={4}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {
                                this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                                    return (
                                        <MemeItem
                                            key={index}
                                            meme={meme}
                                            text0={this.state.text0}
                                            text1={this.state.text1}
                                        />
                                    )
                                })
                            }
                 </Masonry>



                
                <div className='col col-12 col-sm-12 pt-5 pb-5'>
                    <button className='btn btn-primary col-12' onClick={this.loadMore}>Show more
                    </button>
                </div>


                



            </div>
        );
    }
}


function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, null)(App);



