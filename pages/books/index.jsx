import { RiArrowLeftSLine, RiSearchLine } from "react-icons/ri";

export default function Books() {
    return (
        <>
            <h1>كتب عن القومية</h1>
            <div className="gird gap-3 my-">
                <div className="flex gap-4">
                    <RiArrowLeftSLine className="2xl" />
                    <h2 className="border-none">كتاب معين</h2>
                </div>
                <div className="flex gap-5">
                    <p>نوع الكتاب</p>
                    <p>اسم المؤلف</p>
                </div>
            </div>
        </>
    )
}
