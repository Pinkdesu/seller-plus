import React from 'react';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const FileButton = (props) => {
  const { onChange } = props;

  return (
    <Button
      variant="contained"
      component="label"
      startIcon={<AttachFileIcon />}
    >
      Загрузить файлы
      <input type="file" onChange={onChange} multiple hidden />
    </Button>
  );
};

export default FileButton;
