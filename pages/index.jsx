export default function Home() {
    return (
        <>
            <div className="text-center h-screen grid items-center">
                <div className="grid gap-3">
                    <h1>ابحث في المكتبة القومية</h1>
                    <p>بوابتك المعرفية في عالم القومية</p>

                    <input className="searchInput" type="text" placeholder="ابحث في عالم القومية" />
                </div>
            </div>
        </>
    )
}