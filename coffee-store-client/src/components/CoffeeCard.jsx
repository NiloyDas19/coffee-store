import PropTypes from 'prop-types';
import { IoEyeSharp, IoPencil } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const CoffeeCard = ({ coffee }) => {
    console.log(coffee);

    const handleDeleteCoffee = _id => {
        console.log(_id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetch(`http://localhost:5000/coffee/${_id}`,{
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    window.location.reload();
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                }
                else{
                    swal("Something wrong try again!");
                }
                console.log(data);
              })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    return (
        <div className='flex justify-between bg-[#F5F4F1] p-8 items-center rounded-md flex-col md:flex-row space-y-5 md:space-y-0'>
            <div>
                <img src={coffee.photoUrl} alt="" />
            </div>
            <div className='space-y-4'>
                <p><span className='font-bold'>Name: </span>{coffee.name}</p>
                <p><span className='font-bold'>Chef: </span>{coffee.chef}</p>
                <p><span className='font-bold'>Price: </span>890 TAKA</p>
            </div>
            <div className='md:space-y-5 flex justify-center items-center flex-row  md:flex-col gap-2'>
                <Link to={`/coffee/${coffee._id}`} className='bg-[#D2B48C] h-6 w-6 flex justify-center items-center rounded-md'>
                    <IoEyeSharp className='text-white' />
                </Link>
                <Link to={`/updateCoffee/${coffee._id}`} className='bg-[#3C393B] h-6 w-6 flex justify-center items-center rounded-md'>
                    <IoPencil className='text-white' />
                </Link>
                <button className='bg-[#EA4744] h-6 w-6 flex justify-center items-center rounded-md' onClick={() => handleDeleteCoffee(coffee._id)}>
                    <RiDeleteBin6Line className='text-white' />
                </button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
}

export default CoffeeCard;