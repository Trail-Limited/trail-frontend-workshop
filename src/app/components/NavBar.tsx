import 'twin.macro';
import 'styled-components/macro';
import { TdsButton, TdsIconArrowLeft } from '../../design-system';
import { useNavigate } from 'react-router';

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav tw='w-full p-4'>
      <TdsButton
        onPress={() => navigate('/', { replace: true })}
        LeftIcon={(props) => <TdsIconArrowLeft {...props} />}
      >
        Back
      </TdsButton>
    </nav>
  );
};
