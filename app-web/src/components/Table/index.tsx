import React from 'react';

import './styles.css';

const students = [
  {
    id: '1',
    name: 'Matheus',
    cpf: '45212543819',
    email: 'matheus@gmail.com'
  },
  {
    id: '2',
    name: 'Matheus',
    cpf: '45212543819',
    email: 'matheus@gmail.com'
  },
  {
    id: '3',
    name: 'Matheus',
    cpf: '45212543819',
    email: 'matheus@gmail.com'
  },
  {
    id: '4',
    name: 'Giovana',
    cpf: '45212543819',
    email: 'matheus@gmail.com'
  },
  {
    id: '5',
    name: 'Roberto',
    cpf: '45212543819',
    email: 'matheus@gmail.com'
  },
]

const Table = () => {
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
          students.map(student => {
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