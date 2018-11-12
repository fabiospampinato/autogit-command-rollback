
/* IMPORT */

import * as rollbackPlugin from 'autogit-plugin-rollback';

/* ROLLBACK */

type options = {
  remote: string,
  rollback: {
    workingTree: boolean,
    history: boolean
  },
  force: boolean
};

function rollback ( customOptions?: Partial<options> ) {

  return {
    description: 'Rollback the history and discard local changes',
    options: [
      ['--force', 'Don\'t ask for confirmation']
    ],
    plugins: [
      rollbackPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export default rollback;
