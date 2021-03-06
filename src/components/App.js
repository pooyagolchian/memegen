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
            text1: ''
        };
        this.loadMore = this
            .loadMore
            .bind(this);
        this.handleChangeText0 = this
            .handleChangeText0
            .bind(this)
        this.handleChangeText1 = this
            .handleChangeText1
            .bind(this)
    }

    loadMore() {
        this.setState({
            memeLimit: this.state.memeLimit + 10
        })
    }
    handleChangeText0(event) {
        this.setState({text0: event.target.value})

    }
    handleChangeText1(event) {
        this.setState({text1: event.target.value})

    }

    render() {
        let loadMoreBtn;
        if(this.state.memeLimit < 99) {
            loadMoreBtn = <div
                    className='d-flex flex-row justify-content-center align-items-center pt-5 pb-5'>
                    <button className='col-3 m-auto btn-load-more shadow-sm' onClick={this.loadMore}>Show more
                    </button>
                </div>
        } else {
            loadMoreBtn = ``
        }
        

        return (
            <div className="App container">
                <h1 className='font-weight-bolder col-12 text-center pt-5 text-black second-fonts font-4'>Meme Generator</h1>
                <div>
                    <MyMemes/>
                </div>

                <div className='pt-5 pb-5 col-12 p-0'>
                    <div className='row'>
                        <div className='col-12 pb-3 pb-5 p-0'>
                            <h3 className='text-black second-fonts'>How to generate meme</h3>
                            <ul className='text-black'>
                                <li>Write some text.</li>
                                <li>Choose the image to generate meme.</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                        <input
                            className="text-input-first col-12 p-2 shadow-sm"
                            onChange={this.handleChangeText0}
                            type="text"
                            placeholder='Top Text'/>
                        </div>
                        <div className='col-6'>
                        <input
                            className="text-input-second col-12 p-2 shadow-sm"
                            onChange={this.handleChangeText1}
                            type="text"
                            placeholder='Bottom Text'/>
                        </div>
                    </div>
                </div>
                <Masonry
                    breakpointCols={4}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {this
                        .props
                        .memes
                        .slice(0, this.state.memeLimit)
                        .map((meme, index) => {
                            return (<MemeItem
                                key={index}
                                meme={meme}
                                text0={this.state.text0}
                                text1={this.state.text1}/>)
                        })
}
                </Masonry>

                {loadMoreBtn}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(App);
