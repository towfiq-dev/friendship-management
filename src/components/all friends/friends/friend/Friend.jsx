import { Link } from "react-router-dom";

const Friend = ({friend}) => {
  const {picture, name, days_since_contact, status, tag, id} = friend
  return (
    <Link to={`/friendsDetails/${id}`} className='shadow-md p-5 rounded-xl text-center'>
      <div className='flex justify-center mb-2'>
        <img className='rounded-full' src={picture} alt="" />
      </div>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p className='text-gray-500 mt-2'>{days_since_contact}d ago</p>
      <div className='flex justify-center gap-15 mt-2'>
        {
        tag.map((singleTag, index)=> { 
          return(
          <div tag={singleTag} key={index} >
          <p className={`flex px-3 rounded-2xl ${singleTag === 'WORK'? 'bg-green-200' : singleTag === 'FAMILY'? 'bg-blue-300' : 'bg-orange-200'}`}>{singleTag}</p>
          </div>
        )})
      }
      </div>
      <p className={` max-w-24 mx-auto text-white rounded-2xl mt-2 ${status === 'overdue'? 'bg-red-500' : status === 'on track'? 'bg-[#244D3F]' : 'bg-[#EFAD44]'}`}>{status}</p>
    </Link>
  );
};

export default Friend;