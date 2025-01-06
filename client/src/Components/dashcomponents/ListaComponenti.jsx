import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

function ListaComponenti() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  const { user } = UseAuthContext()

  const [componente, setComponente] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/componenti`, { mode: 'cors' });
      const componente = await response.json();
      setComponente(componente)

      console.log({ componente })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makeAPICall();
    }

  }, [user])


  const columns = [
    {
      name: 'Immagine',
      selector: row => row.immagine,
    },
    {
      name: 'Codice',
      selector: row => row.codice,
    },
  ];

  const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]


  return (
    <section className={"py-3" + " " + bgType + " " + textType}>
       <div className="container-fluid mt-0 pt-0">
       <DataTable
			    columns={columns}
			    data={componente}
  		/>

       </div>


    </section>

	);
}

export default ListaComponenti