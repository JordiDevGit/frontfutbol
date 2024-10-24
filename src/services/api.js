import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/' });

export const getEquipos = async () => await instance.get('equipos');

export const getJugadoresEquipo = async (id) => await instance.get('jugadores/' + id);

export const getEquipo = async (id) => await instance.get('equipos/' + id);