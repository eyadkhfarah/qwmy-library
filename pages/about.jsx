import { NextSeo } from 'next-seo';
import Link from "next/link";

export default function About() {
    const title = "احنا مين؟ — المكتبة القومية"
    const desc = "في الصفحة دي هتعرف احنا مبن وايه هدفنا ومصادرنا"

    return (
        <>
            <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    title: `${title}`,
                    description: `${desc}`,
                    type: 'website',
                }}
                additionalMetaTags={[
                    {
                        itemProp: 'name',
                        content: { title }
                    },
                    {
                        itemProp: 'description',
                        content: { desc }
                    },
                ]}

            />
            <h1>احنا مين؟</h1>
            <div className="mt-4">
                <p>اهلا بيكم في صفحة لوكوجي اول موقع قومي اقتصادي تابعة للقومية المصرية</p>
                <br />
                <h2>ايه محتوي الموقع؟</h2>
                <br />
                <p>محتوي الموقع مخصص عن البورصة المصرية والعالمية وأسهم الشركات وشوية مقالات رأي واخبار عن الاقتصاد بشكل أكبر وشامل فيه تفاصيل كتيرة ومبسطة</p>
                <br />
                <h2>إيه معني كلمة "لوكوجي"؟</h2>
                <br />
                <p>لوكوجي "ⲗⲟⲕⲟϫⲓ هي كلمة من اللغة المصرية بالكتابة القبطية ومعانها "عملة"</p>
                <br />
                <h2>ايه اللي بيفرق موقع لوكوجي عن المواقع القومية التانية؟</h2>
                <br />
                <p>الموقع فيها:</p>
                <br />
                <ul className="list-disc">
                    <li>ارقام اللي بتحقق بورصات العالم والجمهورية المصرية خصوصا</li>
                    <li>أول موقع مصري فيه اسعار عملات الكريبتو واخر احصائياها</li>
                    <li>متابعة شاملة لكل الاخبار الاقتصاديه</li>
                    <li>انفوجرافيك تفصيلي عن كل الاحصائيات</li>
                    <li>شرح مبسط لكل المفاهيم الاقتصادية</li>
                </ul>
            </div>
        </>
    )
}