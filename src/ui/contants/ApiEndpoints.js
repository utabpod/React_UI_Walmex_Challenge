const baseUrl="http://localhost:3000";
export const getUsersUrl=`${baseUrl}/users`;
export const getUserByAge=(selectedItem)=>`${baseUrl}/users/age/${selectedItem}`;