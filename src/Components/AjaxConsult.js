import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import  Bootbox from  'bootbox-react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';



export default function AjaxConsult(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [Information, setInformation] = useState([]);
  const [itemsLan, setItemsLan] = useState([]);
  
  const[busqueda, setBusqueda]=useState("");




    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



    const [openLan, setOpenLan] = useState(false);

    const onOpenModalLan = () => setOpenLan(true);
    const onCloseModalLan = () => setOpenLan(false);



    


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setInformation(result);
          setItemsLan(result);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  const handleChange=e=>{
      setBusqueda(e.target.value);
      filtrar(e.target.value);

  }

  const filtrar=(terminoBusqueda)=>{
      var resultadoBusqueda=Information.filter((elemento)=>{
          if(elemento.name.official.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.region.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
              return elemento;
          }
      });
      setItems(resultadoBusqueda);
  }











  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
       


       <Container>
           
<br/>
<br/>
<br/>

    

  <Row>
    <Col xs={11}>
    <InputGroup className="mb-3">
    <FormControl
      className="form-control inputBuscar"
      value={busqueda}
      placeholder="Search"
      onChange={handleChange}
    />
      <Button variant="outline-secondary"  id="button-addon2">
        Button
     </Button>
  </InputGroup>
        <Table responsive>
  <thead>
    <tr>
      <th scope="col">Official name</th>
      <th scope="col">Capital</th>
      <th scope="col">Region</th>
      <th scope="col">Language</th>
      <th scope="col">Population</th>
      <th scope="col">Flag</th>
      <th scope="col">Wikipedia Info</th>
    </tr>
  </thead> 
 
  <tbody>

       {items.map(item => (    
    <tr>
      <td>{item.name.official} </td>
      <td>{item.capital}</td>
      <td>{item.region}</td>
      <td><Button variant="outline-primary" onClick={onOpenModalLan}>View Languages</Button></td>
      <td>{item.population}</td>
      <td><img src={item.flags.png} alt="Flags" style={{ width: '100%' }} ></img></td>
      <td><Button variant="outline-success" onClick={onOpenModal}>Wikipedia Information</Button></td>
    </tr> 
    ))}
   

  </tbody>
  <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
    </Modal>

    <Modal open={openLan} onClose={onCloseModalLan} center>
       
             <h2>Hola!</h2>
    </Modal>
   
        </Table>    
    </Col>
    
  </Row>
</Container>

 

    






        


        
      </>
    );
  }




}






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































