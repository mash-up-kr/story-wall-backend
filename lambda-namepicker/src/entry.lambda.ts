import { APIGatewayProxyEvent, APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda';
import { bootstrap } from './bootstrap';
import configureProxy from '@vendia/serverless-express';

let proxy: Handler;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
): Promise<APIGatewayProxyResult> => {
  console.log(event);
  if (!proxy) {
    const { instance } = await bootstrap();
    proxy = configureProxy({ app: instance });
  }

  return proxy(event, context, callback);
};

module.exports = {
  handler,
};
