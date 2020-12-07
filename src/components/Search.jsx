import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = { category: 'general' };

    handleChange = evt => {
        this.setState({
            category: evt.target.value
        }, () => {
            this.props.getNews(this.state.category);
        });
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h3>Encuentra Noticias por Categoría</h3>
                        <div className="input-field col s12 offset-m2">
                            <select onChange={this.handleChange}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    getNews: PropTypes.func.isRequired
};

export default Search;