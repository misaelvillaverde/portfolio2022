import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = [
  "React.js",
  "Firebase Auth",
  "Firebase Firestore",
  "Stripe",
  "CSS",
];

const Work = () => {
  return (
    <Layout title="Amazon-Clone">
      <Container>
        <Title>
          Amazon-Clone <Badge>2019</Badge>
        </Title>

        <Box my={4}>
          <Meta>Website</Meta>
          <Link href="https://clone-54946.web.app/" target="_blank">
            https://clone-54946.web.app <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          A mock Amazon website that allows users to add items to their cart,
          view their cart, and checkout.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>
        <WorkImage src="/images/amazon.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
