import React, { FC } from 'react';

import './styles.css';

interface ContentProps {
  children:  React.ReactNode;
}

const Content: FC<ContentProps> = ({children}) => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-header">
          <h2>Lista de alunos</h2>
          <form>
            <select>
              <option value="name">Nome</option>
              <option value="cpf">CPF</option>
              <option value="email">E-mail</option>
            </select>
            <input />
            <button>Buscar</button>
          </form>
        </div>
        { children }
      </div>
    </div>
    
  )
}

export default Content;