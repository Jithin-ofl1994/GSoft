import http from '../http-common';

const getAll = () => http.get('/character');

const CharacterService = {
  getAll,
};

export default CharacterService;
