import http from '../http-common';

const getAll = (filter) => http.get(`/character?${filter}`);

const getById = (id) => http.get(`/character/${id}`);

const CharacterService = {
  getAll,
  getById,
};

export default CharacterService;
