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
import { FC } from 'react';
import { CVDetailsComponentProps } from '../../types';

const CVDetails: FC<CVDetailsComponentProps> = ({ cv, className }) => {
  const isPersonalCV = cv.fields.ifPerson;

  return (
    <div className={`${className} gap-4 col-span-1 h-fit sticky top-28 border dark:bg-dptimary dark:border-none`}>
      <div className="grid gap-3">
        <h2 className="text-xl pr-3">
          {isPersonalCV ? 'معلومات عن ' + cv.fields.name : 'تفاصيل الصفحة'}
        </h2>
        
        <div className="grid gap-2 p-3">
          {/* Basic Info */}
          <p className="text-gray-500">النوع: {cv.fields.type}</p>
          {cv.fields.title && (
            <p className="text-gray-500">اللقب: {cv.fields.title}</p>
          )}

          {/* Personal CV Details */}
          {isPersonalCV ? (
            <>
              <p className="font-medium text-primary">ميلاده:<span className="text-black"> {cv.fields.date}</span></p>
              <p className="font-medium text-primary">مسقط رأسه:<span className="text-black"> {cv.fields.location}</span></p>
              {cv.fields.position && (
                <>
                  <p className="font-medium text-primary">أهم المنصاب:</p>
                  <ul className="py-3">
                    {cv.fields.position.map((pos) => (
                      <li key={pos}>{pos}</li>
                    ))}
                  </ul>
                </>
              )}
              {cv.fields.ifDied && cv.fields.deathDate && (
                <p className="font-medium text-primary">وفاته:<span className="text-black"> {cv.fields.deathDate}</span></p>
              )}
            </>
          ) : (
            /* Page Details */
            <>
              <p className="font-medium text-primary">تاريخ نشأة الصفحة:<span className="text-black"> {cv.fields.date}</span></p>
              <p className="font-medium text-primary">أصحابها:<span className="text-black"> {cv.fields.location}</span></p>
              
              {/* Social Links */}
              {(cv.fields.facebook || cv.fields.twitter || cv.fields.website) && (
                <>
                  <p className="font-medium text-primary">روابط التواصل و الموقع الرسمي:</p>
                  <div className="flex gap-5">
                    {cv.fields.facebook && (
                      <a href={cv.fields.facebook} aria-label="تابع الصفحة الفيسبك">
                        <RiFacebookCircleFill className="text-4xl" />
                      </a>
                    )}
                    {cv.fields.twitter && (
                      <a href={cv.fields.twitter} aria-label="تابع الصفحة التويتر">
                        <RiTwitterFill className="text-4xl" />
                      </a>
                    )}
                    {cv.fields.website && (
                      <a href={cv.fields.website} aria-label="قم بزيارة الموقع">
                        <RiEarthLine className="text-4xl" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVDetails; 