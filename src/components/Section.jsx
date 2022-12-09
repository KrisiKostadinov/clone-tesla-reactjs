import React from "react";
import styled from "styled-components";

const Section = (props) => {
  return (
    <Wrapper
      bgImage={props.bgImage}
      accessoriesSection={props.accessoriesSection}
    >
      <Items>
        <H2 accessoriesSection={props.accessoriesSection}>{props.title}</H2>
        <p>{props.subtitle}</p>
      </Items>
      {props.accessoriesSection && <CustomImg src={props.bgImage} alt={props.title} />}
      <Buttons>
        <LeftButton>{props.leftButton}</LeftButton>
        {props.rightButton && <RightButton>{props.rightButton}</RightButton>}
      </Buttons>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) =>
    props.accessoriesSection == undefined ? props.bgImage : ""});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Items = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => (props.accessoriesSection ? "40px" : "32px")};
`;

const LeftButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 0;
  background: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  width: 300px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: ${(props) => props.theme.colors.secondary};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  height: 30vh;
`;

const CustomImg = styled.img`
  max-width: 300px;
`;
