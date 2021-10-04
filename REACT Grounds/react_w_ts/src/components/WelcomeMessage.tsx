import { Box } from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface welcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({ position, country }: welcomeMessageProps) => {
  const {
    authInfo: { username },
  } = useContext(AuthContext);

  return (
    <Box mb={1}>
      Welcome {username} - {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
