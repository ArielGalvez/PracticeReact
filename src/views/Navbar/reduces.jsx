const initialState = {
  title: 'Teams',
  actions: [
    {
      onClick: null,
      position: 'left',
      icon: 'group_add',
      text: 'create team'
    },
    {
      onClick: null,
      position: 'left',
      icon: 'edit',
      text: 'edit team'
    },
    {
      onClick: null,
      position: 'right',
      icon: 'home',
      text: 'home'
    }
  ],
};

export default function NavbarReducer(state = initialState, action){
  /* switch(action.type) {
    case 'ADD_TASK':
      return ADD_TASK(state, action);
    case 'UPDATE_FORM':
      return UPDATE_FORM(state, action);
    case 'CLEAR_FORM':
      return CLEAR_FORM(state, action);
    case 'UPDATE_TASK':
      return UPDATE_TASK(state, action);
    default: 
      return state;
  } */
  return state;
}