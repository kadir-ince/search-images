import React, {Component} from 'react';
import '../Styles/SearchBar.css'
class SearchBar extends Component {
    state = {
        search: ''
    }

    inputSearch(event) {
        this.setState({search: event.target.value})
    }

    searchImage() {
        this.props.onSearchImage(this.state.search)
    }

    render() {
        return (
            <div className="ui search search-container flex">
                <div className="ui icon input search-width flex">
                    <input className="prompt" onChange={this.inputSearch.bind(this)} type="text"
                           placeholder="Search Images..." onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            this.searchImage();
                        }
                    }}/>
                    <i className=" circular search link icon" onClick={this.searchImage.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;