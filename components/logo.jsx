import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(10deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src="/images/dog.jpg" alt="logo" width={20} height={20} />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="'Space Mono', monospace"
            ml={3}
          >
            potifar
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
