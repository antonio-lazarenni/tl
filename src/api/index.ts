import axios, { AxiosResponse } from 'axios';

type Iso = 'en' | 'pt';

export interface Language {
  language_id: number;
  language_iso: Iso;
  progress: number;
  words_to_do: number;
  lang_id?: number;
  lang_iso?: Iso;
}

interface QAIssues {
  not_reviewed: number;
  unverified: number;
  spelling_grammar: number;
  inconsistent_placeholders: number;
  inconsistent_html: number;
  different_number_of_urls: number;
  different_urls: number;
  leading_whitespace: number;
  trailing_whitespace: number;
  different_number_of_email_address: number;
  different_email_address: number;
  different_brackets: number;
  different_numbers: number;
  double_space: number;
  special_placeholder: number;
}

interface Statistics {
  progress_total: number;
  keys_total: number;
  team: number;
  base_words: number;
  qa_issues_total: number;
  qa_issues: QAIssues;
  languages: Language[];
}

export interface Project {
  project_id: string;
  name: string;
  statistics: Statistics;
}

interface ApiResponse<T> {
  items: T[];
}

const api = 'http://localhost:3002';

export function fetchProjects(): Promise<AxiosResponse<ApiResponse<Project>>> {
  return axios.get<ApiResponse<Project>>(`${api}/projects`);
}

export function fetchProject(id: number) {
  return axios.get(`${api}/projects/${id}`);
}

export function fetchSysLanguages() {
  return axios.get(`${api}/languages`);
}

export interface PostLanguagesParameters {
  projectId: string;
  langs: Partial<Language>[];
}

export function postLanguages({
  projectId,
  langs
}: PostLanguagesParameters): Promise<AxiosResponse<ApiResponse<Language>>> {
  return axios.post<ApiResponse<Language>>(`${api}/projects/${projectId}/languages`, langs);
}

export interface DeleteLanguagesParameters {
  projectId: string;
  langId: number;
}

export function deleteLanguage({ projectId, langId }: DeleteLanguagesParameters) {
  return axios.delete(`${api}/projects/${projectId}/languages/${langId}`);
}
