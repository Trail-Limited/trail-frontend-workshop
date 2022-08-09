import { TutorialContainer } from '../../app/components/TutorialContainer';
import { TutorialOneExercise } from './TutorialOneExercise';
import { BasicCounterSolution as TutorialOneSolution } from './TutorialOneSolution';

export const BasicCounterTutorial = () => {
  return (
    <TutorialContainer
      title='Tutorial 1: Basic Counter'
      solution={<TutorialOneSolution />}
      exercise={<TutorialOneExercise />}
    ></TutorialContainer>
  );
};
