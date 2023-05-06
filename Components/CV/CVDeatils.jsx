import {
    RiUser3Fill,
    RiCalendar2Line,
    RiFacebookCircleFill,
    RiTwitterFill,
    RiTelegramFill,
    RiWhatsappLine,
    RiLinkedinFill,
    RiBallPenFill,
    RiLinkM,
    RiEarthLine,
} from "react-icons/ri";

export default function CVDeatils({ cv }) {
    return (
        <>
            {/*Mobile*/}
            {cv.fields.ifPerson ?
                <aside className="grid gap-4 border dark:bg-dptimary dark:border-none h-fit">
                    <h2 className="pr-3">تفاصيل الشخصية</h2>
                    <div className="grid gap-3 p-3">
                        <p className="font-medium text-primary">ميلاده:<span className="text-black"> {cv.fields.date}</span></p>
                        <p className="font-medium text-primary">مسقط رأسه:<span className="text-black"> {cv.fields.location}</span></p>
                        <p className="font-medium text-primary">أهم المنصاب:</p>
                        <ul className="py-3">{cv.fields.position.map((pos) => <li key={pos}>{pos}</li>)}</ul>
                        {cv.fields.ifDied ? <p className="font-medium text-primary" >وفاته:<span className="text-black"> {cv.fields.deathDate}</span></p> : null}
                    </div>
                </aside>
                :
                <aside className="grid gap-4 border dark:bg-dptimary dark:border-none h-fit">
                    <h2 className="pr-3">تفاصيل الصفحة</h2>
                    <div className="grid gap-3 p-3">
                        <p className="font-medium text-primary">تاريخ نشأة الصفحة:<span className="text-black"> {cv.fields.date}</span></p>
                        <p className="font-medium text-primary">أصحابها:<span className="text-black"> {cv.fields.location}</span></p>
                        <p className="font-medium text-primary">روابط التواصل و الموقع الرسمي:</p>

                        <div className="flex gap-5">
                            {cv.fields.facebook === "" ? null : <a href={cv.fields.facebook} aria-label="تابع الصفحة الفيسبك"><RiFacebookCircleFill className="text-4xl" /></a>}
                            {cv.fields.twitter === "" ? null : <a href={cv.fields.twitter} aria-label="تابع الصفحة التويتر"><RiTwitterFill className="text-4xl" /></a>}
                            {cv.fields.website === "" ? null : <a href={cv.fields.website} aria-label="قم بزيارة الموقع"><RiEarthLine className="text-4xl" /></a>}
                        </div>
                    </div>
                </aside>

            }
        </>
    )
}
