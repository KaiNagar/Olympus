import { useForm } from 'react-hook-form'
import { FieldPreview } from '../cmps/FieldPrivew'

export const JoinForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmitForm = (data) => {
    const user = {
      ...data,
      phoneNumber: data.phoneNumber.replace(/[^\w\s]/gi, '').replace(/ /g, ''),
    }
    console.log(user);
    const {
      username,
      lastname,
      phoneNumber,
      email,
      transport,
      workType,
      city,
      age,
    } = user
    const message = `שם מלא: ${username} ${lastname}
  טלפון: ${phoneNumber}
  גיל: ${age}
  מייל: ${email}
  עיר מגורים: ${city}
  כלי תחבורה עיקרי: ${transport}
  סוג עיסוק: ${workType}
   `
    let url = `https://web.whatsapp.com/send?phone=972542194560`
    url += `&text=${encodeURI(message)}&app_absent=0`
    window.open(url)
  }

  const fieldsData = {
    personal: [
      {
        inputName: 'username',
        placeHolder: 'שם פרטי *',
        err: 'שם פרטי הוא שדה חובה',
      },
      {
        inputName: 'lastname',
        placeHolder: 'שם משפחה *',
        err: 'שם משפחה הוא שדה חובה',
      },
      {
        inputName: 'phoneNumber',
        placeHolder: 'מספר טלפון *',
        err: 'מספר טלפון הוא שדה חובה',
      },
      {
        inputName: 'email',
        placeHolder: 'דוא"ל *',
        err: 'דוא"ל הוא שדה חובה',
        pattern:
          "/^(([^<>()[\\]\\.,;:\\s@\\']+(\\.[^<>()[\\]\\.,;:\\s@\\']+)*)|(\\'.+\\'))@(([^<>()[\\]\\.,;:\\s@\\']+\\.)+[^<>()[\\]\\.,;:\\s@\\']{2,})$/i",
      },
    ],
    location: [
      {
        inputName: 'age',
        placeHolder: 'גיל *',
        err: 'גיל הוא שדה חובה',
      },
      {
        inputName: 'city',
        placeHolder: 'עיר מגורים *',
        err: 'עיר מגורים הוא שדה חובה',
      },
      {
        inputName: 'transport',
        placeHolder: 'כלי תחבורה *',
        err: 'כלי תחבורה הוא שדה חובה',
      },
      {
        inputName: 'workType',
        placeHolder: 'סוג עוסק *',
        err: 'סוג עוסק הוא שדה חובה',
      },
    ],
  }

  return (
    <section className='join-form flex justify-center'>
      <form
        className='form-data flex column'
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className='headers'>
          <h1>הצטרפות לקהילת השליחים של אולימפוס</h1>
          <h3>שדות המסומנים ב-* הינם שדות חובה</h3>
        </div>

        <div className='personal-info'>
          {fieldsData.personal.map((field) => (
            <FieldPreview
              key={field.inputName}
              field={field}
              register={register}
              errors={errors}
            />
          ))}
        </div>

        <div className='divider'></div>

        <div className='location-info flex column'>
          {fieldsData.location.map((field) => (
            <FieldPreview
              key={field.inputName}
              field={field}
              register={register}
              errors={errors}
            />
          ))}
        </div>

        <input type='submit' />
      </form>
    </section>
  )
}
