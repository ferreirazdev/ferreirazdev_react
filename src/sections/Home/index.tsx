import styled from "styled-components";

import { Navbar } from "../../components/Navbar";
import { Resume } from "../../components/Resume";

export function Home() {
    return (
        <>
            <Banner>
                <Navbar />
                <Resume />
            </Banner>
        </>
    )
}

const Banner = styled.div`
  height: 80vh;
  padding: 0 250px;
  width: 100%;
  @media (max-width: 640px) {
    height: 100vh;
    padding: 0;
    padding-bottom: 5rem;
  }
`;