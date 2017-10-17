export interface Language {
  ru: {
    validation: {
      [key: string]: string;
    };
    navigation: {
      [key: string]: string;
    };
    authErrors: {
      [key: string]: string;
    };
    signupForm: {
      [key: string]: string;
    };
    signinForm: {
      [key: string]: string;
    };
    emailConfirmation: {
      [key: string]: string;
    };
    changePassword: {
      [key: string]: string;
    };
  };
  en: {
    validation: {
      [key: string]: string;
    };
    navigation: {
      [key: string]: string;
    };
    authErrors: {
      [key: string]: string;
    };
    signupForm: {
      [key: string]: string;
    };
    signinForm: {
      [key: string]: string;
    };
    emailConfirmation: {
      [key: string]: string;
    };
    changePassword: {
      [key: string]: string;
    };
  };
}

const interfaceLanguage: Language = {
  ru: {
    validation: {
      required: 'Поле обязательно для заполнения',
      invalidEmail: 'Неверный формат е-мэйла',
      invalidPassword: 'Неверный формат пароля',
      invalidName: 'Неверный формат имени',
      invalidPasswordConfirmation: 'Пароли должны совпадать'
    },
    navigation: {
      homepage: 'домашняя',
      catalog: 'каталог',
      signin: 'вход',
      signup: 'регистрация',
      signout: 'выход',
      ruLang: 'Рус',
      engLang: 'Англ'
    },
    authErrors: {
      103: 'Аккаунт не активирован',
      102: 'Ошибка авторизации',
      101: 'Неверный е-мэйл или пароль',
      105: 'Неверный формат введенных данных',
      11000: 'такой аккаунт уже существует'
    },
    signupForm: {
      title: 'Регистрация',
      firstStepTooltip: 'Личная информация',
      secondStepTooltip: 'Контактная информация',
      thirdStepTooltip: 'Безопасность',
      passwordTooltip:
        'Пароль должен быть не менее 8 символов, содержать как минимум 1 цифру и 1 специальный символ',
      nextButton: 'Далее',
      submitButton: 'Отправить',
      signinLink: 'Уже зарегистрированы? Войти',
      nameField: 'Ваше имя',
      nameFieldPlaceholder: 'Введите ваше имя',
      emailField: 'Ваш е-мэйл',
      emailFieldPlaceholder: 'Введите ваш е-мэйл',
      passwordField: 'Пароль',
      passwordFieldPlaceholder: 'Придумайте пароль',
      confirmPasswordField: 'Подтверждение пароля',
      confirmPasswordFieldPlaceholder: 'Подтвердите пароль',
      signupConfirmation: 'Подтверждение регистрации',
      signupConfirmationMessage:
        'Мы отправили на почтовый ящик письмо с ссылой активации. Пожалуйста, пройдите по ней' +
        'для того, чтобы закончить регистрацию'
    },
    signinForm: {
      title: 'Вход',
      submitButton: 'Войти',
      signupLink: 'Зарегистрироваться',
      changePassword: 'Забыли пароль?',
      passwordTooltip:
        'Пароль должен быть не менее 8 символов, содержать как минимум 1 цифру и 1 специальный символ',
      emailField: 'Ваш е-мэйл',
      emailFieldPlaceholder: 'Введите ваш е-мэйл',
      passwordField: 'Пароль',
      passwordFieldPlaceholder: 'Введите ваш пароль'
    },
    emailConfirmation: {
      title: 'Подтверждение е-мэйла',
      loadingMessage: 'Подтверждаем ваш е-мэйл. Пожалуйста, подождите.',
      successMessage: 'Е-мэйл подтвержден. Спасибо.',
      errorMessage: 'Извините, произошла ошибка. Мы не можем подтвердить ваш е-мэйл.'
    },
    changePassword: {
      title: 'Восстановление пароля',
      signinLink: 'Вернуться на страницу входа',
      emailField: 'Ваш е-мэйл',
      emailFieldPlaceholder: 'Введите ваш е-мэйл',
      submitEmail: 'Отправить',
      submitPassword: 'Изменить пароль',
      passwordField: 'Пароль',
      passwordFieldPlaceholder: 'Придумайте пароль',
      confirmPasswordField: 'Подтверждение пароля',
      confirmPasswordFieldPlaceholder: 'Подтвердите пароль',
      passwordTooltip:
        'Пароль должен быть не менее 8 символов, содержать как минимум 1 цифру и 1 специальный символ'
    }
  },
  en: {
    validation: {
      required: 'Required field',
      invalidEmail: 'Invalid email format',
      invalidPassword: 'Invalid password format',
      invalidName: 'Invalid username format',
      invalidPasswordConfirmation: 'Passwords should match'
    },
    navigation: {
      homepage: 'home',
      catalog: 'catalog',
      signin: 'Sign in',
      signup: 'Sign up',
      signout: 'Sign out',
      ruLang: 'Rus',
      engLang: 'Eng'
    },
    authErrors: {
      103: 'Account is not activated',
      102: 'Authorization error',
      101: 'Incorrect email or password',
      105: 'Wrong data format',
      11000: 'Account already exists'
    },
    signupForm: {
      title: 'Sign up',
      firstStepTooltip: 'Personal information',
      secondStepTooltip: 'Contact information',
      thirdStepTooltip: 'Security',
      passwordTooltip:
        'Password should be no less than 8 symbols, contain at least 1 digit and one special character',
      nextButton: 'Next',
      submitButton: 'Submit',
      signinLink: 'Have an account? Sign in',
      nameField: 'Your name',
      nameFieldPlaceholder: 'Enter your name',
      emailField: 'Your email',
      emailFieldPlaceholder: 'Enter your email',
      passwordField: 'Password',
      passwordFieldPlaceholder: 'Think up a password',
      confirmPasswordField: 'Password confirmation',
      confirmPasswordFieldPlaceholder: 'Confirm password',
      signupConfirmation: 'Sign up confirmation',
      signupConfirmationMessage:
        'We have sent you an email with an activation link. Please, follow the link' +
        'to finish sign up'
    },
    signinForm: {
      title: 'Sign in',
      submitButton: 'Sign in',
      signupLink: 'Sign up',
      changePassword: 'Forgot password?',
      passwordTooltip:
        'Password should be no less than 8 symbols, contain at least 1 digit and one special character',
      emailField: 'Your email',
      emailFieldPlaceholder: 'Enter your email',
      passwordField: 'Password',
      passwordFieldPlaceholder: 'Enter your password'
    },
    emailConfirmation: {
      title: 'Email confirmation',
      loadingMessage: 'Please waith while we confirm your email.',
      successMessage: 'Email confirmed. Thank you',
      errorMessage: 'Sorry, an error occured. We cannot confirm your email.'
    },
    changePassword: {
      title: 'Restore password',
      signinLink: 'Go back to sign in',
      emailField: 'Your email',
      emailFieldPlaceholder: 'Enter your email',
      submitEmail: 'Send',
      submitPassword: 'Change password',
      passwordField: 'Password',
      passwordFieldPlaceholder: 'Think up a password',
      confirmPasswordField: 'Password confirmation',
      confirmPasswordFieldPlaceholder: 'Confirm password',
      passwordTooltip:
        'Password should be no less than 8 symbols, contain at least 1 digit and one special character'
    }
  }
};

export default interfaceLanguage;
