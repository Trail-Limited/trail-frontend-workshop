import { TdsTypography } from '../../design-system';
import 'twin.macro';
import 'styled-components/macro';
import { NavBar } from './NavBar';
import { ReactElement, FunctionComponent } from 'react';
import tw from 'twin.macro';
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
  return (
    <div tw='flex justify-center items-center absolute inset-0 p-10'>
      <TdsTypography variant='subtitle1' tw='text-trailgrey-600'>
        Open the <TdsLink url={sourceFile}>exercise file </TdsLink>
        in VS Code and try to implement the example above. Your changes will be
        rendered here.
      </TdsTypography>
    </div>
  );
};

const Canvas = ({ title, children, type }: CanvasProps) => {
  const isExercise = type === 'exercise';
  const isSolution = type === 'solution';
  const isEmpty =
    (children.type as React.FunctionComponent)({})?.type.toString() ===
    'Symbol(react.fragment)';
  const sourceFile = (children as any)._source.fileName;
  const tutorialLink = `vscode://file/${sourceFile}`;
  const solutionLink = tutorialLink.replace('.tsx', 'Solution.tsx');
  const exerciseLink = tutorialLink.replace('.tsx', 'Exercise.tsx');

  return (
    <StyledCanvas>
      <div tw='flex items-center space-x-4'>
        <TdsTypography variant='h4'>{title}</TdsTypography>
        {!isEmpty && (
          <TdsLink url={isSolution ? solutionLink : exerciseLink}>
            View source
          </TdsLink>
        )}
      </div>
      <div tw='bg-white w-full border p-4 border-border-1 min-h-[12rem] relative'>
        {!isExercise || !isEmpty ? (
          children
        ) : (
          <ExerciseHint sourceFile={exerciseLink} />
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
