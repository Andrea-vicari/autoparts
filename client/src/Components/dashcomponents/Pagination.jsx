import React from 'react'

const Pagination = ({ postsPerPage, length, handlePagination, currentPage }) => {
    let paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
    }
    return (
        <div className='pagination'>
            {
                paginationNumber.map((data) => (
                    <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ?  'btn btn-outline-primary mx-1 active' : 'btn btn-outline-primary mx-1'}>
                        {data}
                    </button>
                ))
            }
        </div>
    )
}
export default Pagination