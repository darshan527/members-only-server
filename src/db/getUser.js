import { db } from ".";

export const getUser = async (id) => {
    const connection = db.getConnection()
    const user = await connection.collection('users')
        .findOne({ id });
    return user;

}