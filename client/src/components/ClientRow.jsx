import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENTS } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

//create query to get all clients from graphql server in row component

export default function ClientRow({ client }) {

    const [deleteClient] = useMutation(DELETE_CLIENTS, {

        //update cache after deleting client

        variables : {
            id : client.id
        },

        //delete client without refreshing the page
        refetchQueries : [{
            query : GET_CLIENTS
        }]

    });

    const { id, name, email, phone } = client;

  return (
    <tr>
        <td> {client.name} </td>
        <td> {client.email} </td>
        <td> {client.phone} </td>
        <td>
            <button className='btn btn-danger' onClick={
                () => {
                    deleteClient();
                }

            }>
            <FaTrash />
            </button>
        </td>
    </tr>
  )
}
