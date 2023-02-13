// @ts-nocheck
const program = require( 'commander' );
const { createProjectAction, createCpnAction } = require( './actions' );

const createCommands = () => {
    program
        .command( 'create <project> [others...]' )
        .description( 'create project' )
        .action( createProjectAction );

    program
        .command( 'addcpn <name>' )
        .description( 'add react component' )
        .action( createCpnAction );
};

module.exports = createCommands;