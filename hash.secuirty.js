import bcrypt from "bcrypt";

export const hash = async (password) => {
    return await bcrypt.hash(password, 10);
};

export const comparePasswords = async (hashedPassword, password) => {
    return await bcrypt.compare(password, hashedPassword);
};