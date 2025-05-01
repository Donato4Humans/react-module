import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg: '1'});
    let currentPage = Number(query.get('pg') || '1');

    return (
        <div>
            <button className='border-2' onClick={() => {
                if(currentPage > 1) {
                    setQuery({pg: (--currentPage).toString()});
                }
            }}>PREV</button>
            ---
            <button className='border-2' onClick={() => {
                    setQuery({pg: (++currentPage).toString()});
            }}>NEXT</button>
        </div>
    );
};

export default PaginationComponent;