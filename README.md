Angular Material Demo
=============
NOTE: This is an updated version of the original code, https://github.com/jelbourn/material2-app
Please check the package.json file for what's updated.
See it live: https://angular-material-demo.firebaseapp.com/

## Update 02/16/2017
It seems `@angular/material@2.0.0-beta.2` introduced some code breaking updates, I updated the code to reflect changes. One of most important change was introduction of `<md-input-container>` which replaced `<md-input>` as a wrapper. Please see the example below.

    <md-input-container>
    <input mdInput #nickname placeholder="Nickname" maxlength="50" />
    <md-hint align="end">
        {{nickname.value.length}} / 50
    </md-hint>
    </md-input-container>

**Note**: Although the examples on https://material.angular.io/components/component/input uses `md-input` directive, `mdInput` was the correct one, possibly a documentation error.

## Update 02/14/2017
Updated to "@angular/cli": "^1.0.0-beta.31"

NOTE: Please don't forget to update your global angular cli installation, too. If you get `You have to be inside an angular-cli project in order to use the serve command.` error or somehow can't upgrade to the latest global package you can use the local ng bin as;

    ./node_modules/\@angular/cli/bin/ng serve

# Installation

	$ cd ~/
	$ git clone git@github.com:demirk4n/angular-material-demo.git
    $ cd angular-material-demo
    $ npm install
    $ ng serve
