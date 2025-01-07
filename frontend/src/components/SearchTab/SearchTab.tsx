// SearchTab.tsx
import React, { useState } from "react";
import { SearchTabWrapper, Input, SearchIcon } from "./SearchTab.styles";

interface SearchTabProps {
  onSearch: (value: string) => void; // onSearch 콜백 함수 타입 정의
}

const SearchTab: React.FC<SearchTabProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value.trim());
    }
  };

  const handleSearchClick = () => {
    onSearch(value.trim());
  };

  return (
    <SearchTabWrapper>
      <Input
        type="text"
        placeholder="상품명을 입력해주세요."
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        isFilled={value.length > 0}
      />
      <SearchIcon onClick={handleSearchClick} style={{ cursor: "pointer" }} />
    </SearchTabWrapper>
  );
};

export default SearchTab;
