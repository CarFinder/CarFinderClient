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
    searchErrors: {
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
    carFilters: {
      [key: string]: string;
    };
    carFilterResults: {
      [key: string]: string;
    };
    selectInputs: {
      [key: string]: string;
    };
    userProfile: {
      [key: string]: string;
    };
    savedSearch: {
      [key: string]: string;
    };
    modal: {
      [key: string]: {
        [key: string]: string;
      };
    };
    liquidity: {
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
    searchErrors: {
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
    carFilters: {
      [key: string]: string;
    };
    carFilterResults: {
      [key: string]: string;
    };
    selectInputs: {
      [key: string]: string;
    };
    userProfile: {
      [key: string]: string;
    };
    savedSearch: {
      [key: string]: string;
    };
    modal: {
      [key: string]: {
        [key: string]: string;
      };
    };
    liquidity: {
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
      invalidPasswordConfirmation: 'Пароли должны совпадать',
      invalidYear: 'Неверный формат года',
      invalidParameters: 'Неверный формат введенных данных'
    },
    navigation: {
      homepage: 'домашняя',
      catalog: 'каталог',
      signin: 'вход',
      signup: 'регистрация',
      signout: 'Выход',
      profile: 'Профиль',
      ruLang: 'Рус',
      engLang: 'Англ'
    },
    authErrors: {
      103: 'Аккаунт не активирован',
      102: 'Ошибка авторизации',
      101: 'Неверный е-мэйл или пароль',
      105: 'Неверный формат введенных данных',
      11000: 'Такой аккаунт уже существует'
    },
    searchErrors: {
      serverUnavailable:
        'В данный момент сервер не доступен. Обновите страницу или попытайтесь позже'
    },
    signupForm: {
      title: 'Регистрация',
      firstStepTooltip: 'Личная информация',
      secondStepTooltip: 'Контактная информация',
      thirdStepTooltip: 'Безопасность',
      fourthStepTooltip: 'Подтверждение',
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
    },
    carFilters: {
      maker: 'Марка',
      model: 'Модель',
      bodyType: 'Тип кузова',
      yearFrom: 'Год выпуска от',
      yearTo: 'Год выпуска до',
      priceFrom: 'Цена от, USD',
      priceTo: 'Цена до, USD',
      kmFrom: 'Пробег от, км.',
      kmTo: 'Пробег до, км.',
      saveFilters: 'Сохранить',
      searchFilters: 'Поиск',
      adsPerPage: 'Объявлений на странице',
      price: 'Цена'
    },
    carFilterResults: {
      year: 'Год выпуска',
      price: 'Цена',
      kms: 'Пробег',
      chooseFilters: 'Пожалуйста выберите параметры поиска',
      nothingFound: 'По вашему запросу ничего не найдено',
      previewTitle: 'Подробная информация',
      adSource: 'Источник'
    },
    selectInputs: {
      Newest: 'Сначала новые',
      Oldest: 'Сначала старые',
      lowestPrice: 'Сначала дешевые',
      highestPrice: 'Сначала дорогие',
      Ascending: 'По возрастанию',
      Descending: 'По убыванию'
    },
    userProfile: {
      title: 'Профиль пользователя',
      nameField: 'Ваше Имя',
      nameFieldPlaceholder: 'Введите ваше Имя',
      emailField: 'Ваш е-мэйл',
      emailFieldPlaceholder: 'Введите ваш е-мейл',
      submitButton: 'Сохранить',
      interfaceLanguage: 'Язык интерфейса',
      subscription: 'Использовать е-мейл для рассылки обновлений',
      typeError: 'Неподдерживаемый тип файла',
      changePassword: 'Сбросить пароль',
      dndHint:
        '<strong>Перетащите</strong> вашу аватарку сюда или <strong>нажмите</strong> для выбора аватара',
      dndUpdateHint:
        'Для обновления <strong>перетащите</strong> вашу аватарку сюда или <strong>нажмите</strong> для выбора аватара'
    },
    savedSearch: {
      savedFilters: 'Сохраненные фильтры',
      clearFilters: 'Очистить фильтры',
      noSavedFilters: 'У вас нет фильтров',
      seeAllFilters: 'Смотреть все',
      noAdsToDisplay: 'По запрашиваему фильтру нет объявлений',
      savedSearchResults: 'Сохраненные запросы по фильтру'
    },
    modal: {
      deleteFilters: {
        title: 'Удалить сохраненные фильтры',
        content: 'Вы уверены, что хотите удалить все сохраненные фильтры?',
        cancel: 'Отмена',
        confirm: 'Удалить все'
      }
    },
    liquidity: {
      calculator: 'Калькулятор ликвидности',
      calculate: 'Рассчитать',
      defaultMsg: 'Выберете параметры, чтобы рассчитать ликвидность',
      result: 'Количество объявлений, которые были проданы в течение месяца: ',
      averageTime: 'Среднее время продажи по объявлению, дней: ',
      total: 'Всего продано автомобилей за месяц: ',
      noResult: 'За последний месяц не было продано ни одного объявления из выбранной категории.',
      ads: 'Перейти к объявлениям'
    }
  },
  en: {
    validation: {
      required: 'Required field',
      invalidEmail: 'Invalid email format',
      invalidPassword: 'Invalid password format',
      invalidName: 'Invalid username format',
      invalidPasswordConfirmation: 'Passwords should match',
      invalidYear: 'Please fill in a valid year',
      invalidParameters: 'Invalid parameters'
    },
    navigation: {
      homepage: 'home',
      catalog: 'catalog',
      signin: 'Sign in',
      signup: 'Sign up',
      signout: 'Sign out',
      profile: 'User profile',
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
    searchErrors: {
      serverUnavailable: 'Server is currently unavailable. Please reload the page and try again.'
    },
    signupForm: {
      title: 'Sign up',
      firstStepTooltip: 'Personal information',
      secondStepTooltip: 'Contact information',
      thirdStepTooltip: 'Security',
      fourthStepTooltip: 'Confirmation',
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
      loadingMessage: 'Please wait while we are confirming your email.',
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
    },
    carFilters: {
      maker: 'Maker',
      model: 'Model',
      bodyType: 'Body Type',
      yearFrom: 'Year From',
      yearTo: 'Year To',
      priceFrom: 'Price From, USD',
      priceTo: 'Price To, USD',
      kmFrom: 'KMs From',
      kmTo: 'KMs To',
      saveFilters: 'Save',
      searchFilters: 'Search',
      chooseFilters: 'Please choose search options',
      adsPerPage: 'Ads per page',
      price: 'Price'
    },
    carFilterResults: {
      year: 'Year',
      price: 'Price',
      kms: 'Kms Ran',
      chooseFilters: 'Please choose filter options',
      nothingFound: 'Search returned no results',
      previewTitle: 'More about car',
      adSource: 'Source'
    },
    selectInputs: {
      Ascending: 'Ascending',
      Descending: 'Descending',
      lowestPrice: 'Lowest',
      highestPrice: 'Highest',
      Newest: 'Newest',
      Oldest: 'Oldest'
    },
    userProfile: {
      title: 'User profile',
      nameField: 'Your name',
      nameFieldPlaceholder: 'Enter your name',
      emailField: 'Your email',
      emailFieldPlaceholder: 'Enter your email',
      submitButton: 'Save',
      interfaceLanguage: 'Interface language',
      subscription: 'Use email for updates',
      typeError: 'Unsupported type',
      changePassword: 'Restore password',
      dndHint: '<strong>Drag</strong> your avatar here or <strong>click</strong> to browse avatar',
      dndUpdateHint:
        'For update <strong>drag</strong> your avatar here or <strong>click</strong> to browse avatar'
    },
    savedSearch: {
      savedFilters: 'Saved filters',
      clearFilters: 'Clear all filters',
      noSavedFilters: 'You have no filters saved',
      seeAllFilters: 'See all saved filters',
      noAdsToDisplay: 'There are no ads to display for this filter',
      savedSearchResults: 'Search results for'
    },
    modal: {
      deleteFilters: {
        title: 'Remove saved filters',
        content: 'Are you sure you want to remove all save filters?',
        cancel: 'Cancel',
        confirm: 'Remove all'
      }
    },
    liquidity: {
      calculator: 'Calculate Liquidity',
      calculate: 'Calculate',
      defaultMsg: 'Choose filter parameters to calculate liquidity',
      result: 'Number of cars for the chosen filter sold last month: ',
      averageTime: 'Average selling time, days: ',
      total: 'Total number of cars sold last month: ',
      noResult: 'No cars for the chosen filter were sold last month.',
      ads: 'See ads'
    }
  }
};

export default interfaceLanguage;
