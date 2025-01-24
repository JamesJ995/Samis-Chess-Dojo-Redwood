// import { Link, routes } from '@redwoodjs/router'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import {
  Form,
  TextField,
  TextAreaField,
  Label,
  Submit,
  FieldError,
  SubmitHandler,
  useForm,
  FormError,
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <>
      <p>
        The 'contact me' messages sent here will only be saved to the site,
        which I will check perodiocally, thanks!
      </p>
      <Metadata title="Contact" description="Contact page" />

      <Toaster />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error}>
        <FormError error={error} wrapperClassName="form-error" />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
