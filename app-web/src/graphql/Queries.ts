import {gql} from '@apollo/client';

export const LOAD_STUDENTS = gql`
query students($name: String, $cpf: String, $email: String) {
  students(name: $name, cpf: $cpf, email: $email){
    id,
    name,
    cpf,
    email
  }
}
`