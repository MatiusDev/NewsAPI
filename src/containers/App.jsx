import React, { Component, Fragment } from 'react'
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import Search from '../components/Search';

class App extends Component {
    state = { news: [] }

    componentDidMount() {
        this.getNews();
    }

    getNews = async (category = 'general') => {
        try {
            const APIKey = '0e9950bfc8a64ecb82e4c55ce93294be';
            const URL = `http://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=${APIKey}`;

            const response = await fetch(URL);
            const { articles: news } = await response.json();
            news = news || [];
            this.setState({ news });
        } catch (error) {
            console.error(error);
            console.log(this.state);
        }
    };

    render() {
        return (
            <Fragment>
                <Header title="Noticias React API" />
                <div className="container white contenedor-noticias">
                    <Search getNews={this.getNews}/>
                    <NewsList news={this.state.news}/>
                </div>
            </Fragment>
        );
    }
} 

export default App;
