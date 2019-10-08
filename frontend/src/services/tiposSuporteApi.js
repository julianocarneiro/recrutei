import axios from 'axios';

const resource = 'tipo-suporte';

const Api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem('token'))}
});

export const _all = () => {
    return Api.get(`/${resource}`);
}

export const _find = (id) => {
    return Api.get(`/${resource}/${id}`)
}

export const _create = (data) => {
    return Api.post(`/${resource}`, data)
}

export const _delete = (id) => {
    return Api.delete(`/${resource}/${id}`)
}

export const _update = (id, data) => {
    return Api.put(`/${resource}/${id}`, data)
}

export default {
    _all,
    _find,
    _create,
    _delete,
    _update
}