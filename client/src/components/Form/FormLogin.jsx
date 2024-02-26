import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import { checkUser } from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './formLogin.css';
import Button from '@mui/material/Button';
import { saveUser } from '../../utils/sessionStorageLogin';
import handleAlert from '../../utils/handleAlert';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const inputValidation = () => {
    const emailValidation = validator.isLength(email, { min: 3 });
    const passwordValidation = validator.isLength(password, { min: 5 });

    if (!email && !password) {
      handleAlert('Preencha os campos');
      return;
    }

    if (!emailValidation && !passwordValidation) {
      handleAlert(
        'Email ou usuário inválido e a senha deve possuir um mínimo de 5 caracteres'
      );
      setErrorEmail(true);
      setErrorPassword(true);
      return;
    }

    if (!emailValidation) {
      handleAlert('Email ou usuário inválido');
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (!passwordValidation) {
      handleAlert('A senha deve possuir um mínimo de 5 caracteres');
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    inputValidation();

    const emailValidation = validator.isLength(email, { min: 3 });
    const passwordValidation = validator.isLength(password, { min: 5 });

    if (emailValidation && passwordValidation) {
      handleSubmitLogin();
    }
  };

  const handleSubmitLogin = async () => {
    const isValidUser = await checkUser(email, password);

    if (
      isValidUser.api_token !== undefined &&
      isValidUser.message === undefined
    ) {
      saveUser('api_token', isValidUser.api_token);
      return;
    }

    if (isValidUser.message !== undefined) {
      handleAlert(isValidUser.message);
    }
  };

  //TODO remove this function
  //Teste de login pois o back necesseita de liberar o Headers > "Access-Control-Allow-Headers"
  const handleButtonClickSalveApiTokenTeste = (e) => {
    e.preventDefault();
    saveUser('api_token', 'yObzWFzqFmXe7tL2hA2NZvUsUb6hoQz79FrDueFq');
    navigate('/listar');
  };

  return (
    <form className="form_login" onSubmit={handleButtonClick}>
      <TextField
        error={errorEmail}
        id="outlined-basic"
        label="Usuário"
        variant="outlined"
        className="input_email"
        onChange={(e) => handleChange(e, setEmail)}
      />
      <FormControl style={{ marginTop: 25 }}>
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          className="input_password"
          onChange={(e) => handleChange(e, setPassword)}
          error={errorPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <div className="login_buttons_wrapper">
          <Button
            className="button_salvar"
            variant="contained"
            color="success"
            value="entrar"
            onClick={handleButtonClick}
            type="submit"
          >
            Entrar
          </Button>
          <Button
            className="button_salvar"
            variant="contained"
            color="warning"
            value="entrar sem resposta do backend"
            onClick={handleButtonClickSalveApiTokenTeste}
            type="submit"
          >
            Entrar sem resposta do backend
          </Button>
        </div>
      </FormControl>
    </form>
  );
};

export default FormLogin;
