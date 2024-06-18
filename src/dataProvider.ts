// antcarDataProvider.ts

import axios from 'axios'
import { CreateParams, DataProvider, DeleteManyParams, DeleteParams, GetManyParams, GetManyReferenceParams, GetOneParams, ListParams, UpdateManyParams, UpdateParams } from 'react-admin'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_SIMPLE_REST_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const dataprovider: DataProvider = {
  getList: async (resource, params: ListParams) => {
    const { data } = await httpClient.get(`/${resource}`, { params: params.filter });
    return {
      data: data.items,
      total: data.totalCount,
    };
  },

  getOne: async (resource, params: GetOneParams) => {
    const { data } = await httpClient.get(`/${resource}/${params.id}`);
    return { data };
  },

  getMany: async (resource, params: GetManyParams) => {
    const { data } = await httpClient.get(`/${resource}`, { params: { id: params.ids } });
    return { data: data.items };
  },

  getManyReference: async (resource, params: GetManyReferenceParams) => {
    const { data } = await httpClient.get(`/${resource}`, { params: { ...params.filter, [params.target]: params.id } });
    return { data: data.items, total: data.totalCount };
  },

  update: async (resource, params: UpdateParams) => {
    const { data } = await httpClient.put(`/${resource}/${params.id}`, params.data);
    return { data };
  },

  updateMany: async (resource, params: UpdateManyParams) => {
    for (const id of params.ids) {
      await httpClient.put(`/${resource}/${id}`, params.data);
    }
    return { data: params.ids };
  },

  create: async (resource, params: CreateParams) => {
    const { data } = await httpClient.post(`/${resource}`, params.data);
    return { data };
  },

  delete: async (resource, params: DeleteParams) => {
    await httpClient.delete(`/${resource}/${params.id}`);
    return { data: params.previousData };
  },

  deleteMany: async (resource, params: DeleteManyParams) => {
    for (const id of params.ids) {
      await httpClient.delete(`/${resource}/${id}`);
    }
    return { data: params.previousData };
  },
};

export default dataprovider;