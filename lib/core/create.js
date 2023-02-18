// @ts-nocheck
const program = require( 'commander' );
const { createProjectAction, createComponentAction } = require( './actions' );

const createCommands = () => {
    program
        .command( 'create <project> [others...]' )
        .description( 'create project' )
        .action( createProjectAction );

    program
        .command( 'addcpn <name>' )
        .description( 'add react component' )
        .action( createComponentAction );
};

module.exports = createCommands;