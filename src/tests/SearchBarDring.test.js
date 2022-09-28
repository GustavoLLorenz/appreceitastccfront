import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import ingredientDrinkMock from './Mocks/IngredientDrinkMock';

describe('Verifica o componente Footer', () => {
  test('Verifica o Search Drink', () => {
    renderWithRouter(<App />);

    // Tela Login
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(email, 'xablau@xablau.com');
    userEvent.type(password, '12345678');

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    // Search

    const buttonDrink = screen.getByTestId('drinks-bottom-btn');
    expect(buttonDrink).toBeInTheDocument();
    userEvent.click(buttonDrink);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.textContent).toBe('Drinks');

    const searchTop = screen.getByTestId('search-top-btn');
    expect(searchTop).toBeInTheDocument();
    userEvent.click(searchTop);

    const inputSearch = screen.getByTestId('search-input');
    const ingredientSearch = screen.getByTestId('ingredient-search-radio');
    // const nameSearch = screen.getByTestId('name-search-radio');
    // const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
    // const buttonSearch = screen.getByTestId('exec-search-btn');

    // Busca por ingredientes

    global.fetch = jest.fn(async () => ({
      json: async () => ingredientDrinkMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'Gin');
    expect(inputSearch).toHaveValue('Gin');

    expect(ingredientSearch).toBeInTheDocument();
    userEvent.click(ingredientSearch);
    // userEvent.click(buttonSearch);

    // const apiIngredientDrink = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

    // (ingredientDrinkMock.meals).map(({ strDrink }) => async () => {
    //   const element = await screen.findByText(strDrink);
    //   expect(element).toBeInTheDocument();
    // });
    // expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(global.fetch).toHaveBeenCalledWith(apiIngredientDrink);
  });
});

// Falta criar as verifições para os Drinks, já foi criado os mocks.
// const buttonDrink = screen.getByTestId('drinks-bottom-btn');
// expect(buttonDrink).toBeInTheDocument();

// const apiNameDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=milk';
// cosnt apiLetterDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

// Faltar verificar as rotas Meals e Drinks

// Testando a Page Profile

// const profile = screen.getByTestId('profile-top-btn');
// expect(profile).toBeInTheDocument();
// userEvent.click(profile);

// const titleProfile = screen.getByRole('heading', { name: /Profile/i, value: 1 });
// expect(titleProfile.textContent).toBe('Profile');

// não sai da pagina do profile, pois falta o button para retorna a pagina principal;
