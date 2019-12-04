import React, {Component} from 'react';
import {createMeme} from "../action";
import {connect} from 'react-redux';


class MemeItem extends Component {

    constructor() {
        super();
        this.state = {
            hovered: false,
        }
        this.postMeme = this.postMeme.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }


    postMeme() {
        console.log('this.props', this.props);
        const {text0, text1} =this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
    }

    handleMouseEnter(){
        this.setState({hovered: true})
    }
    handleMouseLeave(){
        this.setState({hovered: false})
    }


    render() {
        return (
            <div className='meme-item'
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}
                 onClick={this.postMeme}
            >
                <img className={this.state.hovered ? 'meme-img darken-img' : 'meme-img'}
                     src={this.props.meme.url}
                     alt={this.props.meme.name}/>
                <p className={this.state.hovered ? 'meme-text' : 'no-text'}>{this.props.meme.name}</p>
            </div>
        )
    }
}


export default connect(null, {createMeme})(MemeItem);
