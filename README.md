# The see for the Blog project

This project is an application skeleton for your blog Web app.  It uses the Bower package manager to handle front-end
dependencies, Node's package manager to handle back-end dependencies, with AngularJS/NodeJS handling app logic.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will complicate your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use blog-seed

- Create an empty repository at GitHub (maybe blog)
- Open up your terminal
- Run the following commands

```
cd /tmp # make sure this is a directory that exists
git clone --bare git@github.com:DojoDevCamp/blog-seed.git
cd blog-seed.git
git push --mirror git@github.com:[GitHubUsername]/blog.git # this will be different for you
cd ..
rm -rf blog-seed.git
```

### Running the app during development

* Make sure that NodeJS is installed
* From the CLI, in the project directory, run `npm install`

You can run the NodeJS server in two ways:

* Run `server/server.js` from the CLI
* Inside PyCharm, set up a NodeJS configuration

Then navigate your browser to `http://localhost:<port>/` to see the app running in
your browser.

### Running the app in production (Heroku)

* Create a Heroku account
* Create a MongoLab account
** In the server/server.js, replace <dbuser> and <dbpassword> with the MongoLab username and password, respectively
* Create a Heroku app from the CLI (under the project directory)
** heroku create [NAME]
* git push heroku master

## Directory Layout
    
    developer/              --> Should eventually house testing scripts/framework (e.g. Karma)
        .gitkeep            --> Allows this folder to be pushed to Git
    public/
        css/
            app.css         --> Project specific styles loaded after bootstrap
        img/                --> Will eventually hold static images
            .gitkeep        --> Allows this folder to be pushed to Git
        js/
            app.js          --> AngularJS application configuration
            controllers.js  --> AngularJS controller definitions
            directives.js   --> AngularJS directive definitions
            filters.js      --> AngularJS filter definitions
            services.js     --> AngularJS service definitions
        partials/
            addPost.jade    --> Exposes form for adding a post
            deletePost.jade --> Exposes a simple form that allows a user to cancel delete request
            editPost.jade   --> Similar form as addPost, filled out with two-way bound post data
            index.jade      --> Shows all current posts, default partial page for home page
            readPost.jade   --> Shows all the details of a current post
        index.jade          --> Loads ng-view and necessary JavaScript files
        layout.jade         --> This is the core layout for pages in this application
    server/
        models/
            post.js         --> Houses the mongoose Post model persisted to the database
        routes/
            api.js          --> All REST-related routes are defined here, pulls in the Post model
            index.js        --> All non-REST-related routes are defined here
        server.js           --> NodeJS express framework initialized here with configuration, creates and starts the Web server
    .bowerrc                --> Configures bower to install components under public/lib
    .gitignore              --> Artifacts we do not want in our git repositories, switched based on where we are pushing changes
    bower.json              --> Declares front-end dependencies, like angular and bootstrap
    package.json            --> Declares dev and prod dependencies, for prod it will install bower
    Procfile                --> File required by Heroku to launch your application
    README.md               --> This file


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.
If all else fails, please contact one of the instructors or your mentor
