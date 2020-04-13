import React, {Component} from 'react';
import SearchBar from './SearchBar'
import ImageList from "./images";
import axios from 'axios';

class App extends Component {
    state = {
        images: []
    }

    onSearchImage = async (search) => {
        console.log("App: " + search)
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: search
            },
            headers: {
                Authorization: 'Client-ID YHGEE2lfiMRmjgLkSuRauOAPli3rFnujO9tFiaOpFuQ'
            }
        })
        this.setState({
            images: result.data.results
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchImage={this.onSearchImage}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;