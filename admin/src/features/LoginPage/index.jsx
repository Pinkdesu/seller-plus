import React from 'react';
import { useField, useEmailError, usePasswordError } from '~/utils/fields';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '~/features/AppBootstrap/store/events';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: `${theme.spacing(3, 0, 2)} !important`,
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const [email, onEmail] = useField('');
  const [password, onPassword] = useField('');

  const [emailError, onEmailBlur] = useEmailError(email);
  const [passwordError, onpasswordBlur] = usePasswordError(password);

  const signIn = (e) => {
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  const disabled = Boolean(emailError || passwordError || !email || !password);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            error={Boolean(emailError)}
            helperText={emailError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Адресс"
            autoComplete="email"
            onChange={onEmail}
            onBlur={onEmailBlur}
            autoFocus
          />
          <TextField
            error={Boolean(passwordError)}
            helperText={passwordError}
            onChange={onPassword}
            onBlur={onpasswordBlur}
            fullWidth
            variant="outlined"
            margin="normal"
            required
            label="Пароль"
            type="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={signIn}
            className={classes.submit}
          >
            Войти
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
