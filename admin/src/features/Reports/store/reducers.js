import { getPickerDate } from '~/utils/getPickerDate';

export const setReport = (_, payload) => {
  const { report } = payload.data;

  return report;
};

export const setPeriod = (_, payload) => {
  const { from, to } = payload.data;

  return {
    from: getPickerDate(from),
    to: getPickerDate(to),
  };
};
