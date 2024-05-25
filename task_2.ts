
interface Response<T> {data: T; status: number;}


function createResponse<T>(data: T, status: number): Response<T> {
    return { data, status };
}

const numericResponse = createResponse([1, 2, 3], 200);


const user = {
    id: 1,
    name: 'Artyom Tregubov',
    email: 'semperidem1989@.com'
};
const userResponse = createResponse(user, 200);