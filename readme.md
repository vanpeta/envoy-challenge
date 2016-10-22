# How did I create this project?



The directions state that we must use Gulp, bourbon and neat, so the first thing is creating the right dev environment for these technologies.

### Creating the developing environment

Here is the list of libraries and frameworks we will be including:

1. npm
2. Gulp
3. Browsersync
4. Gulp Sass
5. Bourbon
6. Neat

I previously had installed npm and gulp on my computer but if not, you will need to install that software beforehand.

I created a local folder to host the project called envoy-challenge.

First things first, I initialized a git repo by running git init from inside this folder and made the initial commit. Next, I logged in to my github account and created the remote repository with the same name and added as origin to the local repo.  For now on, after each commit, I push every commit online to keep a saved version of the project on my Github.

Let's start installing the tech we will need on our local repo.

##### NPM

We started by running

```bash
$ npm init
```

 inside the folder to create the package.json file, during this process you will be ask several questions, you don't have to provided those anwsers now. 

##### Gulp

Gulp is next, this will automate tasks like compiling our SASS to CSS code so browser can interpret the stylesheets.

```bash
$ npm install gulp --save-dev
```

Next is to create the Gulpfile.js file, we will add here the tasks to be automatize, define gulp and start writting the tasks.

to make sure that everything worked as intended run from the terminal:

```bash
$ gulp
```

##### SASS

Next we need to install SASS, define it in our gulpfile.js and add the task.

```bash
$ npm install gulp-sass --save-dev
```

##### Bourbon & Neat

Finally we install bourbon and neat to the project, define them on gulpfile.js and create the tasks.

```bash
$ npm install node-bourbon --save-dev
$ npm install node-neat --save-dev
```

##### BrowserSync

Lastly we add BrowserSync.

```bash
$ npm install browser-sync --save-dev
```

This is how my project is structured:



Once we have all the libraries and frameworks installed, we need to scaffolder our project, we will make sure that the file structure is aligned what we have defined on our gulpfile.js