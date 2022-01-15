import { middyfy } from '@libs/lambda';
// import productList from '../productList.json';
import schema from "@functions/getProductsList/schema";
import {ValidatedEventAPIGatewayProxyEvent} from "@libs/apiGateway";


const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema>  = async (event) => {
   const id = event.pathParameters.productId;

  return {
    statusCode: 200,
      body: id
  }
}

export const main = middyfy(getProductsList);
