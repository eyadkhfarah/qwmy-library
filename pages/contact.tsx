import Head from 'next/head';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'الاسم يجب ان يكون اكثر من حرفين'),
  email: z.string().email('البريد الالكتروني غير صحيح'),
  phone: z.string().min(11, 'رقم التليفون يجب ان يكون 11 رقم').max(11, 'رقم التليفون يجب ان يكون 11 رقم'),
  governate: z.string().min(2, 'اسم المحافظة يجب ان يكون اكثر من حرفين'),
  message: z.string().min(10, 'الرسالة يجب ان تكون اكثر من 10 حروف')
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      email: '',
      phone: '',
      governate: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Add your form submission logic here
      console.log(data);
      // Example: await submitForm(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Head>
        <title>كلمنا — المكتبة القومية</title>
        <meta name="description" content="لو عندك اي استفسار أو سؤال في بالك متترددش وكلمنا أو ابعت لنا عن طريق انك تملي الفورم." />
      </Head>
      <section className="md:grid px-3 grid-cols-2 gap-5">
        <div>
          <h1>كلمنا</h1>
          <p className="text-gray-400">لو عندك اي استفسار أو سؤال في بالك متترددش وكلمنا أو ابعت لنا عن طريق انك تملي الفورم اللي تحت.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="firstName" className="form-label">الإسم</label>
            <input
              {...register('firstName')}
              type="text"
              className="form-input"
              id="firstName"
              placeholder="ادخل اسمك"
            />
            {errors.firstName && (
              <span className="form-error">{errors.firstName.message}</span>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="form-label">البريد الالكتروني</label>
            <input
              {...register('email')}
              type="email"
              className="form-input"
              id="email"
              placeholder="ادخل بريدك الالكتروني"
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="phone" className="form-label">رقم التليفون</label>
            <input
              {...register('phone')}
              type="tel"
              className="form-input"
              id="phone"
              placeholder="ادخل رقم تليفونك"
            />
            {errors.phone && (
              <span className="form-error">{errors.phone.message}</span>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="governate" className="form-label">المحافظة</label>
            <input
              {...register('governate')}
              type="text"
              className="form-input"
              id="governate"
              placeholder="ادخل اسم محافظتك"
            />
            {errors.governate && (
              <span className="form-error">{errors.governate.message}</span>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="form-label">رسالتك</label>
            <textarea
              {...register('message')}
              className="form-input min-h-[120px] resize-none"
              id="message"
              placeholder="اكتب رسالتك هنا"
            />
            {errors.message && (
              <span className="form-error">{errors.message.message}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="form-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'جاري الارسال...' : 'ابعت'}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact; 