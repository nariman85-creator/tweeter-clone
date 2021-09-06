import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
 
interface ModalProps{
    title?:string;
    children:React.ReactNode;
    visible?:boolean;
    onClose:()=>void;
};

const Modal :React.FC<ModalProps>=({title,children,onClose,visible=false}):React.ReactElement | null=> {
    if(!visible){
        return null;
    };
    return (
      <Dialog open={visible} onClose={onClose}>
          <DialogTitle id="form-dialog-title">
              <IconButton onClick={onClose} color="secondary">
                  <CloseIcon style={{fontSize:26}}/>
              </IconButton>
              {title}
{/* Войти в Твиттер          */}
 </DialogTitle>
          <DialogContent>
              {children}
          </DialogContent>
          <DialogActions>
                <Button onClick={onClose} color="primary" fullWidth>
                    Войти
              </Button>
          </DialogActions>
      
      </Dialog>
    )
}

export default Modal;
