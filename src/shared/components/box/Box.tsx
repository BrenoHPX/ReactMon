import BoxProps from './boxProps'
import BoxStyle from './BoxStyle'

function Box(props: BoxProps): JSX.Element {
	return <BoxStyle style={props.style}>{props.children}</BoxStyle>
}

export default Box
