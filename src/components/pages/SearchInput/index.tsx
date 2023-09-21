// import { useState } from 'react';
// import { Body1, Button, Input } from '@/components'
// import { useAppDispatch, useAppSelector } from '@/hooks/redux';
// import Style from './style'
// import { useLocation, useNavigate } from 'react-router-dom';

// import { PATHS } from '@/router';
// import { addToSearchHistory } from '@/redux/features/userSlice';


// const SearchInput = () => {
//     const { search } = useLocation();
//     const user = useAppSelector(state => state.user.user);
//     const [searchValue, setSearchValue] = useState(decodeURIComponent(search.split("=")[1]));
//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();

//     const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (searchValue.length > 0) {
//             dispatch(addToSearchHistory(searchValue, user.id));
//             navigate(PATHS.SEARCH + "?q=" + searchValue);
//         }
//     }

//     return (
//         <Style >
//             <form onSubmit={handelSubmit} className="search_box">
//                 <Input
//                     value={searchValue}
//                     onChange={(e) => setSearchValue(e.target.value)}
//                     placeholder='search' fullWidth />
//                 <Button className='search_btn'>Search</Button>
//             </form>
//             <div className="recent_search">
//                 <Body1 transform='capitalize' weight={500} color='primary/200'>{user.searchHistory.slice(user.searchHistory.length - 3, user.searchHistory.length).map((el, index) => index === 0 ? el : " / " + el)}</Body1>
//             </div>
//         </Style>
//     )
// }

// export default SearchInput



import { useState } from 'react';
import { Input, Button, Body1 } from '@/components';
import { useDispatch, useSelector } from '@/hooks/redux';
import Style from './style';
import { useRouter } from 'next/router';

import { PATHS } from '@/router';
import { addToSearchHistory } from '@/redux/features/userSlice';

const SearchInput = () => {
    const router = useRouter(); 
    const user = useSelector((state) => state.user.user);
    const [searchValue, setSearchValue] = useState(
        decodeURIComponent(router.query.q || '')
    );
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.length > 0) {
            dispatch(addToSearchHistory(searchValue, user.id));
            router.push(`${PATHS.SEARCH}?q=${searchValue}`);
        }
    };

    return (
        <Style>
            <form onSubmit={handleSubmit} className="search_box">
                <Input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="search"
                    fullWidth
                />
                <Button className="search_btn">Search</Button>
            </form>
            <div className="recent_search">
                <Body1
                    transform="capitalize"
                    weight={500}
                    color="primary/200"
                >
                    {user.searchHistory
                        .slice(user.searchHistory.length - 3, user.searchHistory.length)
                        .map((el, index) =>
                            index === 0 ? el : ' / ' + el
                        )}
                </Body1>
            </div>
        </Style>
    );
};

export default SearchInput;
