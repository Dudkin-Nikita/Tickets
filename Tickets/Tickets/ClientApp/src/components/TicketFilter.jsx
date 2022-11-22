import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const TicketFilter = ({ filter, setFilter, sortTickets }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedFilter => setFilter({ ...filter, sort: selectedFilter })}
                defaultValue='Sort'
                options={[
                    { value: "All", name: "All" },
                    { value: "Classic", name: "Classic" },
                    { value: "Party", name: "Party" },
                    { value: "OpenAir", name: "OpenAir" }
                ]}
            />
        </div>
    )
}

export default TicketFilter