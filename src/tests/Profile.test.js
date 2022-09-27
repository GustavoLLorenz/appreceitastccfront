import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Verifica funcionalidades da página de Profile', () => {
  it('testa se a tela Profile possui todos os botôes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const profileEmail = screen.getByTestId(/profile-email/i);
    expect(profileEmail).toBeInTheDocument();

    const DoneButton = screen.getByTestId('profile-done-btn');
    expect(DoneButton).toBeInTheDocument();

    const FavoriteButton = screen.getByTestId('profile-favorite-btn');
    expect(FavoriteButton).toBeInTheDocument();

    const LogoutButton = screen.getByTestId('profile-logout-btn');
    expect(LogoutButton).toBeInTheDocument();

    userEvent.click(DoneButton);
    expect(history.location.pathname).toBe('/done-recipes');
  });

  it('Verifica se o botão favorite redireciona para tela /favorite-recipes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const FavoriteButton = screen.getByTestId('profile-favorite-btn');
    expect(FavoriteButton).toBeInTheDocument();

    userEvent.click(FavoriteButton);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  it('tVerifica o botão de login', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const LogoutButton = screen.getByTestId('profile-logout-btn');
    expect(LogoutButton).toBeInTheDocument();

    userEvent.click(LogoutButton);
    expect(history.location.pathname).toBe('/');
  });

  it('testa a local storage', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const emailInput = await screen.findByTestId('email-input');
    userEvent.type(emailInput, 'teste@aaaa.com');
    const passInput = await screen.findByTestId('password-input');
    userEvent.type(passInput, '1234567');
    const loginButton = await screen.findByTestId('login-submit-btn');
    userEvent.click(loginButton);
    const profileButton = screen.getByTestId('profile-top-btn');
    userEvent.click(profileButton);

    expect(localStorage.getItem('user')).toBeTruthy();
    expect(screen.getByText('teste@aaaa.com')).toBeInTheDocument();
  });
});
