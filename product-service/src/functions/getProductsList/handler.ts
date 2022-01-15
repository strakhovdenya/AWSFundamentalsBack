import { middyfy } from '@libs/lambda';
import productList from '../productList.json';
import schema from "@functions/getProductsList/schema";
import {ValidatedEventAPIGatewayProxyEvent} from "@libs/apiGateway";


const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema>  = async () => {
  return {
    statusCode: 200,
      body: JSON.stringify(productList)
  }
}

export const main = middyfy(getProductsList);
