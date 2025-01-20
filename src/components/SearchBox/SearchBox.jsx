import { useDispatch, useSelector } from 'react-redux'
import s from './SearchBox.module.css'
import { searchName } from '../../redux/contacts/actions'


const SearchBox = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters.name);

    const handleSearch = e => {
        dispatch(searchName(e.target.value));
    };


    return (
        <div className={s.box}>
            <p>Find contacts by name</p>
            <input className={s.input}
                type="text"
                value={filters}
                onChange={handleSearch}
            />
        </div>
    )

}

export default SearchBox


