import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import {
  StyledUserDetailsContainer,
  StyledBackButton,
} from './StyledComponets';
import { isEmptyObject } from '../../utils';

const UserDetailsPage = () => {
  const navigate = useNavigate();
  
  const charcterInfo = useSelector(
    (state) => state.character.selectedCharacter,
  );

  useEffect(() => {
    if (isEmptyObject(charcterInfo)) {
      navigate('/');
    }
  }, [charcterInfo]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title> {`${charcterInfo?.name} | Lord of rings`}</title>
      </Helmet>
      <StyledUserDetailsContainer>
        <Typography variant="h4" gutterBottom>
          User Details
        </Typography>

        <div>
          <Typography variant="h6" gutterBottom>
            Name: {charcterInfo?.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            WikiUrl: {charcterInfo?.wikiUrl}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Race: {charcterInfo?.race}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Gender: {charcterInfo?.gender}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Height: {charcterInfo?.height}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hair: {charcterInfo?.hair}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Birth: {charcterInfo?.birth}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Spouse: {charcterInfo?.spouse}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Death: {charcterInfo?.death}
          </Typography>
        </div>

        <StyledBackButton
          variant="contained"
          color="primary"
          onClick={handleBackClick}
        >
          Back
        </StyledBackButton>
      </StyledUserDetailsContainer>
    </>
  );
};

export default UserDetailsPage;
