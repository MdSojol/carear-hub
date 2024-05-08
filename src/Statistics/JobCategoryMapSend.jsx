import PropTypes from 'prop-types';
const JobCategoryMapSend = ({singleCategory}) => {
    // console.log(singleCategory);
    const { job_name, available, image_url} = singleCategory;
    return (
        <div className='bg-[#9873ff10] p-10 rounded-2xl'>
           
            <img className='mb-4' src={image_url} alt="" />
            <h3 className='mb-1 font-bold text-2xl'>{job_name}</h3>
            <h5 className='text-[#757575] '>{available}</h5>

           

            
        </div>
    );
};

JobCategoryMapSend.propTypes ={
    singleCategory: PropTypes.object,
}

export default JobCategoryMapSend;