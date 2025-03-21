import { render, screen } from '@solidjs/testing-library'
import { Field, Fieldset } from '../'

const ComponentUnderTest = (props: Fieldset.RootProps) => (
  <Fieldset.Root {...props}>
    <Fieldset.Legend>Legend</Fieldset.Legend>
    <Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
    <Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.HelperText>Field Helper Text</Field.HelperText>
      <Field.ErrorText>Field Error Text</Field.ErrorText>
    </Field.Root>
  </Fieldset.Root>
)

describe('Fieldset', () => {
  it('should set textbox as disabled', async () => {
    render(() => <ComponentUnderTest disabled />)
    expect(screen.getByRole('textbox', { name: /label/i })).toBeDisabled()
  })

  it('should display helper text', async () => {
    render(() => <ComponentUnderTest />)
    expect(screen.getByText('Fieldset Helper Text')).toBeInTheDocument()
  })

  it('should display error text when error is present', async () => {
    render(() => <ComponentUnderTest invalid />)
    expect(screen.getByText('Fieldset Error Text')).toBeInTheDocument()
  })

  it('should not display error text when no error is present', async () => {
    render(() => <ComponentUnderTest />)
    expect(screen.queryByText('Error Info')).not.toBeInTheDocument()
  })
})
