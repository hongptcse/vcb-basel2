import * as request from '~/utils/request';

export const getStaff = async (q, type = 'less') => {
  try {
    const res = await request.get('dataStaff', {
      params: {
        q,
        type,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
