import FormProps from './formProps'
import FormStyle from './FormStyle'

function Form(props: FormProps): JSX.Element {
	return <FormStyle>{props.children}</FormStyle>
}

export default Form
