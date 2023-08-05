import React, { useState } from 'react'
import Courses from './Courses'

const Category = () => {
    const [data,setData] = useState(Courses);
    const filterResult=(catItem)=>{
        const result = Courses.filter((currData)=>{
            return currData.courseName === catItem;
        });
        setData(result);


    }
    return (
        <div >
        <h1  className='text-center text-info '>Courses</h1>
        <div className='container-fluid mx-2'>
            <div className='row mt-5 mx-2'>
                <div className='col-md-3'>
                    <button className='btn btn warning w-100' onClick={()=>filterResult('COURSEA')}>Course1</button>
                    <button className='btn btn warning w-100'  onClick={()=>filterResult('COURSEB')}>Course2</button>
                    <button className='btn btn warning w-100'  onClick={()=>filterResult('COURSEC')}>Course3</button>


                </div>
                <div className='col-md-9'>
                    <div className='row'>
                    {data.map((value)=>{
                        const {id,title} = value;
                        return(
                            <>
                            <div className='col-md-4' key={id}>
                        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
  </div>
</div>
                        </div>

                            </>
                        )
                    })}
                       
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Category
