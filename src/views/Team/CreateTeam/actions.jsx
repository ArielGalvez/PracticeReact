const actions = {
  ADD_TEAM: function (payload) {
    return {
      type: 'ADD_TEAM',
      payload
    }
  },

  UPDATE_PEOPLE: function (payload) {
    return {
      type: 'UPDATE_PEOPLE',
      payload
    }
  },

  UPDATE_FORM: function(payload) {
    return {
      type: 'UPDATE_FORM',
      payload
    }
  },

  RESTORE_FORM: function(payload) {
    return {
      type: 'RESTORE_FORM',
      payload
    }
  }
}

export default actions;