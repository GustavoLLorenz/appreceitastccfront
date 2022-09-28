import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import Profile from '../pages/Profile';

describe('Verifica funcionalidades da página de Profile', () => {
  it('testa se a tela Profile possui todos os botôes', () => {
    // const { history } = renderWithRouter(<App />);
    // history.push('/profile');

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

    // Testando o Profile

    const profile = screen.getByTestId('profile-top-btn');
    expect(profile).toBeInTheDocument();
    userEvent.click(profile);

    const titleProfile = screen.getByRole('heading', { name: /Profile/i, value: 1 });
    expect(titleProfile.textContent).toBe('Profile');

    const profileEmail = screen.getByTestId('profile-email');
    expect(profileEmail).toBeInTheDocument();
    expect(profileEmail.textContent).toBe('xablau@xablau.com ');
    expect(localStorage.getItem('user')).toBeTruthy();
    // expect(screen.getByText('xablau@xablau.com ')).toBeInTheDocument();

    const DoneButton = screen.getByTestId('profile-done-btn');
    expect(DoneButton).toBeInTheDocument();

    const FavoriteButton = screen.getByTestId('profile-favorite-btn');
    expect(FavoriteButton).toBeInTheDocument();

    const LogoutButton = screen.getByTestId('profile-logout-btn');
    expect(LogoutButton).toBeInTheDocument();

    // Botões do Profile
    // Testando o Done Recipes
    const { history } = renderWithRouter(<Profile />);
    userEvent.click(DoneButton);
    history.push('/done-recipes');

    // Testando o Favorite Recipes
    history.push('/profile');
    userEvent.click(FavoriteButton);
    history.push('/favorite-recipes');
    expect(history.location.pathname).toBe('/favorite-recipes');

    // Testando o Logout
    history.push('/profile');
    userEvent.click(LogoutButton);
    history.push('/');
    expect(history.location.pathname).toBe('/');
  });

  // it('Verifica se o botão favorite redireciona para tela /favorite-recipes', () => {
  //   const { history } = renderWithRouter(<App />);
  //   history.push('/profile');

  //   const FavoriteButton = screen.getByTestId('profile-favorite-btn');
  //   expect(FavoriteButton).toBeInTheDocument();

  //   userEvent.click(FavoriteButton);
  //   expect(history.location.pathname).toBe('/favorite-recipes');
  // });
});
