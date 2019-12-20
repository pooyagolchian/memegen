import React, {Component} from 'react';
import {connect} from 'react-redux';
import Masonry from 'react-masonry-css';

class MyMemes extends Component {

    render() {
        return (
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid pt-5"
                columnClassName="my-masonry-grid_column">
                {this
                    .props
                    .myMemes
                    .map((meme, index) => {
                        return (<img
                            className='my-meme-img img-fluid mb-3'
                            key={index}
                            src={meme && meme.data && meme.data.url}
                            alt="my-meme"/>)
                    })
}
            </Masonry>
        )
    }

}

function mapStateToProps(state) {
    return {myMemes: state.myMemes}
}

export default connect(mapStateToProps, null)(MyMemes);
