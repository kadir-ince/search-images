import React, {Component} from 'react';

class Image extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            spanCount: 1
        }
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.addEventListener('load', () => {
            const spanCount = Math.round(this.myRef.current.clientHeight / 5) + 2;
            this.setState({
                spanCount
            })
        })
    }

    render() {
        const {image} = this.props;
        return (
            <img style={{
                gridRowEnd: `span ${this.state.spanCount}`
            }} ref={this.myRef} src={image.urls.small} alt={image.description}/>
        );
    }
}

export default Image;