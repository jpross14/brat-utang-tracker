'use client'
import { useCallback, useEffect, useMemo } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
    onSearch: (search: string) => void;
    search: string;
    placeholder?: string;
    onFilter?: (results: any[]) => void;
    data?: any[];
    position: string;
};

const SearchBar = ({
    onSearch,
    search,
    placeholder = "Search...",
    onFilter,
    data = [],
    position,
}: SearchBarProps) => {

    const filterData = useCallback(() => {
        return data.filter((item) =>
            item.includes(search.toLowerCase())
        );
    }, [data, search]);

    const filteredData = useMemo(() => (
        filterData()
    ), [filterData])

    useEffect(() => {
        if (onFilter) {
            onFilter(filteredData)
        }
    }, [filteredData, onFilter])

    return (
        <div className={`
            relative 
            ${position}
        `}>
            <input
                type='text'
                value={search}
                placeholder={placeholder}
                onChange={(e) => onSearch(e.target.value)}
                className="
                text-black/50
                w-3xs h-8
                rounded-[15px]
                pl-4 pr-10
                tracking-tighter
                shadow-reg
                focus:outline-1
                truncate
                focus:outline-green-300
            "
            />
            <Search
                size={20}
                className="
                    absolute
                    right-3
                    top-2
                    text-black
                    opacity-50
                    font-bold
                "
            />

        </div>
    );
}

export default SearchBar;