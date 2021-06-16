export const ROWS_PER_PAGE = 20;

export const ADD_PAGE_STYLE = (theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  formWrapper: {
    padding: theme.spacing(5, 6),
    backgroundColor: '#ffffff',
  },
  defaultWrapper: {
    padding: 0,
    backgroundColor: '#ffffff',
  },
  pageHeaderWrapper: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(2, 6),
  },
  pageHeader: {
    fontSize: '24px',
    fontWeight: 700,
  },
  formFieldsSide: {
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: 50,
  },
  fieldsWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1 1 50%',
    gap: 40,
  },
  textAreaWrapper: {
    marginTop: theme.spacing(4),
  },
  formBottomSide: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    gap: 20,
  },
  infoWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    width: '100%',
  },
  infoList: {
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: theme.spacing(2),
  },
  infoItem: {
    gap: theme.spacing(2),
  },
  infoTextField: {
    width: 300,
  },
});
