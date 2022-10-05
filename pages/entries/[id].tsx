import { Card, CardHeader, Grid } from '@mui/material';
import { Layout } from '../../components/layouts';

export const EntryPage = () => {
  return (
    <Layout title='...'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title='Entry:' subheader={`Created -- minutes ago`} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EntryPage;
