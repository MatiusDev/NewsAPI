import React from 'react';
import PropTypes from 'prop-types';

const NewItem = ({ newItem }) => {
    const { title, urlToImage, url, description, source } = newItem;
    const image = (urlToImage) ? urlToImage : 'https://sutvacha.s3.amazonaws.com/media/public/product/no-image-available.png';
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={title} />
                    <span className="card-title">{source.name}</span>
                </div>

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
};

NewItem.propType = {
    newItem: PropTypes.object.isRequired
};

export default NewItem;