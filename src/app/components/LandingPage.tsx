import tw, { styled } from 'twin.macro';
import { TdsTypography } from '../../design-system';
import { reactBasicsRouteDefinitions } from '../AppRoutes';
import 'styled-components/macro';

const InfoBanner = () => (
  <div tw='rounded p-2 bg-blue-100'>
    <span>
      The routes below must be registered in the .NET controllers before they
      can be accessed from the Trail website.
    </span>
  </div>
);

type LinkItemProps = {
  name: string;
  path: string;
};

const LinkItem = ({ name, path }: LinkItemProps) => (
  <a
    href={path}
    tw='(flex rounded p-2 hover:(bg-grey-700 bg-opacity-10) cursor-pointer)!'
  >
    <div tw='text-blue-600 hover:(underline)'>{name}</div>
  </a>
);

type SectionProps = {
  name: string;
  children: React.ReactNode;
  isDev?: boolean;
};

const StyledSection = styled.div<{ isDev: boolean }>`
  ${() => tw`rounded bg-trailgrey-50 p-4 border border-border-1`};
  ${({ isDev }) => isDev && tw`bg-green-50`};
`;

const Section = ({ name, children, isDev = false }: SectionProps) => {
  return (
    <StyledSection isDev={isDev}>
      <TdsTypography variant='h4' gutter='bottom-only'>
        {name}
      </TdsTypography>
      <div tw='divide-y divide-border-1'>{children}</div>
    </StyledSection>
  );
};

const SiteMap = () => {
  const tutorialRoutes = reactBasicsRouteDefinitions.map((route) => (
    <LinkItem key={route.path} name={route.name} path={`${route.path}`} />
  ));

  return (
    <div tw='space-y-3'>
      <Section name='Tutorials' isDev>
        {tutorialRoutes}
      </Section>
      {/* <div tw='my-5! border-t border-border-1' /> */}
    </div>
  );
};

export const LandingPage = () => {
  return (
    <div tw='flex justify-center flex-col max-w-2xl m-auto gap-8 p-4'>
      <TdsTypography variant='h1'>Trail Front End Workshop</TdsTypography>
      <SiteMap />
    </div>
  );
};
