import React, {Component} from 'react';
import MemeItem from './MemeItem';
import {connect} from 'react-redux';
import '../style.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            memeLimit: 10,
            text0: '',
            text1: '',
        }
    }

    loadMore() {
        this.setState({memeLimit: this.state.memeLimit + 10})

    }


    render() {
        return (


            <div className="App">
                <h1>Meme Generator</h1>
                <i>Write Some Text</i>
                <div className='col col-12'>
                    <input
                        onChange={event => this.setState({text0: event.target.value})} type="text"
                        placeholder='Top Text'/>
                    <input
                        onChange={event => this.setState({text1: event.target.value})} type="text"
                        placeholder='Bottom Text'/>
                </div>


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
                <div className='col col-12 col-sm-12 pt-5 pb-5'>
                    <button className='btn btn-primary col-12' onClick={() => {
                        this.loadMore()
                    }}>Show more
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



