import React from 'react';
import Modal from "../../../../components/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStylesSignIn} from "../../../SignIn";

interface LoginModalProps{
    open:boolean;
    handleClickClose:()=>void;
}

export const LoginModal:React.FC<LoginModalProps>=({open,handleClickClose}):React.ReactElement=>{
    const classes=useStylesSignIn();
    return(
        <Modal visible={open} title="Создайте учетную запись" onClose={handleClickClose}>


            <FormControl className={classes.registerFormControll} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.registerSideField}
                        autoFocus
                        margin="dense"
                        label="Имя"
                        variant="filled"
                        id="name"
                        InputLabelProps={{
                            shrink:true
                        }}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerSideField}
                        margin="dense"
                        label="Email"
                        variant="filled"
                        id="email"
                        InputLabelProps={{
                            shrink:true
                        }}
                        type="text"
                        fullWidth
                    />

                    <TextField
                        className={classes.registerSideField}
                        variant="filled"
                        margin="dense"
                        InputLabelProps={{
                            shrink:true
                        }}

                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    <Button  variant="contained" color="primary">Далее</Button>
                </FormGroup>
            </FormControl>

        </Modal>

    );
}