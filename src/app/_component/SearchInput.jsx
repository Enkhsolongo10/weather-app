import { SearchIcon } from "./SearchIcon";

export const SearchInput = ({ search, onChangeText , onPressEnter}) => {
    return (
        <div className="text-black w-[400px] h-[60px] border border-transparent drop-shadow-sm rounded-[24px] flex gap-3 bg-white p-4 mb-4">
                <SearchIcon />
            <input 
            className="w-full outline-none mr-1"
            type="text"
            placeholder="City name..."
            value={search}
            onChange={onChangeText} 
            onKeyDown={onPressEnter}
            />
        </div>
    );
}; 
