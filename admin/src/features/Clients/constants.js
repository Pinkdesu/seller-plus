export const TABS = [
  {
    id: 1,
    label: 'Физические лица',
  },
  {
    id: 2,
    label: 'Компании',
  },
];

export const STYLES = (theme) => ({
  filtersWrapper: {
    display: 'flex',
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  filter: {
    flex: '0 0 350px',
  },
  tableWrapper: {
    marginTop: theme.spacing(4),
  },
});
