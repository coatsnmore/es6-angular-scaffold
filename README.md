# Reference Scaffold For:

* gulp
* es6 / babelify
* bower / browserify
* angular / templateCache
* eslint
* skeleton.css grid layout

# Setup

#### homebrew package manager (optional, but nice to have for osx)


    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


#### install npm/git


    brew install npm
    brew install git

#### install gulp/bower


    npm install -g gulp
    npm install -g bower

#### clone git repo


    git clone https://github.com/coatsnmore/es6-angular-scaffold.git
    cd es6-angular-scaffold

#### install dependencies


    npm install
    bower install

#### open up codez (assumes Atom editor installed)


    atom .

# Common Tasks

Basic watching for changes and republish (no minification/uglification)

    gulp serve

Build/Minify/etc and publish to distribution folder.  Also watches, but needs refresh.

    gulp serve:dist

Build/Watch/Build.

    gulp watch:build

# Disclaimer

No reason to believe these are best practices for es6/angular.

# TODOs

1. make custom yeoman generator for easy install/portability

*Originally Generated by Yeoman*

https://www.npmjs.com/package/generator-es6-webapp

*Created By*

Nicholas Coats
@coatsnmore
github.com/coatsnmore

###### *Please feel free to clone/fork*
