import React from 'react';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';

const AddButton = (props) => {
  const { onClick, text } = props;

  return (
    <Button
      variant="contained"
      component="label"
      color="primary"
      onClick={onClick}
      startIcon={<PostAddIcon />}
    >
      {text}
    </Button>
  );
};

export default AddButton;
