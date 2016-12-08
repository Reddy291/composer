#!/usr/bin/env node
/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

process.env.SUPPRESS_NO_CONFIG_WARNING = true;

const yargs = require('yargs');

yargs
    .commandDir('./lib/network')
//    .usage('Usage: $0 <subcommand> [options]')
    .help()
//    .help('Usage: $0 network <subcommand> [options]')
    .example('concerto network deploy')
    .demand(1)
    .wrap(null)
    .argv;
