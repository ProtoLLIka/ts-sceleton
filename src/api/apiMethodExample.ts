import axios, { AxiosResponse } from 'axios';

import api from '@utils/api';

const apiMethodExample = async (id: number): Promise<AxiosResponse<any[]>> => {
  const data = await api.get<any[]>(`/some/path/${id}`);

  return data;
};

export default apiMethodExample;
