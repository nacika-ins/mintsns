import {actionCreatorFactory} from "vuex-typescript-fsa/lib";
import User from "@/model/User";

const userActionCreator = actionCreatorFactory("User");

export const setUserAction = userActionCreator<User>("SetUser");
