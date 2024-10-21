import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/' });

export const getEquipos = async () => await instance.get('equipos');

export const getJugadores = async () => await instance.get('jugadores');