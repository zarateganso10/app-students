import React, { useEffect, useState, FC } from 'react';
import { useQuery , gql } from '@apollo/client';
import { LOAD_STUDENTS } from '../../graphql/Queries';

import './styles.css';

type Inputs = {
  option: string,
  filter: string,
};

interface TableProps {
  filter: Inputs | undefined;
}


const Table: FC<TableProps> = ({ filter }) => {
  const { error, loading, data } = useQuery(LOAD_STUDENTS, {
    variables: filter ? filter : {}
  });
  const [ students, setStudents ] = useState([])

  useEffect(() => {
    if(data){
      setStudents(data.students)
    }
  }, [data, filter])

  return (
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>CPF</td>
          <td>E-mail</td>
        </tr>
      </thead>
      <tbody>
        {
          students.map((student: any) => {
            return (
              <tr key={Number(student.id)}>
                <td>{student.name}</td>
                <td>{student.cpf}</td>
                <td>{student.email}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;