'use client'
import { useCallback, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    onSearch: (search: string) => void;
    search: string;
    placeholder?: string;
    data?: T[];
    onFilter?: (results: T[]) => void;
    filterFn?: (item: T, search: string) => boolean;
    iconSize?: number;
    className?: string;
};

const SearchBar = ({
    onSearch,
    search,
    placeholder = "Search...",
    data,
    onFilter,
    filterFn,
    iconSize = 20,
    className,
}: SearchBarProps) => {

    const defaultFilterFn = useCallback(
        (item: T, term: string) =>
            String(item).toLowerCase().includes(term.toLowerCase()),
        []
    );

    const filterData = useCallback(() => {
        if (!data) return [];
        const fn = filterFn || defaultFilterFn;
        return data.filter((item) => fn(item, search));
    }, [data, defaultFilterFn, filterFn, search]);

    const filteredData = useMemo(() => (
        filterData()
    ), [filterData])

    useEffect(() => {
        if (onFilter) {
            onFilter(filteredData)
        }
    }, [filteredData, onFilter])

    return (
        <div className="relative">
            <Input
                type='text'
                value={search}
                placeholder={placeholder}
                onChange={(e) => onSearch(e.target.value)}
                className={cn(
                    "text-black/50 w-3xs h-8 rounded-[15px] pl-4 pr-10",
                    "tracking-tighter shadow-reg focus:outline-1 truncate focus:outline-green-300)",
                    className
                )}
            />
            <Search
                size={iconSize}
                className={cn(
                    "absolute right-3 top-[6px] text-black opacity-50 font-bold"
                )}
            />
        </div>
    );
}

export default SearchBar;