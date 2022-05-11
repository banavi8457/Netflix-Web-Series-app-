import React from 'react'

const Card_breakingbad = (props) => {


    return (
        <>
            {/* <div className='cards' >
    
    <div className='card' >
      <img src='https://tse1.mm.bing.net/th?id=OIP.6jVD71df_ZVVNQAV4ni0TQHaKe&pid=Api&P=0&w=115&h=162' alt='myPic' className='card_img' />
    
      <div className='card_info' >
        <span className='card_category' > A Netflix Original Series</span>
        <h3 className='card_title' >Breaking bad</h3>
        <a href='https://www.netflix.com/in/title/70143836' target='_blank' >
          <button>Watch Now</button>
        </a>
      </div>
    
    
    </div>
    </div>
    <br/>
    <br/> */}


            <div className='cards' >

                <div className='card' >
                    <img src={props.imgsrc} alt='myPic' className='card_img' />

                    <div className='card_info' >
                        <span className='card_category' >{props.title} </span>
                        <h3 className='card_title' >{props.sname}</h3>
                        <a href={props.link} target='_blank' >
                            <button>Watch Now</button>
                        </a>
                    </div>


                </div>
            </div>
        </>

    );




}


export default Card_breakingbad