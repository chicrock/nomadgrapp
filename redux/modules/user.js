/// Imports
import { API_URL, FACEBOOK_APP_ID } from "../../constants";
import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

/// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

/// Action Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token,
  };
}

function logOut() {
  return {
    type: LOG_OUT,
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

function setNotifications(notifications) {
  return {
    type: SET_NOTIFICATIONS,
    notifications,
  };
}

/// API Actions
function login(username, password) {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.token && json.user) {
          dispatch(setLogIn(json.token));
          dispatch(setUser(json.user));

          return true;
        } else {
          return false;
        }
      })
      .catch(err => console.log(err));
  };
}

function facebookLogin() {
  return async dispatch => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FACEBOOK_APP_ID,
      {
        permissions: ["public_profile", "email", "user_friends"],
        //behavior: "native",
      }
    );

    if (type == "success") {
      return fetch(`${API_URL}/users/login/facebook/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: token,
        }),
      })
        .then(response => response.json())
        .then(json => {
          if (json.token && json.user) {
            dispatch(setLogIn(json.token));
            dispatch(setUser(json.user));

            return true;
          } else {
            return false;
          }
        })
        .catch(error => console.log(error));
    }
    console.log(type, token);
  };
}

function getNotifications() {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    fetch(`${API_URL}/notifications/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setNotifications(json));
      });
  };
}

function getOwnProfile() {
  return (dispatch, getState) => {
    const {
      user: {
        token,
        profile: { username },
      },
    } = getState();
    fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setUser(json));
      });
  };
}

function getProfile(username) {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    return fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => json);
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    return fetch(`${API_URL}/users/${userId}/follow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        dispatch(logOut());
      } else if (response.ok) {
        return true;
      } else if (!response.ok) {
        return false;
      }
    });
  };
}

function unfollowUser(userId) {
  return (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    return fetch(`${API_URL}/users/${userId}/unfollow/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        dispatch(logOut());
      } else if (response.ok) {
        return true;
      } else if (!response.ok) {
        return false;
      }
    });
  };
}

/// Initial State

const initialState = {
  isLoggedIn: false,
};

/// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case SET_NOTIFICATIONS:
      return applySetNotifications(state, action);
    default:
      return state;
  }
};

/// Reducer Functions

function applyLogIn(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token,
  };
}

function applyLogOut(state, action) {
  AsyncStorage.clear();

  return {
    ...state,
    isLoggedIn: false,
    token: "",
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user,
  };
}

function applySetNotifications(state, action) {
  const { notifications } = action;
  return {
    ...state,
    notifications,
  };
}

/// Exports

const actionCreators = {
  login,
  facebookLogin,
  logOut,
  getNotifications,
  getOwnProfile,
  getProfile,
  followUser,
  unfollowUser,
};

export { actionCreators };

/// Default Reducer Export

export default reducer;
