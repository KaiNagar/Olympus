export const FieldPreview = ({
  field: { inputName, placeHolder, err, validation = {}, pattern = '' },
  register,
  errors,
}) => {
  const getInputType = (inputName) => {
    switch (inputName) {
      case 'email':
        return 'text'
      case 'age':
        return 'number'
      case 'phoneNumber':
        return 'tel'
      default:
        return 'text'
    }
  }

  const getValidation = (inputName) => {
    switch (inputName) {
      case 'age':
        return {
          value: { min: 18, max: 99 },
          message: 'גיל מינימאלי להצטרפות הוא 18',
        }
    }
  }
  const getPattern = (inputName) => {
    switch (inputName) {
      case 'email':
        return {
          value:
            /^(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i,
          message: 'נא הכנס דוא"ל תקין',
        }
      case 'username':
      case 'lastname':
        return { value: /^[A-Za-zא-ת]+$/i, message: 'נא הכנס שם רק באותיות' }
      case 'phoneNumber':
        return {
          value: /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/,
          message: 'נא הכנס מספר טלפון תקין',
        }
    }
  }
  return (
    <div className={`${inputName}-container field-preview`}>
      <input
        type={getInputType(inputName)}
        placeholder={placeHolder}
        {...register(inputName, {
          required: err,
          validation: getValidation(inputName),
          pattern: getPattern(inputName),
        })}
      />
      {errors[inputName] && (
        <span className='form-error'>{errors[inputName].message}</span>
      )}
    </div>
  )
}
