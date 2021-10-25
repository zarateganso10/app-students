import React, { useState } from 'react';
import Table from '../Table';
import { useForm, SubmitHandler } from 'react-hook-form';

import './styles.css';

type Inputs = {
  option?: string,
  filter?: string,
};

type Filter = {
  name?: string,
  cpf?: string,
  email?: string,
};

const Content = () => {
  const { register, handleSubmit } = useForm();
  const [ filter, setFilter ] = useState<Filter>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const filterSerialize: any = {}
    if(data.option === 'all') {
      setFilter({});
    }
    if(data.option){
      filterSerialize[data.option] = data.filter;
    }
    setFilter(filterSerialize);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="content-header">
          <h2>Lista de alunos</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("option")} defaultValue="all">
              <option value="name">Nome</option>
              <option value="cpf">CPF</option>
              <option value="email">E-mail</option>
              <option value="all">Todos</option>
            </select>
            <input {...register("filter")} placeholder="buscar" />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <Table filter={filter} />
      </div>
    </div>
    
  )
}

export default Content;