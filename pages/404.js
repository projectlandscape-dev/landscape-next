import dynamic from "next/dynamic";
const Section = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Section)
);
const Container = dynamic(() =>
  import("../components/layoutComponents").then((module) => module.Container)
);
const LayoutJs = dynamic(()=> import("../components/layoutJs"));
const Seo = dynamic(()=>import("../components/seo"))

export default function Custom404() {
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
