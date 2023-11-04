import { NextSeo } from 'next-seo';
import Link from "next/link";

export default function Privacy() {
    const title = "سياسة الخصوصية — المكتبة القومية"
    const desc = "اقرا عن سياسة الخصوصية الخاصة بموقع المكتبة القومية علشان تطمن علي بياناتك."
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <article>
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

            <h1>سياسة الخصوصية لمكتبة القومية</h1>

            <p>في المكتبة القومية ، يمكن الوصول إليه من {siteUrl} ، إحدى أولوياتنا الرئيسية هي خصوصية زوارنا. تحتوي وثيقة سياسة الخصوصية هذه على أنواع المعلومات التي يتم جمعها وتسجيلها بواسطة المكتبة القومية وكيف نستخدمها. </ p>
            <br />
            <p> إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة الخصوصية الخاصة بنا ، فلا تتردد في الاتصال بنا. </ p>
            <br />
            <p> تنطبق سياسة الخصوصية هذه فقط على أنشطتنا عبر الإنترنت وهي صالحة لزوار موقعنا الإلكتروني فيما يتعلق بالمعلومات التي شاركوها و / أو يجمعونها في المكتبة القومية. لا تنطبق هذه السياسة على أي معلومات يتم جمعها في وضع عدم الاتصال أو عبر قنوات أخرى غير هذا الموقع. </p>
            <br />
            <h2>الموافقة</h2>
            <br />
            <p> باستخدام موقعنا ، فإنك بذلك توافق على سياسة الخصوصية الخاصة بنا وتوافق على شروطها.</ p>
            <br />
            <h2>المعلومات التي نجمعها</h2>
            <br />
            <p> سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها وأسباب مطالبتك بتقديمها عند النقطة التي نطلب منك فيها تقديم معلوماتك الشخصية. </ p>
            <br />
            <p> إذا اتصلت بنا مباشرةً ، فقد نتلقى معلومات إضافية عنك مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومحتويات الرسالة و / أو المرفقات التي قد ترسلها إلينا وأي معلومات أخرى قد تختار تقديمها . </p>
            <br />
            <p> عند التسجيل للحصول على حساب ، قد نطلب معلومات الاتصال الخاصة بك ، بما في ذلك عناصر مثل الاسم واسم الشركة والعنوان وعنوان البريد الإلكتروني ورقم الهاتف. </ p>
            <br />
            <h2>كيف نستخدم معلوماتك</h2>
            <br />
            <p> نستخدم المعلومات التي نجمعها بطرق مختلفة ، بما في ذلك: </ p>
            <br />
            <ul>
                <li> توفير موقعنا الإلكتروني وتشغيله وصيانته </ li>
                <li> تحسين موقعنا على الويب وتخصيصه وتوسيعه </ li>
                <li> فهم وتحليل كيفية استخدامك لموقعنا على الويب </ li>
                <li> تطوير منتجات وخدمات وميزات ووظائف جديدة </ li>
                <li> التواصل معك ، إما بشكل مباشر أو من خلال أحد شركائنا ، بما في ذلك لخدمة العملاء ، لتزويدك بالتحديثات والمعلومات الأخرى المتعلقة بالموقع ولأغراض تسويقية وترويجية </ li>
                <li> إرسال رسائل بريد إلكتروني إليك </ li>
                <li> البحث عن الاحتيال ومنعه </ li>
            </ul>
            <br />
            <h2>ملفات الدخول</h2>
            <br />
            <p>يتبع  المكتبة القومية الإجراء القياسي لاستخدام ملفات السجل. تسجل هذه الملفات الزوار عندما يزورون مواقع الويب. تقوم جميع شركات الاستضافة بذلك وجزء من تحليلات خدمات الاستضافة. تتضمن المعلومات التي يتم جمعها بواسطة ملفات السجل عناوين بروتوكول الإنترنت (IP) ونوع المستعرض وموفر خدمة الإنترنت (ISP) وختم التاريخ والوقت وصفحات الإحالة / الخروج وربما عدد النقرات. هذه ليست مرتبطة بأي معلومات لتحديد الهوية الشخصية. الغرض من المعلومات هو تحليل الاتجاهات وإدارة الموقع وتتبع حركة المستخدمين على الموقع وجمع المعلومات الديموغرافية. </ p>
            <br />
            <h2> ملفات تعريف الارتباط وإشارات الويب </h2>
            <br />
            <p> مثل أي موقع ويب آخر ، يستخدم المكتبة القومية ملفات تعريف الارتباط. تُستخدم ملفات تعريف الارتباط هذه لتخزين المعلومات بما في ذلك تفضيلات الزوار والصفحات الموجودة على موقع الويب التي قام الزائر بالوصول إليها أو زيارتها. تُستخدم المعلومات لتحسين تجربة المستخدمين من خلال تخصيص محتوى صفحة الويب الخاصة بنا بناءً على نوع متصفح الزوار و / أو معلومات أخرى. </ p>
            <br />
            <h2>Google DoubleClick DART Cookie</h2>
            <br />
            <p> تعد Google أحد البائعين الخارجيين على موقعنا. كما تستخدم ملفات تعريف الارتباط ، المعروفة باسم ملفات تعريف الارتباط DART ، لعرض الإعلانات على زوار موقعنا بناءً على زيارتهم لموقع www.website.com والمواقع الأخرى على الإنترنت. ومع ذلك ، قد يختار الزوار رفض استخدام ملفات تعريف الارتباط DART من خلال زيارة سياسة الخصوصية الخاصة بإعلانات Google وشبكة المحتوى على عنوان URL التالي - <a href="https://policies.google.com/technologies/ads"> https: / /policies.google.com/technologies/ads </a> </p>
            <br />
            <h2>شركاؤنا في الإعلانات</h2>
            <br />
            <p> قد يستخدم بعض المعلنين على موقعنا ملفات تعريف الارتباط وإشارات الويب. شركاء الإعلان لدينا مدرجون أدناه. لكل من شركائنا الإعلانيين سياسة الخصوصية الخاصة بهم لسياساتهم الخاصة ببيانات المستخدم. لتسهيل الوصول ، قمنا بالربط التشعبي بسياسات الخصوصية أدناه. </ p>
            <br />
            <ul>
                <li>
                    <p> <a href="https://policies.google.com/technologies/ads">Google</a> </p>
                </li>
            </ul>
            <br />
            <h2>سياسات خصوصية شركاء الإعلانات</h2>
            <br />
            <p> يمكنك الرجوع إلى هذه القائمة للعثور على سياسة الخصوصية لكل من شركاء الإعلان في المكتبة القومية. </ p>
            <br />
            <p> تستخدم خوادم الإعلانات الخارجية أو شبكات الإعلانات تقنيات مثل ملفات تعريف الارتباط أو جافا سكريبت أو منارات الويب المستخدمة في الإعلانات والروابط الخاصة بكل منها والتي تظهر على المكتبة القومية ، والتي يتم إرسالها مباشرة إلى متصفح المستخدمين. يتلقون عنوان IP الخاص بك تلقائيًا عند حدوث ذلك. تُستخدم هذه التقنيات لقياس فعالية حملاتهم الإعلانية و / أو لتخصيص محتوى الإعلان الذي تراه على مواقع الويب التي تزورها. </ p>
            <br />
            <p> لاحظ أن المكتبة القومية ليس لديه حق الوصول إلى ملفات تعريف الارتباط هذه أو التحكم فيها التي يستخدمها معلنون من جهات خارجية. </ p>
            <br />
            <h2>سياسات خصوصية الطرف الثالث</h2>
            <br />
            <p> لا تنطبق سياسة خصوصية المكتبة القومية على المعلنين أو المواقع الإلكترونية الأخرى. وبالتالي ، فإننا ننصحك بالرجوع إلى سياسات الخصوصية الخاصة بخوادم إعلانات الجهات الخارجية للحصول على معلومات أكثر تفصيلاً. قد يتضمن ممارساتهم وتعليماتهم حول كيفية الانسحاب من بعض الخيارات. </p>
            <br />
            <p> يمكنك اختيار تعطيل ملفات تعريف الارتباط من خلال خيارات المتصفح الفردية. لمعرفة المزيد من المعلومات التفصيلية حول إدارة ملفات تعريف الارتباط مع متصفحات الويب المحددة ، يمكن العثور عليها في مواقع الويب الخاصة بالمتصفحات. </ p>
            <br />
            <h2>{`حقوق خصوصي CCPA لا تبيع معلوماتي الشخصي) `}</ h2>
            <br />
            <p>{`بموجب قانون حماية خصوصية المستهلك في كاليفورنيا (CCPA) ، من بين حقوق أخرى ، يحق للمستهلكين في كاليفورنيا ما يلي:`}</ p>
            <br />
            <ul>
                <li> اطلب أن تكشف الشركة التي تجمع البيانات الشخصية للمستهلك عن فئات وأجزاء معينة من البيانات الشخصية التي جمعتها الشركة عن المستهلكين. </li>
                <li> اطلب من شركة ما حذف أي بيانات شخصية عن المستهلك جمعتها الشركة. </li>
                <li> اطلب من الشركة التي تبيع البيانات الشخصية للمستهلك ، ألا تبيع البيانات الشخصية للمستهلك. </li>
                <li> إذا قدمت طلبًا ، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في ممارسة أي من هذه الحقوق ، يرجى الاتصال بنا. </li>
            </ul>
            <br />
            <h2> حقوق حماية بيانات GDPR </h2>
            <br />
            <p> نود التأكد من أنك على دراية كاملة بجميع حقوق حماية البيانات الخاصة بك. يحق لكل مستخدم ما يلي: </p>
            <br />
            <ul>
                <li> الحق في الوصول - يحق لك طلب نسخ من بياناتك الشخصية. قد نفرض عليك رسومًا رمزية مقابل هذه الخدمة. </li>
                <li> الحق في التصحيح - يحق لك أن تطلب منا تصحيح أي معلومات تعتقد أنها غير دقيقة. لديك أيضًا الحق في طلب إكمال المعلومات التي تعتقد أنها غير كاملة. </li>
                <li> الحق في المسح - يحق لك طلب مسح بياناتك الشخصية ، في ظل ظروف معينة. </li>
                <li> الحق في تقييد المعالجة - يحق لك طلب تقييد معالجة بياناتك الشخصية ، في ظل ظروف معينة. </li>
                <li> الحق في الاعتراض على المعالجة - يحق لك الاعتراض على معالجتنا لبياناتك الشخصية ، في ظل ظروف معينة. </li>
                <li> الحق في نقل البيانات - يحق لك أن تطلب منا نقل البيانات التي جمعناها إلى مؤسسة أخرى ، أو إليك مباشرةً ، في ظل ظروف معينة. </li>
                <li> إذا قدمت طلبًا ، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في ممارسة أي من هذه الحقوق ، يرجى الاتصال بنا. </li>
            </ul>
            <br />
            <h2>معلومات الأطفال</h2>
            <br />
            <p> يتمثل جزء آخر من أولوياتنا في إضافة الحماية للأطفال أثناء استخدام الإنترنت. نحن نشجع الآباء والأوصياء على مراقبة نشاطهم عبر الإنترنت والمشاركة فيه و / أو مراقبته وتوجيهه. </ p>
            <br />
            <p> المكتبة القومية لا تجمع عن قصد أي معلومات تعريف شخصية من الأطفال دون سن 13 عامًا. إذا كنت تعتقد أن طفلك قدم هذا النوع من المعلومات على موقعنا ، فنحن نشجعك بشدة على الاتصال بنا على الفور وسنبذل قصارى جهدنا لإزالة هذه المعلومات على الفور من سجلاتنا. </ p>
        </article>
    )
}