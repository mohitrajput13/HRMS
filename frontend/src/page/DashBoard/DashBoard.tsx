
import { useNavigate } from 'react-router-dom';
import imagePath from '../../constants/imagePath';
import Hiring from '../../components/Hiring';
import ButtonField from '../../components/ButtonField';
import { ToastContainer ,toast} from 'react-toastify';
import '../../style/commonStyle.css'
const body = [
  {
    id: 1,
    heading: "Available Position",
    textColor:'#77DEFE',
    percentage:70,
    colors:`rgba(119, 222, 254, ${70 / 100}))`,
    position: 70
  },
  {
    id: 2,
    percentage:20,
    heading: "Job Open",
    textColor:'#FEA633',
  
    colors:`rgba(254, 166, 51,1${20 / 100})`,
    position: 20,
  }
];
const body1 = [
  {
    id: 1,
    heading: "Available Position",
    percentage:0,
    textColor:'#E1E1E1',
    colors:`rgba(225, 225, 225,1${0 / 100})`,
    position: 0
  },
  {
    id: 2,
    percentage:30,
    heading: "Job Open",
    textColor:"#A0D686",
    colors:`rgba(160, 214, 134,1${30 / 100})`,
    position: 30,
  }
];
const DashBoard = ({sidebarOpen}:any) => {
  
  const navigate =useNavigate();
  return <>
   <ToastContainer/>
    <div className='main-div' >
      <div className='main-first d-flex flex-row p-3 mt-3'>
        <div className='main-first-1 '>
          <h3>Hello Sir /Mam!</h3>
          <p>HR management system is an essential tool that helps organizations manage their employees effectively.</p>
        </div>
        <div className='main-first-2 dashboard-logo' >
          <img className={`${sidebarOpen?'dashboard-img':'dashboard-img1'}`} src={imagePath.dashBoardimage}  alt="Dashboard" />
        </div>
      </div>
      <div className='p-3'>
      <h4>You Need To Hire</h4>
      </div>
      <div className='main-second p-3' style={{width:'95%'}}>
        <Hiring body={body} />
      </div>
      <div className='main-third p-3' style={{width:'95%'}}>
        <Hiring body={body1}/>
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
     
      <div className='p-3' style={{overflowX:'scroll'}}>
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
