import { TdsButton, TdsTypography } from '../../design-system';
import 'twin.macro';
import 'styled-components/macro';
import { NavBar } from './NavBar';
import { JSXElementConstructor, ReactElement, FunctionComponent } from 'react';
import tw from 'twin.macro';
import { TdsLinkButton } from '../../design-system/components/buttons/linkButton/LinkButton';
import { TdsLink } from '../../design-system/components/link/Link';

type TutorialContainerProps = {
  title: string;
  solution: ReactElement;
  exercise: ReactElement;
};

type CanvasProps = {
  title: string;
  children: ReactElement;
  type: 'exercise' | 'solution';
};

const StyledContainer = tw.div`flex flex-col max-w-3xl m-auto`;
const StyledCanvas = tw.div`rounded bg-trailgrey-50 w-full p-4 shadow-lg`;

const ExerciseHint: FunctionComponent<{ sourceFile: string }> = ({
  sourceFile,
}) => {
  return <div></div>;
};

const Canvas = ({ title, children, type }: CanvasProps) => {
  const isExercise = type === 'exercise';
  const isSolution = type === 'solution';
  const isEmpty =
    (children.type as React.FunctionComponent)({})?.type.toString() ===
    'Symbol(react.fragment)';
  const sourceFile = (children as any)._source.fileName;
  const vscodeLink = `vscode://file/${sourceFile}`;
  return (
    <StyledCanvas>
      <div tw='flex items-center space-x-4'>
        <TdsTypography variant='h4'>{title}</TdsTypography>
        {isSolution && <TdsLink url={vscodeLink}>View source</TdsLink>}
      </div>
      <div tw='bg-white w-full border p-4 border-border-1 min-h-[12rem]'>
        {!isExercise || !isEmpty ? (
          children
        ) : (
          <ExerciseHint sourceFile={sourceFile} />
        )}
      </div>
    </StyledCanvas>
  );
};

export const TutorialContainer = ({
  title,
  solution,
  exercise,
}: TutorialContainerProps) => {
  return (
    <>
      <NavBar />
      <StyledContainer tw='flex flex-col max-w-3xl m-auto space-y-6'>
        <TdsTypography variant='h1'>{title}</TdsTypography>

        <Canvas type='solution' title='Solution'>
          {solution}
        </Canvas>
        <div tw='border-b border-b-border-1'></div>
        <Canvas type='exercise' title='Try It Yourself'>
          {exercise}
        </Canvas>
      </StyledContainer>
    </>
  );
};
