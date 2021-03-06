# Activity Tracker

Activity Tracking App built with Meteor.

Demo here: [withpulp.meteor.com](http://withpulp.meteor.com).

<!-- toc -->

* [Roadmap](#roadmap)
  * [Features](#features)
  * [Core Stories](#core-stories)
  * [Views](#views)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

<!-- toc stop -->

## Roadmap

### Features

* Time tracking algorithm
  * tracks when user registered
	* tracks when user enters event
	* tracks when user pauses event
	* tracks when user quits event (deletes account)
	* tracks streaks of consecutive days (sort by highest to lowest)
	* sort users with longest streaks
* Login/Register and OAUTH (facebook, twitter, google)
* ShareIt - share exploits on social media

### Core Stories

##### Social Sign In
```
When I'm ready to track an activity
I want to sign in using Twitter, Google, Facebook  
So that I can quickly access my profile
```

##### Tracking Initiation
```
When I'd like to track an activity
I want to be able to automate the tracking
So that I can make more productive use of my time
```

##### Daily Tracking
```
When I'm tracking an activity
I would like to show intent on a daily basis
So that I can keep a daily tally of my commitment
```

##### Current Streak
```
When I've started an activity
I want to see how long my current streak is
So that I can gauge my progress
```

##### Longest Streak
```
When I've started an activity
I want to see how long my longest streak was
So that I can gauge my progress
```

##### Leaderboard
```
When I'm tracking an activity
I want to see how I'm doing compared to others
So that I can fuel my motivation
```
### Views

* Leaderboard
* Dashboard

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:amazingBastard/activity-tracker.git
cd activity-tracker
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

### SEO and other concerns

> Meteor cannot do SEO

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. Use constants under
__client/lib/constants.js__ for the app. Change SEO settings inside the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to
__server/config/security.js__

```javascript
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) and
[matteodem:easy-security](https://github.com/matteodem/meteor-easy-security) have also been added.

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](https://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Routing
  * [iron:router](https://github.com/EventedMind/iron-router)
* Collections
  * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:semantic-ui](https://github.com/meteor-useraccounts/semantic-ui)
  * [service-configuration](https://atmospherejs.com/meteor/service-configuration)
  * [accounts-ui](https://atmospherejs.com/meteor/accounts-ui)
  * [accounts-facebook](https://atmospherejs.com/meteor/accounts-facebook)
  * [accounts-twitter](https://atmospherejs.com/meteor/accounts-twitter)
  * [accounts-google](https://atmospherejs.com/meteor/accounts-google)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css/)
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS/)
* Security
  * [browser-policy](https://github.com/meteor/meteor/tree/devel/packages/browser-policy)
* SEO
  * [manuelschoebel:ms-seo](https://github.com/DerMambo/ms-seo)
* Development
  * [less](https://github.com/meteor/meteor/tree/devel/packages/less)
  * [jquery](https://github.com/meteor/meteor/tree/devel/packages/jquery)
  * [momentjs:moment](https://github.com/moment/moment/)
  * [email](http://docs.meteor.com/#/full/email)
  * [synced-cron](https://github.com/percolatestudio/meteor-synced-cron)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more
	views/			    # Contains all views
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection
private/                # Private files
public/                 # Public files
routes/                 # All routes
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
```

## License
This project has an MIT License, see the LICENSE.txt for more information.
