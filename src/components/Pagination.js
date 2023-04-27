import React from 'react';
import Button from './Button';
import '../styles/pagination.css';

function Pagination(props) {
    const {lenght, getPage, setPage, limit} = props;

    return (
        <div class="pagination-container">
            { getPage !== 1? <Button  action = {() => setPage(getPage - 1)} text = "Página anterior" type = "pagination"/>: null }
            <p class="pagination-number">{getPage}</p>
            { limit <= lenght?  <Button  action = {() => setPage(getPage + 1)} text = "Siguiente página" type = "pagination"/>: null }
        </div>
    );
}

export default Pagination;
