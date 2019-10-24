import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0}

    }

    componentDidMount()
    {
        this.imageRef.current.addEventListener('load',this.setSpans);
        //console.log(this.imageRef.current);
        //console.log(this.imageRef.current.clientHeight); => shows 0 Since access image prop immediately even before the image is loaded, therefore we see 0 and when the image loads the current.properties shows the actual data
    }

    setSpans = () => { //Doing this since we need to bind it otherwise undefined error
        //console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans})
    }

    render(){
        const { description,urls } = this.props.image;
        return (    
        <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.imageRef} alt={description} src={urls.regular}/>
        </div>
        );
    }
}

export default ImageCard;