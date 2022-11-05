import ContainerStyle from './ContainerStyle'
import ContainerProps from './containerProps'

function Container(props: ContainerProps): JSX.Element {
	return <ContainerStyle style={props.style}>{props.children}</ContainerStyle>
}

export default Container
