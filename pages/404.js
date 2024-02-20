import LayoutJs from "../components/layoutJs";
import { Section, Container } from "../components/layoutComponents";
import Seo from "../components/seo";

function Custom404() {
  return (
    <LayoutJs>
      <Seo title="404: Not Found | Project Landscape Ltd." />
      <Section>
        <Container>
          <h1>404</h1>
        </Container>
      </Section>
    </LayoutJs>
  );
}
export default Custom404;