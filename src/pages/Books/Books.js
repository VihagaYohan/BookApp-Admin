import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Container, Button, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import { ProductSort, ProductList, ProductFilterSidebar } from '../../sections/@dashboard/products';
import Iconify from '../../components/Iconify';
// mock
import PRODUCTS from '../../_mock/products';
import { CREATE_BOOK } from '../../constants/Route';

// ----------------------------------------------------------------------

export default function Books() {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Books">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Books
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to={CREATE_BOOK}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Book
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
