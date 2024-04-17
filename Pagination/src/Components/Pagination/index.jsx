function Pagination({ currentPage, totalPage = 10, onPageChange }) {
    function generate() {
        const pages = [];
        for (let i = 0; i < totalPage; i++) {
            pages.push(i + 1);
        }
        return pages;
    }

    return (
        <div>
            <button onClick={() => onPageChange(currentPage - 1)}>Prev</button>
            {generate().map((item) => ( 
                <button key={item} onClick={() => onPageChange(item)}>{item}</button> 
            ))}
            <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
        </div>
    );
}

export default Pagination;
