import classNames from 'classnames'
const Pagination = ({ pagination, setPagination }) => {
    const { currentPage, pageSize } = pagination;

    const handleChangeCurrentPage = (newCurrentPage) => {
        if (currentPage !== newCurrentPage) {
            setPagination({
                ...pagination,
                currentPage: newCurrentPage,
            })
        }
    }

    //render code HTML with JS
    const elementsOfpagination = [];
    for (let index = 1; index <= pageSize; index++) {
        elementsOfpagination.push((
            <li key={index} className={currentPage == index ? 'page-item active' : ''}>
                <button className="page-link" onClick={() => handleChangeCurrentPage(index)}>
                    {index}
                </button >
            </li >
        ));
    }
    return pageSize > 1 && (
        <div className="w-100 justify-content-center d-flex">
            <nav aria-label="Page navigation ">
                <ul className="pagination">
                    {pageSize !== 1 && (
                        <li className={classNames("page-item", { "disabled": currentPage === 1 })}>
                            <button className="page-link" onClick={() => handleChangeCurrentPage(currentPage - 1)} >
                                Previous
                            </button>
                        </li>
                    )}
                    {elementsOfpagination}
                    {pageSize !== 1 && (
                        <li className={classNames("page-item", { "disabled": currentPage === pageSize })}>
                            <button className="page-link" onClick={() => handleChangeCurrentPage(currentPage + 1)} >
                                Next
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination