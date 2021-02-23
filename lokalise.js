const { LokaliseApi } = require('@lokalise/node-api');

const apiKey = '5e0bf8937771793bcfc9ee82901c26c34b5a61ed';
const projectId = '39694302603177f252c631.01909717';

const lokaliseApi = new LokaliseApi({ apiKey });

const getProjects = async () => {
  const res = await lokaliseApi.projects.list();

  return res;
};

const getProject = async id => {
  const res = await lokaliseApi.projects.get(id);

  return res;
};

const getLokaliseKeysList = async (id = null) => {
  const res = await lokaliseApi.keys.list({
    project_id: id ? id : projectId,
    include_translations: 1,
    limit: 5000
  });

  return res;
};

const getLokaliseSysLanguageList = async () => {
  try {
    const res = await lokaliseApi.languages.system_languages({
      page: 1,
      limit: 666
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getLokaliseLanguageList = async (id = null) => {
  const res = await lokaliseApi.languages.list({
    project_id: id ? id : projectId
  });

  return res;
};

const addLokaliseLanguage = async (project_id, langs) => {
  try {
    const res = await lokaliseApi.languages.create(langs, { project_id });

    if (res.errors.length) {
      throw new Error(res.errors);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const removeLokaliseLanguage = async (project_id, lang_id) => {
  try {
    const res = await lokaliseApi.languages.delete(lang_id, { project_id });

    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjects,
  getProject,
  getLokaliseKeysList,
  getLokaliseLanguageList,
  getLokaliseSysLanguageList,
  addLokaliseLanguage,
  removeLokaliseLanguage
};
