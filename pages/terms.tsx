import { NextSeo } from 'next-seo';
import Link from "next/link";
import { FC } from 'react';

const Terms: FC = () => {
    const title = "المكتبة القومية — الشروط والاحكام";
    const desc = "اقرا عن الشروط والاحكام الخاصة بموقع المكتبة القومية علشان تطمن علي بياناتك.";
    const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <article>
            <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    title,
                    description: desc,
                    type: 'website',
                }}
                additionalMetaTags={[
                    {
                        property: 'name',
                        content: title
                    },
                    {
                        property: 'description',
                        content: desc
                    },
                ]}
            />

            <h1>الشروط والاحكام لمكتبة القومية</h1>

            <p>مرحبا بكم في المكتبة القومية!</p>

            <p>تحدد هذه الشروط والأحكام القواعد واللوائح الخاصة باستخدام موقع المكتبة القومية، الموجود على https://maktabaqawmya.vercel.app.</p>

            <p>بدخولك إلى هذا الموقع ، نفترض أنك تقبل هذه الشروط والأحكام. لا تستمر في استخدام المكتبة القومية إذا كنت لا توافق على اتخاذ جميع البنود والشروط الواردة في هذه الصفحة.</p>

            <p>تنطبق المصطلحات التالية على هذه الشروط والأحكام وبيان الخصوصية وإشعار إخلاء المسؤولية وجميع الاتفاقيات: يشير مصطلح "العميل" و "أنت" و "الخاص بك" إليك ، والشخص الذي يقوم بتسجيل الدخول إلى هذا الموقع ويتوافق مع شروط الشركة و شروط. تشير "الشركة" و "أنفسنا" و "نحن" و "لنا" و "نحن" إلى شركتنا. يشير "الطرف" أو "الأطراف" أو "نحن" إلى كل من العميل وأنفسنا. تشير جميع الشروط إلى العرض والقبول والنظر في الدفع اللازم للاضطلاع بعملية مساعدتنا للعميل بالطريقة الأنسب للغرض الصريح المتمثل في تلبية احتياجات العميل فيما يتعلق بتوفير خدمات الشركة المعلنة ، وفقًا لـ وتخضع للقانون السائد على سبيل المثال. أي استخدام للمصطلحات المذكورة أعلاه أو غيرها من الكلمات في صيغة المفرد والجمع و / أو هو / هي أو هم ، يتم اعتباره قابلاً للتبادل وبالتالي يشير إلى نفسه.</p>

            <h2>ملفات تعريف الإرتباط</h2>

            <p>نحن نوظف استخدام ملفات تعريف الارتباط. من خلال الوصول إلى المكتبة القومية ، فإنك توافق على استخدام ملفات تعريف الارتباط بالاتفاق مع سياسة خصوصية المكتبة القومية.</p>

            <p>تستخدم معظم مواقع الويب التفاعلية ملفات تعريف الارتباط للسماح لنا باسترداد تفاصيل المستخدم لكل زيارة. يستخدم موقعنا ملفات تعريف الارتباط لتمكين وظائف مناطق معينة لتسهيل زيارة الأشخاص لموقعنا. قد يستخدم بعض الشركاء التابعين / المعلنين أيضًا ملفات تعريف الارتباط.</p>

            <h2>الترخيص</h2>

            <p>ما لم يُنص على خلاف ذلك ، تمتلك المكتبة القومية و / أو المرخصون التابعون لها حقوق الملكية الفكرية لجميع المواد الموجودة في المكتبة. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى هذا من المكتبة القومية للاستخدام الشخصي الخاص بك مع مراعاة القيود المنصوص عليها في هذه الشروط والأحكام.</p>

            <p>يحظر عليك:</p>

            <ul>
                <li>إعادة نشر مادة من المكتبة القومية</li>
                <li>بيع أو تأجير أو ترخيص مادة من المكتبة القومية</li>
                <li>إعادة إنتاج المواد أو نسخها أو نسخها من المكتبة القومية</li>
                <li>إعادة توزيع المحتوى من المكتبة القومية</li>
            </ul>

            <p>توفر أجزاء من هذا الموقع فرصة للمستخدمين لنشر وتبادل الآراء والمعلومات في مناطق معينة من الموقع. لا تقوم المكتبة القومية بتصفية أو تحرير أو نشر أو مراجعة التعليقات قبل وجودها على الموقع. لا تعكس التعليقات آراء وآراء المكتبة القومية و / أو وكلائها و / أو الشركات التابعة لها. تعكس التعليقات وجهات نظر وآراء الشخص الذي ينشر وجهات نظره وآرائه. إلى الحد الذي تسمح به القوانين المعمول بها ، لن تكون المكتبة القومية مسؤولة عن التعليقات أو عن أي مسؤولية أو أضرار أو نفقات ناتجة و / أو تكبدتها نتيجة لأي استخدام و / أو نشر و / أو ظهور التعليقات على هذا الموقع.</p>

            <p>تحتفظ المكتبة القومية بالحق في مراقبة جميع التعليقات وإزالة أي تعليقات يمكن اعتبارها غير ملائمة أو مسيئة أو تسبب خرقًا لهذه الشروط والأحكام.</p>

            <p>أنت تضمن وتقر بما يلي:</p>

            <ul>
                <li>يحق لك نشر التعليقات على موقعنا ولديك جميع التراخيص والموافقات اللازمة للقيام بذلك ؛</li>
                <li>لا تنتهك التعليقات أي حق من حقوق الملكية الفكرية ، بما في ذلك على سبيل المثال لا الحصر حقوق الطبع والنشر أو براءة الاختراع أو العلامة التجارية لأي طرف ثالث ؛</li>
                <li>لا تحتوي التعليقات على أي مواد تشهيرية أو تشهيرية أو مسيئة أو غير لائقة أو غير قانونية بأي شكل من الأشكال مما يعد انتهاكًا للخصوصية</li>
                <li>لن يتم استخدام التعليقات لالتماس أو الترويج لأنشطة تجارية أو مخصصة أو حالية أو نشاط غير قانوني.</li>
            </ul>

            <p>أنت بموجب هذا تمنح المكتبة العامة ترخيصًا غير حصري لاستخدام وإعادة إنتاج وتحرير وتفويض الآخرين لاستخدام وإعادة إنتاج وتحرير أي من تعليقاتك في أي وجميع الأشكال أو التنسيقات أو الوسائط.</p>

            <h2>الارتباط التشعبي إلى المحتوى الخاص بنا</h2>

            <p>قد ترتبط المنظمات التالية بموقعنا على الويب دون موافقة كتابية مسبقة:</p>

            <ul>
                <li>الهيئات الحكومية</li>
                <li>محركات البحث</li>
                <li>المؤسسات الإخبارية</li>
                <li>يجوز لموزعي الدليل عبر الإنترنت الارتباط بموقعنا على الويب بنفس طريقة الارتباط التشعبي لمواقع الويب الخاصة بشركات أخرى مدرجة ؛ و</li>
                <li>الشركات المعتمدة على مستوى النظام باستثناء طلب المنظمات غير الربحية ومراكز التسوق الخيرية ومجموعات جمع التبرعات الخيرية التي قد لا ترتبط ارتباطًا تشعبيًا بموقعنا على الويب.</li>
            </ul>

            <p>قد ترتبط هذه المنظمات بصفحتنا الرئيسية أو بالمنشورات أو بمعلومات أخرى على موقع الويب طالما أن الرابط: (أ) ليس مخادعًا بأي شكل من الأشكال ؛ (ب) لا يعني ضمنيًا رعاية أو تأييد أو موافقة الطرف المرتبط ومنتجاته و / أو خدماته ؛ و (ج) يناسب سياق موقع الطرف المرتبط.</p>

            <p>يجوز لنا النظر في طلبات الارتباط الأخرى والموافقة عليها من الأنواع التالية من المؤسسات:</p>

            <ul>
                <li>مصادر معلومات المستهلك و / أو النشاط التجاري المعروفة ؛</li>
                <li>مواقع مجتمع dot.com ؛</li>
                <li>جمعيات أو مجموعات أخرى تمثل الجمعيات الخيرية ؛</li>
                <li>موزعو الدليل عبر الإنترنت ؛</li>
                <li>بوابات الإنترنت ؛</li>
                <li>شركات المحاسبة والقانون والاستشارات ؛ و</li>
                <li>المؤسسات التعليمية والجمعيات التجارية.</li>
            </ul>

            <p>سنوافق على طلبات الارتباط من هذه المنظمات إذا قررنا ما يلي: (أ) لن يجعلنا الرابط ننظر بشكل غير موات لأنفسنا أو لشركاتنا المعتمدة ؛ (ب) ليس لدى المنظمة أي سجلات سلبية معنا ؛ (ج) تعوض الاستفادة من رؤية الارتباط التشعبي غياب المكتبة القومية ؛ و (د) الارتباط في سياق معلومات الموارد العامة.</p>

            <p>قد ترتبط هذه المنظمات بصفحتنا الرئيسية طالما أن الرابط: (أ) ليس مخادعًا بأي شكل من الأشكال ؛ (ب) لا يعني ضمنيًا رعاية أو تأييد أو موافقة الطرف المرتبط ومنتجاته أو خدماته ؛ و (ج) يناسب سياق موقع الطرف المرتبط.</p>

            <p>إذا كنت إحدى المنظمات المدرجة في الفقرة 2 أعلاه وتهتم بالارتباط بموقعنا على الويب ، فيجب عليك إبلاغنا عن طريق إرسال بريد إلكتروني إلى المكتبة القومية. يرجى تضمين اسمك واسم مؤسستك ومعلومات الاتصال بالإضافة إلى عنوان URL الخاص بموقعك وقائمة بأي عناوين URL تنوي الارتباط بموقعنا على الويب وقائمة عناوين URL الموجودة على موقعنا والتي ترغب في الوصول إليها وصلة. انتظر 2-3 أسابيع للرد.</p>

            <p>يجوز للمنظمات المعتمدة الارتباط التشعبي لموقعنا على النحو التالي:</p>

            <ul>
                <li>باستخدام اسم شركتنا ؛ أو</li>
                <li>من خلال استخدام محدد موقع الموارد المرتبط بـ ؛ أو</li>
                <li>من خلال استخدام أي وصف آخر لموقعنا على الويب يتم ربطه بهذا الأمر في سياق وشكل المحتوى على موقع الطرف المرتبط.</li>
            </ul>

            <p>لن يُسمح بأي استخدام لشعار المكتبة القومية أو أي عمل فني آخر لربط غياب اتفاقية ترخيص علامة تجارية.</p>

            <h2>إطارات iFrames</h2>

            <p>بدون موافقة مسبقة وإذن كتابي ، لا يجوز لك إنشاء إطارات حول صفحات الويب الخاصة بنا والتي تغير بأي شكل من الأشكال العرض التقديمي المرئي لموقعنا أو مظهره.</p>

            <h2>مسؤولية المحتوى</h2>

            <p>لن نتحمل المسؤولية عن أي محتوى يظهر على موقع الويب الخاص بك. أنت توافق على حمايتنا والدفاع عنا ضد جميع المطالبات التي تنشأ على موقع الويب الخاص بك. يجب ألا يظهر أي رابط (روابط) على أي موقع ويب يمكن تفسيره على أنه تشهيري أو فاحش أو إجرامي ، أو ينتهك أو ينتهك أو يدعو إلى التعدي أو الانتهاك الآخر لحقوق أي طرف ثالث.</p>

            <h2>حجز الحقوق</h2>

            <p>نحتفظ بالحق في مطالبتك بإزالة جميع الروابط أو أي رابط معين لموقعنا على الويب. أنت توافق على إزالة جميع الروابط إلى موقعنا على الفور عند الطلب. نحتفظ أيضًا بالحق في تعديل هذه الشروط والأحكام وسياسة الربط الخاصة بها في أي وقت. من خلال الارتباط المستمر بموقعنا على الويب ، فإنك توافق على الالتزام بشروط وأحكام الربط هذه واتباعها.</p>

            <h2>إزالة الروابط من موقعنا على الإنترنت</h2>

            <p>إذا وجدت أي ارتباط مسيء على موقعنا الإلكتروني لأي سبب من الأسباب ، فلا تتردد في الاتصال بنا وإبلاغنا في أي لحظة. سننظر في طلبات إزالة الروابط ولكننا لسنا ملزمين بذلك أو بالرد عليك مباشرة.</p>

            <p>لا نضمن صحة المعلومات الواردة في هذا الموقع ، ولا نضمن اكتمالها أو دقتها ؛ كما أننا لا نعد بضمان بقاء موقع الويب متاحًا أو تحديث المواد الموجودة على الموقع.</p>

            <h2>إخلاء المسؤولية</h2>

            <p>إلى أقصى حد يسمح به القانون المعمول به ، نستبعد جميع الإقرارات والضمانات والشروط المتعلقة بموقعنا على الويب واستخدام هذا الموقع. لا شيء في إخلاء المسؤولية هذا:</p>

            <ul>
                <li>تحديد أو استبعاد مسؤوليتنا أو مسؤوليتك عن الوفاة أو الإصابة الشخصية ؛</li>
                <li>تحديد أو استبعاد مسؤوليتنا أو مسؤوليتك عن الاحتيال أو التحريف الاحتيالي ؛</li>
                <li>تحديد أي من التزاماتنا أو التزاماتك بأي طريقة غير مسموح بها بموجب القانون المعمول به ؛ أو</li>
                <li>استبعاد أي من التزاماتنا أو التزاماتك التي قد لا يتم استبعادها بموجب القانون المعمول به.</li>
            </ul>

            <p>قيود وحظر المسؤولية المنصوص عليها في هذا القسم وفي أي مكان آخر في إخلاء المسؤولية هذا: (أ) تخضع للفقرة السابقة ؛ و (ب) تحكم جميع الالتزامات الناشئة بموجب إخلاء المسؤولية ، بما في ذلك الالتزامات الناشئة في العقد ، في حالة الضرر وخرق الواجب القانوني.</p>

            <p>طالما يتم توفير موقع الويب والمعلومات والخدمات على الموقع مجانًا ، فلن نكون مسؤولين عن أي خسارة أو ضرر من أي نوع.</p>
        </article>
    );
};

export default Terms; 