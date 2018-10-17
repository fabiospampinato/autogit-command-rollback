# Autogit Command Rollback

A command for rolling back the history to that of the origin and discarding local changes.

This command is quite useful when developing other commands or plugins. You can test them, and if they don't work properly you can just roll back.

## Install

```sh
npm install --save autogit-command-rollback
```

## Usage

#### Options

This command uses the following options object:

```js
{
  remote: 'origin', // Resetting history up to the last commit present in this remote
  rollback: { // Things to roll back
    workingTree: true, // Discard all local changes
    history: true // Discard all new commits compared to the remote
  },
  force: false // Don't ask for confirmation
}
```

#### Configuration

Add this command to your configuration:

```js
const rollback = require ( 'autogit-command-rollback' );

module.exports = {
  commands: {
    'rollback': rollback (),
    'rollback-tree': rollback ({
      rollback: {
        workingTree: true
        history: false
      }
    })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit rollback
autogit rollback-tree
```

## License

MIT © Fabio Spampinato
