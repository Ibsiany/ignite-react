import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name:'Ibsiany'},
        {id: 2, name:'Walquiria'},
        {id: 3, name:'Arthur'},
    ];

    return response.json(users);
}