import React, { useState } from "react";
import { SearchTabWrapper, Input, SearchIcon } from "./SearchTab.styles";

const SearchTab: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <SearchTabWrapper>
      <Input
        type="text"
        placeholder="제목을 입력해주세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isFilled={value.length > 0}
      />
      <SearchIcon />
    </SearchTabWrapper>
  );
};

export default SearchTab;
