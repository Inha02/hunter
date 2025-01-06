import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import BotButton from "../components/BotButton/BotButton";
import mockMerchandises from "../data/mockMerchandises";
import { useNavigate } from "react-router-dom";

const categories = ["모빌리티", "냉장고", "전자제품", "책/문서", "기프티콘", "원룸/오피스텔", "기타"];
const conditions = ["미개봉 / 최상", "상태 좋음", "양호 / 보통", "상태 별로", "부품용 / 고장"];

const Sell: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [condition, setCondition] = useState<string | null>(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const handlePostSubmit = () => {
    if (!title || !category || !condition || !price || !description) {
      alert("모든 필드를 입력해주세요!");
      return;
    }

  const newPost = {
    id: mockMerchandises.length + 1,
    imageSrc: images,
    title,
    status: "available" as "available" | "reserved" | "completed", // 타입에 맞는 값 사용
    condition: condition as "best" | "good" | "average" | "bad" | "very_bad", // 타입 단언
    price,
    sellerName: "현재 사용자",
    date: new Date().toISOString().split("T")[0],
    category,
    description,
  };

    mockMerchandises.push(newPost);
    alert("게시글이 등록되었습니다!");
    navigate("/");
  };

  return (
    <SellWrapper>
      <Header />
      <FormWrapper>
        <Section>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Section>

        <Section>
            <Label>카테고리</Label>
            <RadioGroupWrapper>
                <RadioGroup options={categories} onChange={setCategory} />
            </RadioGroupWrapper>
            </Section>

            <Section>
            <Label>상태</Label>
            <RadioGroupWrapper>
                <RadioGroup options={conditions} onChange={setCondition} />
            </RadioGroupWrapper>
        </Section>

        <Section>
          <Label>판매 가격</Label>
          <Input
            type="number"
            placeholder="희망 판매가 (원)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Section>

        <Section>
          <Label>내용</Label>
          <TextArea
            placeholder="내용을 입력해주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Section>

        <Section>
          <Label>사진</Label>
          <ImageUploadWrapper>
            {images.map((image, index) => (
              <UploadedImage key={index} src={image} alt={`Uploaded ${index + 1}`} />
            ))}
            <ImageUploadButton>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              <span>+</span>
            </ImageUploadButton>
          </ImageUploadWrapper>
        </Section>
      </FormWrapper>

      <BotButton
        onPreviousClick={() => window.history.back()}
        onSubmitClick={handlePostSubmit}
        previousLabel="이전"
        submitLabel="게시글 등록"
      />
      <Footer />
    </SellWrapper>
  );
};

export default Sell;


// Styled Components
const SellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  gap: 64px;
  min-height: 100vh;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Gap between sections */
  width: 100%;
  max-width: 1600px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch; /* Ensures purple box matches the height of the content */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white}; /* White background for all sections */
`;

const Label = styled.label`
  width: 200px; /* Fixed width for the label column */
  background-color: ${({ theme }) => theme.colors.primary}; /* Primary color background */
  color: ${({ theme }) => theme.colors.white}; /* White text for labels */
  padding: 16px;
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  text-align: center; /* Center-align text inside labels */
  display: flex;
  align-items: center; /* Align text vertically */
  justify-content: center; /* Align text horizontally */
`;

const Input = styled.input`
  flex: 1; /* Make the input field take up the remaining space */
  padding: 12px 16px;
  border: none; /* Removed border */
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.typography.T5.size};
  background-color: ${({ theme }) => theme.colors.white}; /* Unified white background */
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 12px 16px;
  border: none; /* Removed border */
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-family: Pretendard;
  height: 100px;
  resize: none;
  background-color: ${({ theme }) => theme.colors.white}; /* Unified white background */
`;

const RadioGroupWrapper = styled.div`
  flex: 1;
  padding: 16px; /* Padding for spacing */
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white}; /* White background */
`;

const ImageUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const UploadedImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
`;

const ImageUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border: none; /* Removed border */
  cursor: pointer;
  span {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.primary};
  }
  input {
    display: none;
  }
`;
