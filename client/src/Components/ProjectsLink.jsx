import React from 'react';
import { useState } from 'react';
import { useSelector} from 'react-redux'
import nutrizione from '../assets/nutrizione/nutrizione.json';
import { Link } from 'react-router-dom';


function ProjectsLink() {
    // Dark light logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    // End dark light logics

    // Declare a fixed length excerpt
    var fixedLengthExcerpt;
    // Function shorter() to short down a long description and generate an excerpt
    // the length can be set by editing "arrayPh.length = x"
    const shorter = (phrase) =>{
      let arrayPh = phrase.split(' ');
      arrayPh.length = 12;
      fixedLengthExcerpt = arrayPh.join(' ');
      return fixedLengthExcerpt
    }

    // Run shorter() and add an excerpt to each object of local nutrizione json
    for(let i=0;i<nutrizione.length;i++){
        shorter(nutrizione[i].description)
        nutrizione[i].fixedLengthExcerpt = fixedLengthExcerpt
    }

    // Empty array to get the categories
    const categoryArray = [];
    // Loop on nutrizione and push the category into the array
    nutrizione.forEach(element => {
        categoryArray.push(element.category)
    });
    // Declare an array with the first elemnt "all"
    const uniqueFilters = ['All']
    // Function to eliminate double category from the array
    function eliminateDuplicates(arr) {
        const arrayClone = [...arr];

        let supportObject = {};

        for (let i = 0; i < arrayClone.length; i++) {
          supportObject[arrayClone[i]] = 0;
        }
        for (let i in supportObject) {
          uniqueFilters.push(i);
        }

        return uniqueFilters;

    }
    // Run the eliminateDuplicates function on the array of categories
    eliminateDuplicates(categoryArray)


    // Function to filter the nutrizione blocks
    function filterSelection(whatClicked){


        // array of all css props of portfolios block
        let allBlocks = document.getElementsByClassName('port_block')

        // array of all css props of filters
        let allFilters = document.getElementsByClassName('btnFilters')

        // Loop through all filters
        for(let i =0; i<allFilters.length;i++){

            // Array of the css props of single filter block
            let arrayOfPropsFilter = allFilters[i].classList.value.split(' ')
            console.log(arrayOfPropsFilter)
            // Function to test if element is equal to whatClicked
            const isPresent = (element) => element == whatClicked;
                // If .some() returns false set inactive
                if(arrayOfPropsFilter.some(isPresent) == false){
                    allFilters[i].classList.add('inactive')
                    allFilters[i].classList.remove('active')
                }
                // Otherwise set active the block whose cat is equal to whatclicked
                else{
                    allFilters[i].classList.remove('inactive')
                    allFilters[i].classList.add('active')
                  }
          }


        // Loop through all blocks
        for(let i =0; i<allBlocks.length;i++){
            // Array of the css props of single nutrizione block
            let arrayOfPropsBlock = allBlocks[i].classList.value.split(' ')

            // Function to test if element is equal to whatClicked
            const isPresent = (element) => element == whatClicked;
                // If .some() returns false hide the blocks
                if(arrayOfPropsBlock.some(isPresent) == false && whatClicked != "All"){
                    allBlocks[i].classList.add('hidden')
                }
                // Otherwise shows the block whose cat is equal to whatclicked
                else{
                      allBlocks[i].classList.remove('hidden')
                      allBlocks[i].classList.add('visible')
                  }
          }

    }

    return (
    <>
    <section id="nutrizione" className={"pb-5 " + bgType + " " + textType}>
    <h1 className="section-title pt-5">Integratori Life Nutrition </h1>
        <p className='mb-3 text-center fs-4'>Un'idea nata dalla collaborazione tra il nostro Fitness Center e la dott.ssa Claudia, esperta nutrizionista.<br/> Abbiamo selezionato materie prime di altissima qualità, per garantirti la migliore integrazione tra sport e vita</p>
        <div>
            <div className="container gray-bg pb-3">
                {/******* PORTFOLIO FILTERS *********/}
                <div className='container d-flex justify-content-center pt-1 mb-5'>
                    <div className="mx-auto">
                    {uniqueFilters.map((e)=>{
                    return(
                        <button id={e} key={e} onClick={()=>filterSelection(e)} type="button" className={"btn btn-outline-primary mx-2 btnFilters mb-2 " + e}>{e}</button>
                        )})}
                    </div>
                </div>
                {/******* END PORTFOLIO FILTERS *********/}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {nutrizione.map((e,i)=>{
                    return(

                    <div key={e.title} className={"col" + " " + e.category + " " + "port_block"}>
                        <div className="card shadow-sm">
                            <img src={e.thumbImage}/>
                            <div className="card-body">
                                <p className="card-text">{e.fixedLengthExcerpt}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link className="btn btn-outline-primary p-1" to={`/singleproject?${e.title}`} state={{ clicked: e.title }}>
                                            <i className="fs-6 bi bi-search"></i> Vai alla scheda
                                        </Link>
                                    </div>
                                    <small className="text-primary fs-6">{e.category}</small>
                                </div>
                            </div>
                        </div>

                    </div>
                    )})}
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default ProjectsLink