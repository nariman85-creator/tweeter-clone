import React from "react";
import Modal from "../../../../components/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const RegisterModal=()=>{
    return(
        <Modal visible={visibleModal==='signIn'} title="Войти в Твиттер" onClose={handleClickClose}>



            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        margin="dense"
                        label="Email"
                        variant="filled"
                        id="E-mail"
                        InputLabelProps={{
                            shrink:true
                        }}
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.loginSideField}

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
                    <Button onClick={handleClickClose} variant="contained" color="primary">Open</Button>

                </FormGroup>
            </FormControl>

        </Modal>

    );
}