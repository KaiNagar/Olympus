
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

  const getPattern = (inputName) => {
    if (inputName === 'email') {
      return /^(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i
    } else {
      return
    }
  }
  return (
    <div className={`${inputName}-container field-preview`}>
      <input
        type={getInputType(inputName)}
        placeholder={placeHolder}
        {...register(inputName, {
          required: err,
          ...validation,
          pattern: getPattern(inputName),
        })}
      />
      {errors.username && (
        <span className='form-error'>{errors[inputName].message}</span>
      )}
    </div>
  )
}
