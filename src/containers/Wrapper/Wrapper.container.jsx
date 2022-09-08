import React from "react";
import { Navbar, PageHeader } from "../../components";
import { WrapperContainer, Content } from "./Wrapper.styles";

const Wrapper = ({ children }) => {
  return (
    <WrapperContainer>
      <Navbar />
      <Content>
        <>
          <PageHeader
            title="Client Billing "
            caption="– A full payment solution for your business, free with {company}"
          />
          {children}
        </>
      </Content>
    </WrapperContainer>
  );
};

export default Wrapper;
