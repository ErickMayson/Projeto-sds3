import DataTable from 'components/DataTable';
import NavBar from 'components/NavBar';
import React from 'react';
import Footer from "./components/Footer"
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard de Vendas</h1>
        
        <div className="row px-3">
          <div className="col-sm-6">
              <h5 className="text-center text-secondary"> Taxa de Sucesso (%)</h5>
              <BarChart />
          </div>
          <div className="col-sm-6">
              <h5 className="text-center text-secondary" > Todas as vendas</h5>
              <DonutChart />
          </div>
        </div>
        <div>
        <h2 className="text-primary py-3"> Todas as Vendas</h2>
        </div>
        <DataTable />
        
      </div>
      <Footer />
    </>
  );
}

export default App;
