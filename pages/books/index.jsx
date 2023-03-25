import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";

export default function Books() {
    return (
        <>
            <h1>كتب عن القومية</h1>
            <div className="gird gap-3 p-4 my-4 border-b-1">
                <div className="flex items-center gap-4">
                    <RiArrowLeftSLine className="text-2xl" />
                    <a href="/"><h2 className="border-none">كتاب معين</h2></a>
                </div>
                <div className="flex gap-5">
                    <p>نوع الكتاب</p>
                    <p>اسم المؤلف</p>
                </div>
            </div>
        </>
    )
}
