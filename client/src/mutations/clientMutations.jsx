import { gql } from '@apollo/client';

//DELETE CLIENT MUTATION by ID

const DELETE_CLIENTS = gql`
    mutation DeleteClient($id: ID!) {
        deleteClient(id: $id) {
            id
            name
            email
            phone
        }
    }
`;

export {DELETE_CLIENTS};