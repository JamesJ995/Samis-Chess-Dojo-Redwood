import {
  Form,
  TextField,
  // TextAreaField,
  Label,
  Submit,
  FieldError,
  SubmitHandler,
  // useForm,
  // FormError,
} from '@redwoodjs/forms'

const TextMessagesPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <FieldError name="phoneNumber" className="error" />
        <Label name="phoneNumber" errorClassName="error">
          Please Enter Your Phone Number Below
        </Label>
        <TextField
          name="phoneNumber"
          placeholder="Phone Number"
          validation={{
            required: true,
            pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          }}
        />
        <Submit>Go</Submit>
      </Form>
    </>
  )
}

export default TextMessagesPage
