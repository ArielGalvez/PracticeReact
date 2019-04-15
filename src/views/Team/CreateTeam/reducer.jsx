const initialState = {
  people: [
    {
      id: "1",
      name: "Gregory Frederickson",
      // isActive: true,
      avatar: "https://lh3.googleusercontent.com/-8Y5l_IGCkc8/AAAAAAAAAAI/AAAAAAAAAAc/hP8pp2loX3I/s96-c/photo.jpg"
    },
    {
      id: "2",
      avatar: "https://lh4.googleusercontent.com/-Mq3J6qJaPdA/AAAAAAAAAAI/AAAAAAAAAAc/XRSfECwWYEA/s96-c/photo.jpg",
      email: "engageme.demo1@gmail.com",
      // isActive: true,
      name: "Anthony Johnson"
    },
    {
      id: "3",
      // isActive: false,
      name: "Akira Yamaoka"
    },
    {
      id: "4",
      // isActive: false,
      name: "Moon Butterly"
    },
    {
      id: "5",
      // isActive: false,
      name: "React Redux"
    }
  ],
  formCreate: {
    members: [],
    nameTeamValue: '',
  }
};

function RESTORE_FORM(state, action) {
  const newFormCreate = { ...state.formCreate };
  newFormCreate.members= [];
  newFormCreate.nameTeamValue = '';
  return {
    ...state,
    formCreate: newFormCreate
  };
}
function UPDATE_FORM(state, action) {
  console.log('create update form');
  const newFormCreate = { ...state.formCreate };
  // const newFormCreate = JSON.stringify(state.formCreate);
  newFormCreate.nameTeamValue = action.payload.nameTeamValue;
  return {
    ...state,
    formCreate: newFormCreate
  };
}

function UPDATE_PEOPLE(state, action) {
  console.log('updating in create team');
  // const newFormCreate = JSON.stringify(state.formCreate);

  const newFormCreate = { ...state.formCreate };
  // const newFormCreate = {...JSON.stringify(state.formCreate)};// nunca volver a hacer esto
  
  const newMembers = [...newFormCreate.members];
  if (newMembers.includes(action.payload)) {
    const index = newMembers.indexOf(action.payload);
    newMembers.splice(index, 1);
  }
  else {
    newMembers.push(action.payload);
  }
  newFormCreate.members = newMembers;
  return {
    ...state,
    formCreate: newFormCreate
  };
}

function ADD_TEAM(state, action) {
  const newFormCreate = { ...state.formCreate };
  if (state.formCreate.nameTeamValue && state.formCreate.members.length > 0) {
    console.log(state.formCreate);
    newFormCreate.nameTeamValue = '';
  }
  else {
    console.log('please select members and insert name team');
  }
  return {
    ...state,
    formCreate: newFormCreate
  };
}

export default function CreateTeam(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TEAM':
      return ADD_TEAM(state, action);
    case 'UPDATE_FORM':
      return UPDATE_FORM(state, action);
    case 'RESTORE_FORM':
      return RESTORE_FORM(state, action);
    case 'UPDATE_PEOPLE':
      return UPDATE_PEOPLE(state, action);
    default:
      return state;
  }
}