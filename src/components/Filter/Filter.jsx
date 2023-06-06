import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyle } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'Redux/contactsSlice.js';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <FilterStyle.FilterSubtitle>
      Find contacts by name
      <FilterStyle.FilterInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </FilterStyle.FilterSubtitle>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
