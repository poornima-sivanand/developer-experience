'use strict';
const options= require('pipeline-cli').Util.parseArguments()
const changeId = options.pr //aka pull-request
const version = '10'
const name = 'patroni'

const phases = {
  build: {namespace:'psbox10-tools' , name: `${name}`, phase: 'build', changeId:changeId, suffix: `-build-${changeId}`, instance: `${name}-build-${changeId}`, tag:`v${version}-${changeId}`},
  dev: {namespace:'psbox10-dev' , name: `${name}`, phase: 'dev', changeId:changeId, suffix: `-dev-${changeId}`, instance: `${name}-dev-${changeId}`, tag:`v${version}-${changeId}`},
   test: {namespace:`psbox10-dev`,        name: `${name}`, phase: 'test' , changeId:changeId, suffix: '-test'             , instance: `${name}-test`             , tag:`v${version}-latest`},
   prod: {namespace:`psbox10-dev`,        name: `${name}`, phase: 'prod' , changeId:changeId, suffix: ''                  , instance: `${name}-prod`             , tag:`v${version}-stable`}
}

module.exports = exports = phases
