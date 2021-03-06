import { Student } from "../constants";

const { StudentDetail, ClearStudent } = Student;

const initial_state = {
  data: null,
};

export const studentReducer = (state = initial_state, action) => {
  switch (action.type) {
    case StudentDetail:
      return {
        ...state,
        data: action.payload,
      };

    case ClearStudent:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};
