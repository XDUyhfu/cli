// @ts-nocheck
const program = require( 'commander' );

const helpOptions = () => {
    // 可选参数
    program.option( '-g, --generate', 'generate a file' );
    program.option( '-d, --dest <dest>', 'a destination folder' );
    program.option( '-f, --framework <framework>', 'select framework' );

    program.on( '--help', () => {
        console.log( "" );
        console.log( "Other:" );
        console.log( "other options" );
    } );
};

module.exports = helpOptions;