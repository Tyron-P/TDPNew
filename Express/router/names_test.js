"use strict";
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../index');

const namesT = require('../db');