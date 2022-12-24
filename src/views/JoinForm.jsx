import { useState } from 'react'

export const JoinForm = () => {
  const [formData, setFormData] = useState()

  const onSubmitForm = (ev) => {
    ev.preventDefault()
    console.log('hey')
  }

  return (
    <section className='join-form flex justify-center'>
      <form className='form-data flex column' onSubmit={onSubmitForm}>
        <div className='headers'>
          <h1>הצטרפות לקהילת השליחים של אולימפוס</h1>
          <h3>שדות המסומנים ב-* הינם שדות חובה</h3>
        </div>
        <div className='personal-info'>
          <div className='username-container input-container'>
            <input
              type='text'
              required
              name='usenrame'
              placeholder='שם פרטי *'
            />
          </div>
          <div className='lastname-container input-container'>
            <input
              type='text'
              required
              name='lastname'
              placeholder='שם משפחה *'
            />
          </div>
          <div className='phone-number-container input-container'>
            <span className='phone-icon'></span>
            <input
              type='text'
              required
              name='phoneNumber'
              placeholder='מספר טלפון *'
            />
          </div>
          <div className='mail-container input-container'>
            <span className='mail-icon'></span>
            <input type='text' required name='email' placeholder='דוא"ל *' />
          </div>
        </div>
        <div className="divider"></div>
        <div className="location-info flex column">
            <div className="age-continer">
                <input type="text" required name='age' placeholder='גיל *' />
            </div>
            <div className="city-continer">
                <input type="text" required name='city' placeholder='עיר מגורים *' />
            </div>
            <div className="transport-continer">
                <input type="text" required name='transport' placeholder='סוג כלי תחבורה *' />
            </div>
            <div className="work-type-continer">
                <input type="text" required name='workType' placeholder='סוג עוסק *' />
            </div>
        </div>
        <button>שלח פרטים</button>
      </form>
    </section>
  )
}
