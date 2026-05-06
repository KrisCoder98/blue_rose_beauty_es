"use client"

export type Gender = "M" | "F" | "U";
export type ProfileType = "Admin" | "User";

type UserId = `US-${number}`;
type ImagePath = `/${string}.${"png" | "jpg" | "jpeg" | "webp"}`;

export type User = {
    id: UserId;
    avatar?: ImagePath;
    gender: Gender;
    name: string;
    profile: ProfileType;
    preferences: {
        theme?: "dark" | "light";
        notifications?: boolean;
    };
}

const defaultUser: Omit<User, "id" | "name"> = {
    gender: "U",
    profile: "User",
    preferences: {},
};

const createUser = (data: Pick<User, "id" | "name"> & Partial<User>): User => ({
    ...defaultUser,
    ...data
});