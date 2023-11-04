import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>كلمنا — المكتبة القومية</title>
                <meta name="description" content="لو عندك اي استفسار أو سؤال في بالك متترددش وكلمنا أو ابعت لنا عن طريق انك تملي الفورم." />
            </Head>
            <div className="md:grid px-3 grid-cols-2 gap-5">
                <div className="">
                    <h1>كلمنا</h1>
                    <p className="text-gray-400">لو عندك اي استفسار أو سؤال في بالك متترددش وكلمنا أو ابعت لنا عن طريق انك تملي الفورم اللي تحت.</p>
                </div>

                <form action="#" className="mt-4 grid gap-3">
                    <div className="grid gap-2 w-full">
                        <label htmlFor="first-name">الإسم</label>
                        <input
                            type="text"
                            className="form-input px-4 py-3"
                            name="first-name"
                            id="first-name" />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="email">البريد الالكتروني</label>
                        <input
                            type="email"
                            className="form-input px-4 py-3"
                            name="email"
                            id="email" />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="phone">رقم التليفون</label>
                        <input
                            type="number"
                            className="form-input px-4 py-3"
                            name="phone"
                            id="phone" />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="governate">المحافظة</label>
                        <input
                            type="text"
                            className="form-input px-4 py-3"
                            name="governate"
                            id="governate" />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="message">رسالتك</label>
                        <textarea
                            type="text"
                            className="form-input px-4 py-3"
                            name="message"
                            id="message" />
                    </div>
                    <input type="button" value="ابعت" className="button" />
                </form>
            </div>
        </>
    )
}