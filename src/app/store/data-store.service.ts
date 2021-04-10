import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStoreService {
  path = 'assets/images/img-skill/';
  skills: any[] = [
    {
      type: 'Language',
      name: 'Python',
      url: 'python.png'
    },
    {
      type: 'Language',
      name: 'Java',
      url: 'pngegg.png'
    },
    {
      type: 'server',
      name: 'Node JS',
      url: 'nodejs.png'
    },
    {
      type: 'server',
      name: 'PHP',
      url: 'php.png'
    },
    {
      type: 'Front',
      name: 'CSS',
      url: 'css.png'
    },
    {
      type: 'Front',
      name: 'Html',
      url: 'html.png'
    },
    {
      type: 'Front',
      name: 'Angular',
      url: 'angular.png'
    },
    {
      type: 'Front',
      name: 'Javascript',
      url: 'javascript.png'
    },
    {
      type: 'Database',
      name: 'SQL Server',
      url: 'sql-server.png'
    },
    {
      type: 'Database',
      name: 'Postgre',
      url: 'postgre.png'
    },
    {
      type: 'Tools',
      name: 'Pycharm',
      url: 'pycharm.png'
    },
    {
      type: 'Tools',
      name: 'Visual Studio code',
      url: 'vscode.png'
    },
    {
      type: 'Tools',
      name: 'Sublime Text',
      url: 'sublime.png'
    },
    {
      type: 'other',
      name: 'Github',
      url: 'github.png'
    },
    {
      type: 'other',
      name: 'Scikit-learn',
      url: 'scikit-learn.png'
    },
    {
      type: 'other',
      name: 'Tensorflow',
      url: 'tensorflow.png'
    },
  ];
  project: any[] = [
    {
      url: 'assets/images/img_project/amazon-clone.PNG',
      git: 'https://github.com/giaphien363/amazon-clone',
      link_demo: 'https://clone-2e34a.web.app/',
      title: 'AMAZON-CLONE',
      use: 'Angular, Firebase, ...'
    },
    {
      url: 'assets/images/img_project/img_flask_web.PNG',
      git: 'https://github.com/hiencoday363/python_flask_web',
      link_demo: null,
      title: 'WEBSITE USE FLASK PYTHON',
      use: 'Flask, Postgre, ...'
    },
    {
      url: 'assets/images/img_project/img-django-web.PNG',
      git: 'https://github.com/hiencoday363/django_web_01',
      link_demo: 'https://learn-web-django01.herokuapp.com/',
      title: 'WEBSITE USE DJANGO PYTHON',
      use: 'Django, Postgre, ...'
    },
    {
      url: 'assets/images/img_project/img_nodejs_web.PNG',
      git: 'https://github.com/Allyday/mlem_mlem_sem_one',
      link_demo: null,
      title: 'WEBSITE USING NODE JS',
      use: 'Nodejs, SQL server, ...'
    },
  ];
  baseurl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
  }

  fetch_data(endpoint){
    this.http.get(this.baseurl + endpoint)
      .subscribe((data: []) => {
        console.log(typeof data);
        return data;
      });
  }

  get_path() {
    return this.path;
  }

  get_skills() {
    return this.skills;
  }

  get_projects() {
    return this.project;
  }
}
