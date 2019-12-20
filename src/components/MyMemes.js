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
                        return (

                            <div key={index}>
                                <div>
                                    <img
                                        className='my-meme-img img-fluid'
                                        src={meme.data.url}
                                        alt="my-meme"/>

                                </div>
                                <div className='col-12 p-0'>
                                    <a
                                        target="_blank"
                                        className='font-per-70 pr-2 link'
                                        download
                                        
                                        href={meme.data.url}>
                                        Download
                                    </a>
                                    <a
                                        
                                        target='_blank'
                                        className="twitter-share-button font-per-70 link"
                                        href={
                                            'https://twitter.com/intent/tweet?text='+ 
                                            ' Meme Generator - You can visit imgflip to share this meme ' +
                                            meme.data.page_url + ' or download from this link ' +
                                            meme.data.url +
                                            '____MEME GENERATOR - https://pooyagolchian.ir/memegen/'
                                            }
                                        data-size="large">
                                        Tweet
                                    </a>
                                </div>
                            </div>

                        )
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
