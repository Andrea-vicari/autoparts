import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

var prodSingle

function AggiornaInfoComp(props) {

  const [comp, setComp] = useState({
    nome: '',
    categoria: ''
  });

  let clicked = useLocation();
  prodSingle = clicked.state


  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/componenti/${prodSingle}`)
      .then((res) => {

        setComp({
          nome: res.data.nome,
          categoria: res.data.categoria,
          });
          console.log(res)
      })
      .catch((err) => {
        console.log('Errore in modifica componente');
      });
  }, [prodSingle]);

  console.log('******')
  console.log(prodSingle)

  console.log(comp.nome)

  const onChange = (e) => {
    setComp({ ...comp, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      nome: comp.nome,
      categoria: comp.categoria
    };

    axios
      .put(`http://localhost:8080/api/componenti/tryaggiorna/${prodSingle}`, data)
      .then((res) => {
        navigate(`/dashboardpage`);
      })
      .catch((err) => {
        console.log(err)
        console.log('Error in AggiornaInfoComp!');
      });
  };

  console.log('efvev')
  console.log(comp.nome)

  return (
    <div className='AggiornaInfoComp'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='nome'>Nome</label>
              <input
                type='text'
                placeholder= {comp.nome}
                name='nome'
                className='form-control'
                value={comp.nome}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='categoria'>Categoria</label>
              <input
                type='text'
                placeholder='Categoria'
                name='categoria'
                className='form-control'
                value={comp.categoria}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Aggiorna Componente
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AggiornaInfoComp;