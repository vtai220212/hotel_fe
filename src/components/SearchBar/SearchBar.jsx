import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { vi } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import {
  SearchBarWrapper,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchGroup,
  Divider
} from './style';

const SearchBar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="react-datepicker__header">
      <div className="react-datepicker__current-month">
        {date.toLocaleString('vi', { month: 'long', year: 'numeric' })}
      </div>
    </div>
  );

  return (
    <SearchBarWrapper>
      <SearchContainer>
        <SearchGroup>
          <FaMapMarkerAlt className="icon" />
          <SearchInput
            type="text"
            placeholder="Chọn điểm đến hoặc khách sạn"
          />
        </SearchGroup>
        <Divider />
        <SearchGroup>
          <FaCalendarAlt className="icon" />
          <DatePicker
            selected={startDate}
            onChange={(dates) => setDateRange(dates)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable
            placeholderText="Check-in → Check-out"
            locale={vi}
            dateFormat="dd/MM/yyyy"
            monthsShown={2}
            renderCustomHeader={CustomHeader}
            showPopperArrow={false}
            className="date-picker-input"
          />
        </SearchGroup>
        <Divider />
        <SearchButton>
          <FaSearch />
          Tìm Kiếm
        </SearchButton>
      </SearchContainer>
    </SearchBarWrapper>
  );
};

export default SearchBar;