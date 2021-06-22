import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid> */}
                <Grid item xs={12}>
          <FormControlLabel
            label="CASH"
            control={<Checkbox color="secondary" name="saveCash" value="yes" />}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="EFT"
            control={<Checkbox color="secondary" name="saveEFT" value="yes" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Tendered Amount"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}