import React from 'react';
// custom
import { useGetCustomProductsQuery } from '../../api/productsApi';
// Card
import Card from '../../components/ui/Card';
// UserCard
import UserCard from '../../components/ui/UserCard';
// // loading
import Loading from '../../components/ui/Loading';

const CustomProducts = () => {
  const { data: products, isLoading, isError } = useGetCustomProductsQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !products) {
    return <div>오류 발생</div>;
  }

  return (
    <div>
      <UserCard />
      {products.map(item => {
        const {
          id,
          bookmarkProduct,
          supporterName,
          productName,
          supporterAmount,
          supporterRegion,
        } = item;

        return (
          <Card
            key={id}
            title={productName}
            supporter={supporterName}
            amount={supporterAmount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            bookmark={bookmarkProduct}
            id={id}
            supporterRegion={supporterRegion}
          />
        );
      })}
    </div>
  );
};

export default CustomProducts;
