import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7e1b8b07-d9aa-4fa2-bffa-8cc81e921356",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users/?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followUser(id) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  }
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, {
      status: status,
    });
  }
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }, 
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}
