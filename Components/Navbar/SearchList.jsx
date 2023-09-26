import { RiSearch2Line, RiCloseLine } from 'react-icons/ri'
import { NavLinks } from "@lib/NavList";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react"


// const fake = [
//     { name: 'اياد', cat: "شخص القومي", id: 1 },
//     { name: 'قومي', cat: "صفحة", id: 2 },
//     { name: 'القومية المصرية', cat: "حركة قومية", id: 3 },
//     { name: 'وعي مصر', cat: "صفحة", id: 4 },
//     { name: 'الصحوة القومية', cat: "صفحة", id: 5 },
//     { name: 'القومية الامازغية', cat: "حركة قومية", id: 6 },
//     { name: 'القومية العربية', cat: "حركة قومية", id: 7 },
//     { name: 'الافروسنترك', cat: "جماعات", id: 8 },
//     { name: 'الجماعات الارهابية', cat: "جماعات", id: 9 },
//     { name: 'داعش', cat: "جماعة ارهابية", id: 10 },
//     { name: 'الجينات المصرية', cat: "جينات", id: 11 },
//     { name: 'الجينات العربية', cat: "جينات", id: 12 },
//     { name: 'حرب ماجدو', car: "حرب", id: 13 },
// ]

export default function SearchList({ searchOpen, setSearchOpen }) {
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    // const handleFilter = (event) => {
    //     const searchWord = event.target.value;
    //     setWordEntered(searchWord);
    //     const newFilter = fake.filter((value) => {
    //         return value.name.toLowerCase().includes(searchWord.toLowerCase());
    //     });

    //     if (searchWord === "") {
    //         setFilteredData([]);
    //     } else {
    //         setFilteredData(newFilter);
    //     }
    // };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className={`navList ${searchOpen ? `left-0` : `left-[-1000px]`}`}>
            <div className="flex text-center justify-between items-center">
                <RiCloseLine
                    className="dark:text-white text-center text-xl p-3 w-[3em] h-[3em] mb-3 transition-all duration-300 cursor-pointer hover:bg-white hover:text-primary"
                    onClick={() => setSearchOpen(!searchOpen)}
                />
            </div>

            <div className="flex gap-2 p-3 border dark:border-none dark:bg-dlight">
                <input
                    // value={wordEntered}
                    // onChange={handleFilter}
                    className="searchInput p-0 border-none ring-0"
                    type="text"
                    placeholder="ابحث في عالم القومية" />

                <div className="text-2xl dark:text-white">
                    {filteredData.length === 0 ? (
                        <RiSearch2Line />
                    ) : (
                        <RiCloseLine id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>

            {/* {filteredData.lenght != 0 && (
                <>
                    <div className={`${filteredData.lenght === 0 ? "border dark:border-slate-500" : "border-none"} text-right`}>
                        {filteredData.slice(0, 6).map((items) =>
                        (
                            <div className="border dark:border-none dark:border-b-slate-500 dark:bg-dprimary p-4 grid gap-2" key={items.id}>
                                <p className="font-black">{items.name}</p>
                                <p className="text-sm text-slate-500">{items.cat}</p>
                            </div>
                        ))}
                    </div>

                </>
            )} */}

        </div>
    )
}
