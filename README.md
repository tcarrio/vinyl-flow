# vinyl-flow

I have had an idea for an application which I have wanted to build out for some time.

**End goal: Allow a dedicated hardware device to provide streaming audio to Chromecast-enabled devices.**

With this in mind, the following design decisions encapsulate the general development direction.
This is a hobby project in what seems to be seldom spare time- so it is definitely a slow process.

## UI:

- [Angular 7.X](https://angular.io/)
- [Google Assistant](https://developers.google.com/actions/)
- [Amazon Alexa](https://developer.amazon.com/alexa-skills-kit/music)

## Backend

- [Express](http://expressjs.com/) REST API on Hardware (Raspberry Pi 3B)
- SQLite with [Sequelize](http://docs.sequelizejs.com/) ORM
- [Arch Linux ARM](https://archlinuxarm.org/)
- [Mkchromecast](https://mkchromecast.com/)
- [paclient library](https://github.com/mscdex/paclient)
- [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) (where direct hardware interaction not required)
- [Aurora](https://aws.amazon.com/rds/aurora/) with ORM (Aurora is PostgreSQL compatible)
- [DialogFlow](https://dialogflow.com/docs)
- [Auth0](https://auth0.com/universal-login)

Really, I just want to turn this turntable into something even more useful.

Being able to tell my Google Home devices to start up the turntable on every speaker and have it play across all of my devices is the point I consider this a success.

