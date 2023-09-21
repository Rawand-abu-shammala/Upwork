import { useState } from 'react';
import { Body1, Button, Input } from '@/components'
import { useAppSelector } from '@/hooks/redux';
import Style from './style'
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'router';


const Search = () => {
    const { searchHistory } = useAppSelector(state => state.user.user);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.length > 0) {
            navigate(PATHS.SEARCH + "?q=" + searchValue);
        }
    }

    return (
        <Style >
            <form onSubmit={handelSubmit} className="search_box">
                <Input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='search' fullWidth />
                <Button className='search_btn'>Search</Button>
            </form>
            <div className="recent_search">
                <Body1 transform='capitalize' weight={500} color='primary/200'>{searchHistory.slice(searchHistory.length - 3, searchHistory.length).map((el, index) => index === 0 ? el : " / " + el)}</Body1>
            </div>
        </Style>
    )
}

export default Search


