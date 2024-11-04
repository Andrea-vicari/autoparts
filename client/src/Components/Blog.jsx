import React from 'react'
import newsList from '../assets/news/news.json';
import { useSelector} from 'react-redux'


function Blog() {


        const themeType = useSelector((state) => state.counter.value)

        let bgType, textType, textColor;

        themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
        themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
        themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

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

            // Run shorter() and add an excerpt to each object of local newsList json
            for(let i=0;i<newsList.length;i++){
                shorter(newsList[i].description)
                newsList[i].fixedLengthExcerpt = fixedLengthExcerpt
            }

            // Declare a support array
            var postShorted = []

            for (let i=0;i<4;i++){
                postShorted.push(newsList[i]);
            }

  return (
    <>
    <section id="news" className={"pt-5 pb-3" + " " + bgType + " " + textType}>

    <div className="container">

        <h1 className="section-title">Our Blog</h1>
        <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


                    <div className="row pb-5">
                    {postShorted.map((e)=>{
                    return(
                        <div className="col-md-6" key={e.title}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary-emphasis">{e.category}</strong>
                                <h3 className="mb-0">{e.title}</h3>

                                <p className="card-text mb-auto">{e.fixedLengthExcerpt}</p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <i className='bi bi-arrow-right'></i>
                                </a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                <img src={e.thumbImage} className='bd-placeholder-img' style={{width:250,height:250}}/>
                                </div>
                            </div>
                        </div>
                    )})}

                    </div>

    </div>

    </section>
    </>
  )
}

export default Blog