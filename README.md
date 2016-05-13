# ionic2-camera
Using camera with Ionic 2

### Install Ionic2 and Cordova
`npm install -g ionic@beta`

`npm install -g cordova`

### Create project
`ionic start TutoCamera --v2 --ts`

`cd TutoCamera`

`ionic platform ios`

`ionic platform android`


### Add ionic native
`npm install ionic-native --save`

### Add cordova Camera plugin
`cordova plugin add cordova-plugin-camera`

### Add cordova SocialSharing plugin
`cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git`

### Deploy
`ionic run android`

`ionic run ios`
