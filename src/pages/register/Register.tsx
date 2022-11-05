import { Button, Paper, TextField, Typography } from '@mui/material'
import Box from '../../shared/components/box/Box'
import Container from '../../shared/components/container/Container'
import Form from '../../shared/components/form/Form'
import paperSx from '../../shared/styles/mui/sx/paper/PaperSx'

function Register(): JSX.Element {
	return (
		<Container>
			<Paper elevation={20} sx={paperSx}>
				<Box>
					<div />
				</Box>
				<Box>
					<Form>
						<Typography variant='h4'>Cadastro</Typography>
						<TextField variant='standard' label='Nome' fullWidth />
						<TextField
							variant='standard'
							label='E-mail'
							fullWidth
						/>
						<TextField variant='standard' label='Senha' fullWidth />
						<TextField
							variant='standard'
							label='Repita a senha'
							fullWidth
						/>
						<Button variant='contained' type='submit' fullWidth>
							Cadastrar
						</Button>
						<Button variant='outlined' type='submit' fullWidth>
							Conecte-se
						</Button>
					</Form>
				</Box>
			</Paper>
		</Container>
	)
}

export default Register
