import { useState } from 'react';
import  {useMediaQuery} from 'react-responsive';

import { Content } from "../../components/Content";
import { Detailsmodal } from '../../components/Detailsmodal';
import { SideBar } from "../../components/SideBar";
import { SideBarMobile } from '../../components/SideBar/Mobile';
import { TransactionModal } from '../../components/TransactionModal';

import './style.scss'

export function Home(){

  const isMobile = useMediaQuery({ maxWidth: '480px'})

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  function handleOpenTransactionModal(){
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
    setIsTransactionModalOpen(false);
  }

  function handleOpenDetailModal(){
    setIsDetailModalOpen(true);
  }

  function handleCloseDetailModal(){
    setIsDetailModalOpen(false);
  }

  return (
    <div className="homeContainer">

      { isMobile ? <SideBarMobile /> :  <SideBar /> }
      
      <Content 
        isMobile={isMobile} 
        isOpen={isTransactionModalOpen} 
        onOpenTransactionModal={handleOpenTransactionModal} 

        isDetailsModalOpen={isDetailModalOpen} 
        openDetailsModal={handleOpenDetailModal}
      />

      <TransactionModal 
        isOpen={isTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}
       
      />

      <Detailsmodal 
         isDetailsModalOpen={isDetailModalOpen}
         onRequestClose={handleCloseDetailModal}
      />
      
    </div>
  )
}