import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg: '1'}); // using hook to set initial page param to 1

    return (
        <div>

            <button className='border-2' onClick={() => {
                const pg = query.get('pg'); // after click PREV we get current pg param and decrement it by 1
                if(pg) {
                    let currentPage = +pg;
                    setQuery({pg: (--currentPage).toString()});
                }
            }}>PREV</button>
            ---
            <button className='border-2' onClick={() => {
                const pg = query.get('pg'); // after click NEXT we get current pg param and increment it by 1
                if(pg) {
                    let currentPage = +pg;
                    setQuery({pg: (++currentPage).toString()});
                }
            }}>NEXT</button>
        </div>
    );
};

export default PaginationComponent;