
import { useNavigate } from 'react-router-dom';
import imagePath from '../../constants/imagePath';
import Hiring from '../../components/Hiring';
import ButtonField from '../../components/ButtonField';
import { ToastContainer ,toast} from 'react-toastify';
import '../../style/commonStyle.css'
const DashBoard = () => {
  const navigate =useNavigate();
  return <>
   <ToastContainer/>
    <div className='main-div p-3' >
      <div className='main-first d-flex p-3 '>
        <div className='w-50'>
          <h3>Hello Sir /Mam!</h3>
          <p>HR management system is an essential tool that helps organizations manage their employees effectively.</p>
        </div>
        <div className='w-50 dashboard-logo' >
          <img src={imagePath.dashBoardimage} style={{ width: '50%', position: 'absolute', top: '-40px', left: '100px' }} alt="Dashboard" />
        </div>
      </div>
      <div className='p-3'>
      <h4>You Need To Hire</h4>
      </div>
      <div className='main-second p-3' style={{width:'95%'}}>
        <Hiring/>
      </div>
      <div className='main-third p-3' style={{width:'95%'}}>
        <Hiring/>
      </div>
      <div className='main-fourth p-3' style={{width:'95%'}}>
      <div className="card mb-3" >
      <div className="card-header">
      <div className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid" >
                <a className="navbar-brand" href="#">Recruitment Progress</a>
                <ButtonField classname="navbar-toggler d-block d-lg-block buttonSize136_yellow" type='button' label='See All' onClick={()=>{navigate('/signin')}}/>
            </div>
        </div>
      </div>
     
          <div className='p-3'>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Profession</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
          </div>
      </div>
    </div>
    </div>
  </>
};

export default DashBoard;
