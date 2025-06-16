import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import {
  SearchBarWrapper,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchGroup,
  Divider
} from './style';

const { RangePicker } = DatePicker;

const SearchBar = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

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
          <RangePicker
            value={dateRange}
            onChange={handleDateChange}
            format="DD/MM/YYYY"
            disabledDate={(current) => current && current < dayjs().startOf('day')}
            placeholder={['Check-in', 'Check-out']}
            style={{ border: 'none', padding: 0, width: '100%' }}
            allowClear
            showArrow={false}
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