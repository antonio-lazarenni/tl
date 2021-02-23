const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

const {
  addLokaliseLanguage,
  getProjects,
  getProject,
  getLokaliseLanguageList,
  getLokaliseSysLanguageList,
  removeLokaliseLanguage
} = require('./lokalise');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/projects', async (req, res) => {
  const data = await getProjects();
  res.send(data);
});

app.get('/projects/:projectId', async (req, res) => {
  const { projectId } = req.params;
  const data = await getProject(projectId);

  res.send(data);
});

app.get('/languages', async (req, res) => {
  const data = await getLokaliseSysLanguageList();

  res.send(data);
});

app.get('/projects/:projectId/languages', async (req, res) => {
  const { projectId } = req.params;
  const data = await getLokaliseLanguageList(projectId);

  res.send(data);
});

app.post('/projects/:projectId/languages', async (req, res) => {
  const { projectId } = req.params;

  const data = await addLokaliseLanguage(projectId, req.body);

  res.send(data);
});

app.delete('/projects/:projectId/languages/:langId', async (req, res) => {
  const { projectId, langId } = req.params;

  const data = await removeLokaliseLanguage(projectId, langId);

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
