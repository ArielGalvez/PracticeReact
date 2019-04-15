// import { GetTeam } from '../../../services/Rest/TeamRest.jsx';

const initialState = {
  people: [
    {
      id: "1",
      name: "Gregory Frederickson",
      isActive: true,
      avatar: "https://lh3.googleusercontent.com/-8Y5l_IGCkc8/AAAAAAAAAAI/AAAAAAAAAAc/hP8pp2loX3I/s96-c/photo.jpg"
    },
    {
      id: "2",
      avatar: "https://lh4.googleusercontent.com/-Mq3J6qJaPdA/AAAAAAAAAAI/AAAAAAAAAAc/XRSfECwWYEA/s96-c/photo.jpg",
      email: "engageme.demo1@gmail.com",
      isActive: true,
      name: "Anthony Johnson"
    },
    {
      id: "3",
      isActive: false,
      name: "Akira Yamaoka"
    },
    {
      id: "4",
      isActive: false,
      name: "Moon Butterly"
    }
  ],
  formEdit: {
    members: [],
    nameTeamValue: '',
  }
};

function RESTORE_FORM(state, action) {
  const newFormEdit = { ...state.formEdit };
  newFormEdit.members= [];
  newFormEdit.nameTeamValue = '';
  return {
    ...state,
    formEdit: newFormEdit
  };
}
function UPDATE_FORM(state, action) {
  console.log('edit update form');
  const newFormEdit = { ...state.formEdit };
  newFormEdit.nameTeamValue = action.payload.nameTeamValue;
  return {
    ...state,
    formEdit: newFormEdit
  };
}

function UPDATE_PEOPLE(state, action) {
  console.log('updating in edit team');

  const newFormEdit = { ...state.formEdit };
  const newMembers = [...newFormEdit.members];
  if (newMembers.includes(action.payload)) {
    const index = newMembers.indexOf(action.payload);
    newMembers.splice(index, 1);
  }
  else {
    newMembers.push(action.payload);
  }
  newFormEdit.members = newMembers
  return {
    ...state,
    formEdit: newFormEdit
  };
}

function ADD_TEAM(state, action) {
  const newFormEdit = { ...state.formEdit };
  if (state.formEdit.nameTeamValue && state.formEdit.members.length > 0) {
    console.log(state.formEdit);
    newFormEdit.nameTeamValue = '';
  }
  else {
    console.log('please select members and insert name team');
  }
  return {
    ...state,
    formEdit: newFormEdit
  };
}

export default function EditTeam(state = initialState, action) {
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