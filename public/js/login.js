/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';
import { resolveSoa } from 'dns';

export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', 'Incorrect email or password!!!');
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      methos: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/login'
    });
    if ((res.data.status = 'success')) {
      location.reload(true);
      location.assign('/');
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
