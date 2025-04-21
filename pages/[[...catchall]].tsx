import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default function CatchallPage() {
  return <PlasmicComponent component="YourRootComponent" />;
}

// Critical: Disable ISR/SSG for Cloudflare Pages + static export
export const getStaticProps = async () => {
  return { props: {} }; // Plain static props
};
