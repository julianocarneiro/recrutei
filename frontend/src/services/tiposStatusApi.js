import axios from 'axios';

const resource = 'tipo-status';

const tiposStatusApi = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem('token'))}
});

export const _all = () => {
    return tiposStatusApi.get(`/${resource}`);
}

export const _find = (id) => {
    return tiposStatusApi.get(`/${resource}/${id}`)
}

export const _create = (data) => {
    return tiposStatusApi.post(`/${resource}`, data)
}

export const _delete = (id) => {
    return tiposStatusApi.delete(`/${resource}/${id}`)
}

export const _update = (id, data) => {
    return tiposStatusApi.put(`/${resource}/${id}`, data)
}

export default {
    _all,
    _find,
    _create,
    _delete,
    _update
}