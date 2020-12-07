import React from 'react';
import NewItem from './NewItem';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => (
    <div className="row">
        {news.map((newItem, idx) => ( <NewItem key={idx} newItem={newItem} /> ))}
    </div>
);

NewsList.propTypes = {
    news: PropTypes.array.isRequired
};

export default NewsList;
