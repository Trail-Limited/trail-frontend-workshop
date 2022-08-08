import { ReactNode } from "react";
import tw from "twin.macro";
import { TdsTypography } from "../../../styles/typography/Typography";

type ResultsProps = {
  data: any;
};

const StyledContainer = tw.div`
flex w-full
border border-border-1 rounded-md`;

const StyledForm = tw.form`flex-1 p-4 border-r border-border-1`;
const StyledResults = tw.div`flex-1 p-4`;
const StyledActions = tw.div`flex mt-2 space-x-2`;

const Results = ({ data }: ResultsProps) => (
  <StyledResults>
    <TdsTypography variant="h7" gutter="bottom-only">
      Results
    </TdsTypography>
    <TdsTypography component="code" variant="body2">
      {data}
    </TdsTypography>
  </StyledResults>
);

const Actions: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => <StyledActions>{children}</StyledActions>;

export const FormExample = {
  Container: StyledContainer,
  Form: StyledForm,
  Results,
  Actions,
};
