import React from "react";
import profileReducer, {addPostActionCreator} from "./profile-reducer";
import { ReactDOM } from "react-dom";
import { App } from "../App";

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator();
    let state = {
        postsData: [
          { id: 1, message: "You are so pretty. Pls, tell me, where are you from?", likesCount: 23 },
          { id: 2, message: "Omg! Its New-York, I had to return there, because its so precious.", likesCount: 12 },
        ],
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
})