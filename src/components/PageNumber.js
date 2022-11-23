import styled from "styled-components";
import { useState } from "react";

function PageNumber(params) {
  const { page, current } = params;
  const [isCurrent] = useState(current === page);

  return (
    <>
      <Page style={{ fontWeight: isCurrent ? 700 : 400 }}>{page}</Page>
    </>
  );
}

export default PageNumber;

const Page = styled.p`
  font-size: 20px;
  margin: 0 2px 0 2px;
`;
