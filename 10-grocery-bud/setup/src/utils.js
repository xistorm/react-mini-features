const STATUSES = {
    SUCCESS: 'success',
    DANGER: 'danger',
  };

const ACTIONS = { 
    ADD: {
        status: STATUSES.SUCCESS,
        message: 'Item Added To The List',
    }, 
    REMOVE: {
        status: STATUSES.DANGER,
        message: 'Item Removed',
    }, 
    EXCEPTION: {
        status: STATUSES.DANGER,
        message: 'Please Enter Value',
    },
    CLEAR: {
        status: STATUSES.DANGER,
        message: 'Empty list',
    },
    EDIT: {
        status: STATUSES.DANGER,
        message: 'Editing value'
    },
    SAVE: {
        status: STATUSES.SUCCESS,
        message: 'Value Changed'
    },
};

export default ACTIONS;