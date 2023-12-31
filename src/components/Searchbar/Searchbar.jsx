import React, { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeInput = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const trimQuery = query.trim();

    if (trimQuery === '') {
      Notiflix.Notify.failure('Поле ввода пустое');
      return;
    }

    onSubmit(trimQuery.toLowerCase());
    setQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch size={24} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="query"
          value={query}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeInput}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
