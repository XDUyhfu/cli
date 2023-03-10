#! /usr/bin/env node

// @ts-nocheck

const program = require( 'commander' );
const helpOptions = require( './lib/core/help' );
const createCommands = require( './lib/core/create' );

program.version( require( './package.json' ).version, '-V, --version' );

helpOptions();
createCommands();


program.parse( process.argv );